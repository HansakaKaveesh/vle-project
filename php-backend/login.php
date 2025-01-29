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
if (isset($input['username'], $input['password'])) {
    $username = $conn->real_escape_string($input['username']);
    $password = $input['password'];

    // Check user in the database
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user['password'])) {
            echo json_encode(["success" => true, "message" => "Login successful!"]);
        } else {
            echo json_encode(["error" => "Invalid credentials"]);
        }
    } else {
        echo json_encode(["error" => "User not found"]);
    }
} else {
    echo json_encode(["error" => "Invalid input"]);
}

$conn->close();
?>
