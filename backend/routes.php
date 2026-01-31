<?php
require_once __DIR__ . "/config/database.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$method = $_SERVER["REQUEST_METHOD"];

/*
  IMPORTANT:
  Your API base is /api
  So we remove /api from the URI
*/
$uri = str_replace("/api", "", $uri);

/* ======================
   TEST ROUTE (MANDATORY)
====================== */
if ($uri === "/test" && $method === "GET") {
    echo json_encode([
        "success" => true,
        "message" => "API working on Render"
    ]);
    exit;
}


/* ======================
   REGISTER
====================== */
if ($uri === "/register" && $method === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);

    if (
        empty($data["name"]) ||
        empty($data["email"]) ||
        empty($data["password"])
    ) {
        echo json_encode([
            "success" => false,
            "message" => "All fields required"
        ]);
        exit;
    }

    $name = $data["name"];
    $email = $data["email"];
    $password = password_hash($data["password"], PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );
        $stmt->execute([$name, $email, $password]);

        echo json_encode([
            "success" => true,
            "message" => "Account created successfully"
        ]);
    } catch (PDOException $e) {

    // MySQL duplicate email error code = 1062
    if ($e->getCode() == 23000) {
        echo json_encode([
            "success" => false,
            "message" => "Email already exists"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Registration failed",
            "error" => $e->getMessage()
        ]);
    }
}

    }
    exit;
}

/* ======================
   LOGIN
====================== */
if ($uri === "/login" && $method === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data["email"]) || empty($data["password"])) {
        echo json_encode([
            "success" => false,
            "message" => "Email and password required"
        ]);
        exit;
    }

    $email = $data["email"];
    $password = $data["password"];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user || !password_verify($password, $user["password"])) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email or password"
        ]);
        exit;
    }

    unset($user["password"]); // remove password hash

    echo json_encode([
        "success" => true,
        "message" => "Login successful",
        "user" => $user
    ]);
    exit;
}

/* ======================
   API NOT FOUND (ALWAYS LAST)
====================== */
echo json_encode([
    "success" => false,
    "message" => "API route not found",
    "uri" => $uri,
    "method" => $method
]);
exit;
