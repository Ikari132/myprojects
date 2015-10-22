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
echo 'Соединение успешно установлено';
mysql_select_db('u920919254_123') or die('Не удалось выбрать базу данных');

// Выполняем SQL-запрос
$query = 'SELECT * FROM aa';
$result = mysql_query($query) or die('Запрос не удался: ' . mysql_error());

// Выводим результаты в html
echo "<table>\n";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Освобождаем память от результата
mysql_free_result($result);

// Закрываем соединение
mysql_close($link);

?>