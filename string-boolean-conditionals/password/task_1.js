let password = 'sdf';

if (password.length >= 4 && (password.includes("_") || password.includes("-"))) {

    console.log('Пароль надёжный')
} else {
    console.log('Пароль недостаточно надёжный')
}
