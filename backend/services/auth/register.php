<?php
require_once __DIR__ . '/../../config/database.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name'], $data['email'], $data['password'])) {
    http_response_code(400);
    echo json_encode(["error" => "All fields required"]);
    exit;
}

$db = new Database();
$conn = $db->connect();

$hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);

$query = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
$stmt = $conn->prepare($query);

try {
    $stmt->execute([
        ':name' => $data['name'],
        ':email' => $data['email'],
        ':password' => $hashedPassword
    ]);

    echo json_encode(["message" => "User registered successfully"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Email already exists"]);
}
