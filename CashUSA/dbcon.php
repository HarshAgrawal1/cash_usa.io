<?php
$server="localhost";
$user="root";
$password="";
$db="cash_usa";

$con=mysqli_connect($server,$user,$password,$db);

if($con){
    ?>
    <script>
        alert("Connection Successful");
    </script>
    <?php
}
else{
    ?>
    <script>
        alert("Connection Unsuccessful");
    </script>
    <?php
}
?>