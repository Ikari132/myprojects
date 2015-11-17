<?php

// Если существует сам запрос POST
if (!empty($_POST)) {


	// Если существуют данные и они не пусты
	if (

		!empty($_POST['name']) and 
		!empty($_POST['text']) and
		!empty($_POST['date'])

		) {


		// Пишем в базу, текстовый файл и т.д.
		/////

		$fp = fopen('base.txt', 'a');
		$write_to_base = fwrite($fp, $_POST['name'].";".$_POST['text'].";".date("Y-m-d H:i:s")."\n");
		fclose($fp);

		/////


		// Запись произошла успешно
		if ($write_to_base) {

			$answ['status'] = 'post_ok';
			echo json_encode($answ);

		// Ошибка записи в базу
		} else {
			$answ['status'] = 'post_error_writing_to_base';
			echo json_encode($answ);
		}



	// Пришли не все данные, которые необходимы
	} else {
		$answ['status'] = 'post_error_request_values';
		echo json_encode($answ);
	}


}

?>