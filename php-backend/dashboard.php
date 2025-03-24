<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: login.php");
}

echo "Welcome " . $_SESSION['username'] . "!<br>";
echo "<a href='buy_package.php'>Buy VLE Subject Packages</a>";
?>
