// Змінна slideIndex зі значенням 1, щоб починати показ слайдів з першого
let slideIndex = 1;
// Виклик функції showSlides з початковим значенням slideIndex
showSlides(slideIndex);

// Функція для контролю переходу на наступний/попередній слайд
function plusSlides(n) {
  // Змінює значення slideIndex на n і викликає showSlides для показу відповідного слайду
  showSlides(slideIndex += n);
}

// Функція для контролю переходу до певного слайду
function currentSlide(n) {
  // Встановлює значення slideIndex на n і викликає showSlides для показу відповідного слайду
  showSlides(slideIndex = n);
}

// Основна функція для показу слайдів
function showSlides(n) {
  let i;
  // Отримує всі елементи з класом "ProjSlides" (самі слайди)
  let slides = document.getElementsByClassName("ProjSlides");
  // Отримує всі елементи з класом "dot" (точки навігації по слайдах)
  let dots = document.getElementsByClassName("dot");
  // Якщо поточний індекс перевищує кількість слайдів, встановлює slideIndex на 1
  if (n > slides.length) {slideIndex = 1}
  // Якщо поточний індекс менше 1, встановлює slideIndex на останній слайд
  if (n < 1) {slideIndex = slides.length}
  // Приховує всі слайди, перебираючи всі елементи з класом "ProjSlides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Видаляє клас "active" у всіх точок навігації, перебираючи всі елементи з класом "dot"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Відображає поточний слайд, встановлюючи стиль "display" на "block"
  slides[slideIndex-1].style.display = "block";
  // Додає клас "active" до поточної точки навігації
  dots[slideIndex-1].className += " active";
}