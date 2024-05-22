<?php
$login = $_POST['login'];
$password = $_POST['password'];
$user_list = [
    ['login' => 'tomas', 'password' => 'edison'],
    ['login' => 'Skladovskaya_Kuri', 'password' => 'Maria']
];

function is_login_valid($login) {
    if (!preg_match('/^[a-zA-Z0-9_-]+$/', $login)) {
        return false;
    }
    return true;
}

function login_password_check($login, $password, $user_list) {
    foreach ($user_list as $user) {
        if ($user['login'] == $login && $user['password'] == $password) {
            return true;
        }
    }
    return false;
}

function authorization() {
    if (empty($_POST['login']) || empty($_POST['password'])) {
        echo "Пожалуйста, заполните все поля!";
        return;
    }
    if (!is_login_valid($_POST['login'])) {
        echo "Некорректный адрес почты!";
        return;
    }
    if (!(login_password_check($login, $password, $user_list))) {
        echo "Пользователь не найден!";
        return;
    }
    echo "Вы авторизованы";
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    authorization();
}
?>