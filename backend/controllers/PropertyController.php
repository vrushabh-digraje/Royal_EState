<?php
require_once __DIR__ . '/../config/database.php';

class PropertyController {

    // GET ALL PROPERTIES
    public static function all() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM properties ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    // SEARCH PROPERTIES
    public static function search() {
        global $pdo;

        $location = $_GET['location'] ?? '';
        $type = $_GET['type'] ?? '';
        $min = $_GET['min_price'] ?? 0;
        $max = $_GET['max_price'] ?? 999999999;

        $sql = "SELECT * FROM properties WHERE price BETWEEN ? AND ?";
        $params = [$min, $max];

        if ($location) {
            $sql .= " AND location LIKE ?";
            $params[] = "%$location%";
        }

        if ($type) {
            $sql .= " AND type = ?";
            $params[] = $type;
        }

        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);

        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    // SINGLE PROPERTY
    public static function show($id) {
        global $pdo;

        $stmt = $pdo->prepare("SELECT * FROM properties WHERE id = ?");
        $stmt->execute([$id]);
        $property = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($property) {
            echo json_encode($property);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Property not found"]);
        }
    }
}
