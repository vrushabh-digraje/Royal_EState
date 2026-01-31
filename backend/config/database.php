<?php

$url = getenv("MYSQL_URL");

if (!$url) {
    echo json_encode([
        "success" => false,
        "message" => "MYSQL_URL not set"
    ]);
    exit;
}

$db = parse_url($url);

$host = $db["host"];
$port = $db["port"] ?? 3306;
$user = $db["user"];
$pass = $db["pass"];
$name = ltrim($db["path"], "/");

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$name;charset=utf8mb4",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed",
        "error" => $e->getMessage()
    ]);
    exit;
}
