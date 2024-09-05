<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Peer Tutoring Program</title>
    <link rel="stylesheet" href="./script.js">
</head>
<style>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #003366;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}

header h1 {
    margin: 0;
    font-size: 1.5rem;
}

main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.login-container {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.auth-form h2 {
    margin-bottom: 1rem;
    color: #003366;
}

.auth-form div {
    margin-bottom: 1rem;
}

.auth-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.auth-form input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.auth-form button {
    width: 100%;
    padding: 0.75rem;
    background-color: #003366;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
}

.auth-form button:hover {
    background-color: #002244;
}

footer {
    background-color: #003366;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    margin-top: auto;
}

footer p {
    margin: 0;
}

</style>
<body>
    <header>
        <h1>Peer Tutoring Program</h1>
    </header>
    <main>
        <div class="login-container" >
            <form class="auth-form" action="login_handler.php" method="POST" >
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </main>

   
</body>
<footer>
    <p>&copy; </p>Peer Tutoring
</footer>
</html>
