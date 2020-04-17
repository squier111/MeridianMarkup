<?php 
//$body = print_r($_POST, true);
$body ="\rИмя: {$_POST['type1']};\r\n<br>mail: {$_POST['type4']};\r\n<br>phone: {$_POST['type3']};\r\n<br>mes: {$_POST['type5']};\r\n";
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail( 'ob@proverstka.com', 'aquasector', $body, $headers);
//echo 'ok';
?>