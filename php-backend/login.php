<?php
// Allow requests from all origins
header("Access-Control-Allow-Origin: https://vle-project-172202922309.us-central1.run.app");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");

// Allow HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Include database connection
include 'db.php';

// Your existing code
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo json_encode(["success" => true, "message" => "Login successful", "user" => $user]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);
}

$conn->close();
?>
