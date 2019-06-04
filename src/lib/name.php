<?php
    include('./connect.php');

    $username = $_REQUEST['username'];
    $callback = $_REQUEST['callback'];

    $sql = "select * from userdate where user_name='$username'";

    $res = $mysqli->query($sql);
    
    if($res->num_rows>0){
        echo $callback.'({"has":true})';
    }else{
        echo $callback.'({"has":false})';
    }
 
    $mysqli->close();

?>