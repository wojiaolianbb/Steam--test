<?php
    include('./conntct.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];   
    $callback = $_REQUEST['callback'];

    $sql = "select * from userdate where user_name='$username' and user_pwd='$password'";

    $res = $mysqli->query($sql);
    
    if($res->num_rows>0){
        echo $callback.'({"has":true})';
    }else{
        echo $callback.'({"has":false})';
    }
 
    $mysqli->close();

?>