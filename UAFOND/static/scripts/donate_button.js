document.getElementById('donate_button').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо звичайній поведінці кнопки

    let isValid = true;

    // Отримуємо значення інпутів
    const donateAmount = document.getElementById('donateAmount').value.trim();
    const cardNum = document.getElementById('card_num').value.trim();
    const cardDate = document.getElementById('card_date').value.trim();
    const cvv = document.getElementById('CVV').value.trim();

    // Скидаємо всі попередні помилки
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    // Перевірка суми внеску
    if (!donateAmount || isNaN(donateAmount) || donateAmount <= 0) {
        document.getElementById('donateAmountError').textContent = 'Будь ласка, введіть коректну суму.';
        document.getElementById('donateAmountError').style.display = 'block';
        isValid = false;
    }

    // Перевірка номеру картки
    if (!cardNum || cardNum.length !== 16 || isNaN(cardNum)) {
        document.getElementById('cardNumError').textContent = 'Будь ласка, введіть коректний номер картки.';
        document.getElementById('cardNumError').style.display = 'block';
        isValid = false;
    }

    // Перевірка дати
    const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardDate || !datePattern.test(cardDate)) {
        document.getElementById('cardDateError').textContent = 'Будь ласка, введіть коректну дату у форматі ММ/РР.';
        document.getElementById('cardDateError').style.display = 'block';
        isValid = false;
    }

    // Перевірка CVV/CVC
    if (!cvv || cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
        document.getElementById('cvvError').textContent = 'Будь ласка, введіть коректний CVV/CVC.';
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('donateAmount').value = '';
        document.getElementById('card_num').value = '';
        document.getElementById('card_date').value = '';
        document.getElementById('CVV').value = '';
        alert('Дякуємо за ваш внесок.');
    }
});
