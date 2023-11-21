'use strict'

let result = $('p.result');
let btn = $('.btn');

btn.click(function () {
    let name = $('.name'),
        phone = $('.number'),
        subject = $('.subject'),
        message = $('.message');
    let hasError = false;

    if (!name.val()) {
        name.css('border-color', 'red');
        let hasError = true;
    } else {
        name.css('border-color', '#dee2e6');
    }
    if (!phone.val()) {
        phone.css('border-color', 'red');
        let hasError = true;
    } else {
        phone.css('border-color', '#dee2e6');
    }
    if (!subject.val()) {
        subject.css('border-color', 'red');
        let hasError = true;
    } else {
        subject.css('border-color', '#dee2e6');
    }
    if (!message.val()) {
        message.css('border-color', 'red');
        let hasError = true;

        alert('Заполните поля')
    } else {
        message.css('border-color', '#dee2e6');

    var text = 'Новая заявка:\n' + 'Имя:' + ' ' + name.val() + '\n' + 'Телефон:' + ' ' + phone.val() + '\n' + 'Регион:' + ' ' + subject.val() + '\n' + 'Сообщение:' + ' ' + message.val();

    send_tg(text);

    alert('Сообщение отправлено! Мы скоро свяжемся с вами!');
    $('.validate').each(function () {
        this.reset();
    });
}

})

// Предварительно заполняем данные вашего чата и бота в переменных chatid и token
function send_tg(text) {

    var chatid = '599315963',
        token = '6972178219:AAGUz4fjvVn2oCFLnWkgb1F1UW2KDEzRny8',
        z = $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
            data: "parse_mode=HTML&text=" + encodeURIComponent(text),
        })
}