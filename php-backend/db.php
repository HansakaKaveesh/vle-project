<?php
$host = '34.55.193.253'; // Google Cloud SQL public IP
$user = 'root'; // Database username (default: root)
$password = ''; // Your database password
$database = 'vle_database'; // Your database name

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
