<?php
// Enable CORS
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from the frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  // Specify allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow required headers

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection
$conn = new mysqli('localhost', 'root', '', 'nextjs_auth');
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Retrieve input data
$input = json_decode(file_get_contents('php://input'), true);

// Validate input data
if (isset($input['fullname'], $input['username'], $input['email'], $input['password'])) {
    $fullname = $conn->real_escape_string($input['fullname']);
    $username = $conn->real_escape_string($input['username']);
    $email = $conn->real_escape_string($input['email']);
    $password = password_hash($input['password'], PASSWORD_DEFAULT); // Hash the password

    // Insert data into the database
    $query = "INSERT INTO users (fullname, username, email, password) VALUES ('$fullname', '$username', '$email', '$password')";

    if ($conn->query($query)) {
        echo json_encode(["success" => true, "message" => "Registration successful!"]);
    } else {
        echo json_encode(["error" => "Database error: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Invalid input"]);
}

$conn->close();
?>
