<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

// Create a connection to the database
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
// Initialize the $country variable to prevent the warning
$country = isset($_GET['country']) ? filter_input(INPUT_GET, 'country', FILTER_SANITIZE_STRING) : '';

// If a country is provided, modify the query to filter by the country
if ($country) {
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
    $stmt->execute(['country' => "%$country%"]);
} else {
    // If no country is provided, fetch all countries
    $stmt = $conn->query("SELECT * FROM countries");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>

