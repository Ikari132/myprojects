<?php
$base = file("base.txt");

foreach ($base as $key => $value) {
	$str = trim($value);
	$str = explode(";", $str);

	$arr[] = array('name'=>$str[0],'text'=>$str[1],'date'=>$str[2]);
}

echo json_encode($arr);