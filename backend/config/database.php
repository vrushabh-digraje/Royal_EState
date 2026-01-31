<?php

$mysqlUrl = getenv("MYSQL_URL");

if (!$mysqlUrl) {
    echo json_encode([
        "success" => false,
        "message" => "MYSQL_URL environment variable not set"
    ]);
    exit;
}

$parts = parse_url($mysqlUrl);

if (!isset($parts["host"], $parts["user"], $parts["pass"], $parts["path"])) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid MYSQL_URL format",
        "debug" => $mysqlUrl
    ]);
    exit;
}

$host = $parts["host"];
$user = $parts["user"];
$pass = $parts["pass"];
$port = $parts["port"] ?? 3306;
$dbname = ltrim($parts["path"], "/");

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4",
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
