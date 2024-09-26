<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "root";  //Default password for MAMP
$dbname = "resource_manager";  // Ensure this is the correct database name

// Create connection
$conn = new mysqli ($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

  
// Get form data
       $gender = $_POST["gender"];
       $name = $_POST["name"];
       $firstname = $_POST["firstname"];
       $date = $_POST["date"];
       $phone = $_POST["phone"];
       $email = $_POST["email"];
       // $cemail = $_POST ["cemail"] ;
       $password = $_POST["password"];
       // $cpassword =  $_POST ["cpassword"];
     

       // Insert data into database
            // Insert data into database
         $sql = "INSERT INTO users (gender, name, firstname, date, phone, email, password) VALUES ('$gender', '$name', '$firstname', '$date', '$phone', '$email', '$password')"; 

         // echo "<br>";
         if ($conn->query($sql) === TRUE) {
             echo "New record created successfully";
         } else {
             echo "Error: " . $sql . "<br>" . $conn->error;
         }

// Close connection
     $conn->close();
            
     


