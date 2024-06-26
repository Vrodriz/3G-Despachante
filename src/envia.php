<?php
header('Content-Type: application/json');

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = filter_var(trim($_POST['nome']), FILTER_SANITIZE_STRING);
    $telefone = filter_var(trim($_POST['telefone']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $pedido = filter_var(trim($_POST['pedido']), FILTER_SANITIZE_STRING);

    // Validação adicional
    if (empty($nome) || empty($email) || empty($pedido)) {
        $response['message'] = "Por favor, preencha todos os campos obrigatórios.";
        echo json_encode($response);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = "Por favor, insira um endereço de e-mail válido.";
        echo json_encode($response);
        exit;
    }

    $para = "vrfern0ndes@gmail.com"; // Substitua pelo seu endereço de email
    $assunto = "Cliente - 3GDespachante";

    $corpo = "Nome: $nome\n";
    $corpo .= "Contato: $telefone\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Pedido: $pedido";

    $cabeca = "From: requisição@3gdespachante.com\r\n";
    $cabeca .= "Reply-To: $email\r\n";
    $cabeca .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabeca)) {
        $response['success'] = true;
        $response['message'] = "Solicitação enviada";
    } else {
        $response['message'] = "Houve um erro ao enviar o email!";
    }
} else {
    $response['message'] = "Método de solicitação inválido.";
}

echo json_encode($response);
?>
