document.addEventListener('DOMContentLoaded', function() {
    var progressBars = document.querySelectorAll('.proj_moneybar');

    progressBars.forEach(function(bar) {
        var collMoney = parseFloat(bar.getAttribute('data-coll-money'));
        var reqMoney = parseFloat(bar.getAttribute('data-req-money'));
        var percentage = (collMoney / reqMoney) * 100;
        var filledBar = bar.querySelector('.fulled_bar');

        filledBar.style.width = percentage + '%';

        if (percentage >= 100) {
            bar.classList.add('full');
            filledBar.style.width = '100%';
        }
    });
});