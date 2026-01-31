<?php
require_once __DIR__ . '/../../config/database.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'], $data['password'])) {
    http_response_code(400);
    echo json_encode(["error" => "Email and password required"]);
    exit;
}

$db = new Database();
$conn = $db->connect();

$query = "SELECT * FROM users WHERE email = :email LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->execute([':email' => $data['email']]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($data['password'], $user['password'])) {
    echo json_encode([
        "message" => "Login successful",
        "user" => [
            "id" => $user['id'],
            "name" => $user['name'],
            "email" => $user['email']
        ]
    ]);
} else {
    http_response_code(401);
    echo json_encode(["error" => "Invalid credentials"]);
}
