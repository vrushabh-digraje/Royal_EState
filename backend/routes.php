<?php
require_once __DIR__ . "/config/database.php";

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$method = $_SERVER["REQUEST_METHOD"];

$uri = str_replace("/api", "", $uri);

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
        echo json_encode([
            "success" => false,
            "message" => "Email already exists"
        ]);
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

    unset($user["password"]);

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
