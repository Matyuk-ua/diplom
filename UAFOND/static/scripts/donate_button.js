// Додає обробник події 'click' до кнопки
document.getElementById('donate_button').addEventListener('click', function(e) {
    // Запобігає звичайній поведінці кнопки
    e.preventDefault();
    // Ініціалізує змінну для валідації форми
    let isValid = true;
    // Отримує значення інпутів
    const donateAmount = document.getElementById('donateAmount').value.trim();
    const cardNum = document.getElementById('card_num').value.trim();
    const cardDate = document.getElementById('card_date').value.trim();
    const cvv = document.getElementById('CVV').value.trim();
    // Скидає всі попередні помилки
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    // Перевірка суми внеску
    if (!donateAmount || isNaN(donateAmount) || donateAmount <= 0) {
        // Якщо сума некоректна, відображає помилку
        document.getElementById('donateAmountError').textContent = 'Будь ласка, введіть коректну суму.';
        document.getElementById('donateAmountError').style.display = 'block';
        isValid = false;
    }
    // Перевірка номеру картки
    if (!cardNum || cardNum.length !== 16 || isNaN(cardNum)) {
        // Якщо номер картки некоректний, відображає помилку
        document.getElementById('cardNumError').textContent = 'Будь ласка, введіть коректний номер картки.';
        document.getElementById('cardNumError').style.display = 'block';
        isValid = false;
    }
    // Перевірка дати
    const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardDate || !datePattern.test(cardDate)) {
        // Якщо дата некоректна, відображає помилку
        document.getElementById('cardDateError').textContent = 'Будь ласка, введіть коректну дату у форматі ММ/РР.';
        document.getElementById('cardDateError').style.display = 'block';
        isValid = false;
    }
    // Перевірка CVV/CVC
    if (!cvv || cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
        // Якщо CVV некоректний, відображає помилку
        document.getElementById('cvvError').textContent = 'Будь ласка, введіть коректний CVV/CVC.';
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    }
    // Якщо всі поля форми пройшли валідацію
    if (isValid) {
        // Очищає всі поля форми
        document.getElementById('donateAmount').value = '';
        document.getElementById('card_num').value = '';
        document.getElementById('card_date').value = '';
        document.getElementById('CVV').value = '';
        // Відображає повідомлення про успішний внесок
        alert('Дякуємо за ваш внесок.');
    }
});