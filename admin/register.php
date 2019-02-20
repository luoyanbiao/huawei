<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    // var_dump($json);
    
   $phone = $json -> phone;
   $ps = $json -> ps;
   $pwd = $json -> pwd;
   $pwdc = $json -> pwdc;

    $coon = new Mysqli("localhost", "root", "", "db_hauwei_admin", 3306);
    $sql = "INSERT INTO user_phone(phone,ps,pwd,pwdc) VALUES('$phone','$ps','$pwd','$pwdc')";
    $coon->query("SET CHARACTER SET 'utf8'");//读库   
    $coon->query("SET NAMES 'utf8'");//写库  
    $result = $coon -> query($sql);
    if($result) {
        // 注册成功
        $arr = array("code" => "200", "msg" => "");
    } else {
        // 注册失败
        $arr = array("code" => "1000", "msg" => "注册失败");
    }
    echo json_encode($arr);
?>
