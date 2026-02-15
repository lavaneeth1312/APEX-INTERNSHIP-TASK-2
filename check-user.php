<?php
$username = $_GET['username'];

if($username == "admin") {
echo "<span style='color:red'>Username already taken</span>";
} else {
echo "<span style='color:green'>Username available</span>";
}
?>
