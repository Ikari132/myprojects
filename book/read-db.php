 <?php
// $base = file("base.txt");

// foreach ($base as $key => $value) {
// 	$str = trim($value);
// 	$str = explode(";", $str);

// 	$arr[] = array('name'=>$str[0],'text'=>$str[1],'date'=>$str[2]);
// }

// echo json_encode($arr);

// Соединяемся, выбираем базу данных
$link = mysql_connect('mysql.hostinger.ru', 'u920919254_123', 'asdf4321')
    or die('Не удалось соединиться: ' . mysql_error());
//echo 'Соединение успешно установлено';
mysql_select_db('u920919254_123') or die('Не удалось выбрать базу данных');

// Выполняем SQL-запрос
$query = 'SELECT * FROM messages';
$result = mysql_query($query) or die('Запрос не удался: ' . mysql_error());

// Выводим результаты в html
if ( is_resource($result) ) 
        {
            //echo '<hr />';
            while ( $row = mysql_fetch_assoc($result) )
            {
            
            $arr[] = array('text'=> $row['message'],'date'=>$row['date']);
            echo ($arr); 
            
           
            }
        }

// Освобождаем память от результата
mysql_free_result($result);

// Закрываем соединение
mysql_close($link);
?>