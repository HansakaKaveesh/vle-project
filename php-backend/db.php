<?php
$host = 'localhost';
$user = 'root'; // Default WAMP MySQL username
$password = ''; // Default WAMP MySQL password
$database = 'vle_database';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
