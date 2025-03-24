<?php
// Allow requests from all origins
header("Access-Control-Allow-Origin: *");

// Allow specific headers (e.g., Content-Type)
header("Access-Control-Allow-Headers: Content-Type");

// Allow HTTP methods (e.g., POST, GET)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Include database connection
include 'db.php';

// Your existing code
$data = json_decode(file_get_contents('php://input'), true);
$full_name = $data['full_name'];
$username = $data['username'];
$country = $data['country'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$role = $data['role'];

$sql = "INSERT INTO users (full_name, username, country, email, password, role) VALUES ('$full_name', '$username', '$country', '$email', '$password', '$role')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "User registered successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
