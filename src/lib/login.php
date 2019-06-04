<?php
    // 引入php文件
    include('./connect.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $callback = $_REQUEST['callback'];
   

    $sql = "select * from userdate where user_name='$username'";

    $result = $mysqli->query($sql);
    
    $insertSql = "insert into userdate(user_name,user_pwd)values('$username','$password')";

    $res = $mysqli->query($insertSql);
    
    if($result->num_rows>0){
        die('用户名已存在');
    }

    if($res){
        echo $callback.'({"has":true})';
    }
    
    $mysqli->close();
?>