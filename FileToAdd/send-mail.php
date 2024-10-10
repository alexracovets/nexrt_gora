<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Зчитуємо JSON дані з тіла запиту
    $data = json_decode(file_get_contents('php://input'), true); 

    // Задаем переменные для данных из формы
    $formName = !empty($data['formName']) ? . $data['formName'] . : '';
    $name = !empty($data['name']) ? "<b>Ім'я: </b>". $data['name'] ."<br>" : ''; 
    $email = !empty($data['email']) ? "<b>Пошта: </b>". $data['email'] ."<br>" : '';
    $phone = !empty($data['phone']) ? "<b>Телефон: </b>". $data['phone'] ."<br>" : '';
    $grids = !empty($data['listGrid']) ? . $data['listGrid'] . : '';
    $message = !empty($data['message']) ? "<b>Коментар:</b> ". $data['message'] ."<br>" : '';

    // Создаем новый объект PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // Настройки SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'alexracovets@gmail.com';
    $mail->Password = 'wahjojqmbwamtnum';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // От кого письмо 
    $mail->setFrom('alexracovets@gmail.com', ' GORA');

    // Кому письмо
    $mail->addAddress('alexracovets@gmail.com', ' GORA');

    // Тема письма
    $mail->Subject = 'Заявка з сайту GORA';

    // Тело письма
    $mail->Body =
    '<p><strong><h3>'.$formName'</h3></strong></p>'. 
    '<p>'.$name.' </p>'. 
    '<p>'.$email.'</p>'. 
    '<p>'.$phone.'</p>'. 
    '<ul>'.$grids. '</ul>'.
    '<p>'.$message.'</p>'
    ;

    // Отправляем письмо
    if ($mail->send()) {
        echo 'Ваше повідомлення надіслане!';
    } else {
        echo 'Виникла помилка, сбробуй ще раз :) : ' . $mail->ErrorInfo;
    }
}
?>
