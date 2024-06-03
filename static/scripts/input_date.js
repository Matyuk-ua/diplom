document.getElementById('card_date').addEventListener('input', function(e) {
    let value = e.target.value;    
    if (value.length == 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    e.target.value = value;
});
document.getElementById('card_date').addEventListener('keydown', function(e) {
    const value = e.target.value;

    // Перевірка для видалення символу '/' на третій позиції
    if (e.key === 'Backspace' && value.charAt(2) === '/' && e.target.selectionStart === 3) {
        e.target.value = value.slice(0, 2);
        e.preventDefault(); // Запобігаємо звичайній поведінці Backspace
    }
});