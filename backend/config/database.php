<?php

$databaseUrl = getenv("DATABASE_URL");

if (!$databaseUrl) {
    echo json_encode([
        "success" => false,
        "message" => "DATABASE_URL not set"
    ]);
    exit;
}

$db = parse_url($databaseUrl);

$host = $db["host"];
$port = $db["port"] ?? 5432;
$user = $db["user"];
$pass = $db["pass"];
$name = ltrim($db["path"], "/");

try {
    $pdo = new PDO(
        "pgsql:host=$host;port=$port;dbname=$name",
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
