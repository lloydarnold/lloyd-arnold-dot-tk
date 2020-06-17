<?php
$message = '';
foreach($_POST as $key => $value) {
  $message .= "$key => $value\n";
}

$email_from = 'form-auto@lloydarnold.tk';
$email_subject = "New Form submission";
$email_to = 'larnold5189@gmail.com';
$headers .= "Reply-To: $email_from \r\n";

mail('larnold5189@gmail.com',$email_subject, $message, $headers);
header('Location: ../contact.html');
?>
