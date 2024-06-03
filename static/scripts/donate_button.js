document.getElementById('donate_button').addEventListener('click', function(e) {
    e.preventDefault();
    let isValid = true;

    const donateAmount = parseFloat(document.getElementById('donateAmount').value.trim());
    const cardNum = document.getElementById('card_num').value.trim();
    const cardDate = document.getElementById('card_date').value.trim();
    const cvv = document.getElementById('CVV').value.trim();

    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    if (isNaN(donateAmount) || donateAmount <= 0) {
        document.getElementById('donateAmountError').textContent = 'Будь ласка, введіть коректну суму.';
        document.getElementById('donateAmountError').style.display = 'block';
        isValid = false;
    }

    if (!cardNum || cardNum.length !== 16 || isNaN(cardNum)) {
        document.getElementById('cardNumError').textContent = 'Будь ласка, введіть коректний номер картки.';
        document.getElementById('cardNumError').style.display = 'block';
        isValid = false;
    }

    const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardDate || !datePattern.test(cardDate)) {
        document.getElementById('cardDateError').textContent = 'Будь ласка, введіть коректну дату у форматі ММ/РР.';
        document.getElementById('cardDateError').style.display = 'block';
        isValid = false;
    }

    if (!cvv || cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
        document.getElementById('cvvError').textContent = 'Будь ласка, введіть коректний CVV/CVC.';
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const projectId = document.getElementById('donate_button').dataset.projectId;
        
        console.log(`Sending amount: ${donateAmount}`);

        $.ajax({
            url: `/support_project/${projectId}/`,
            method: 'POST',
            data: {
                csrfmiddlewaretoken: document.querySelector('input[name="csrfmiddlewaretoken"]').value,
                amount: donateAmount
            },
            success: function(response) {
                console.log('Response:', response);
                if (response.new_coll_money) {
                    document.getElementById('donateAmount').value = '';
                    alert('Дякуємо за ваш внесок.');
                } else if (response.error) {
                    alert(response.error);
                }
            },
            error: function(response) {
                console.log('Error:', response);
            }
        });

        document.getElementById('donateAmount').value = '';
        document.getElementById('card_num').value = '';
        document.getElementById('card_date').value = '';
        document.getElementById('CVV').value = '';
    }
});
