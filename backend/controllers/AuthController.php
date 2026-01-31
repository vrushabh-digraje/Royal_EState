<?php
require_once __DIR__ . '/../config/database.php';

class AuthController {

    public static function register() {
        global $pdo;
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['name'], $data['email'], $data['password'])) {
            echo json_encode(["success" => false, "message" => "Missing fields"]);
            return;
        }

        $hash = password_hash($data['password'], PASSWORD_BCRYPT);

        $stmt = $pdo->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );

        try {
            $stmt->execute([$data['name'], $data['email'], $hash]);
            echo json_encode(["success" => true, "message" => "User registered"]);
        } catch (PDOException $e) {
            echo json_encode(["success" => false, "message" => "Email already exists"]);
        }
    }

    public static function login() {
        global $pdo;
        $data = json_decode(file_get_contents("php://input"), true);

        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$data['email']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($data['password'], $user['password'])) {
            echo json_encode([
                "success" => true,
                "user" => [
                    "id" => $user['id'],
                    "name" => $user['name'],
                    "email" => $user['email']
                ]
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid credentials"]);
        }
    }
}
