let countDownDate = new Date("Jul 24, 2024 00:00:00").getTime();

// Обновляйте обратный отсчет каждую секунду
let countdownfunction = setInterval(function() {
    // Получите текущую дату и время
    let now = new Date().getTime();

    // Найдите разницу между сейчас и датой обратного отсчета
    let distance = countDownDate - now;

    // Расчеты времени для дней, часов, минут и секунд
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Преобразуйте числа в строки и добавьте ведущие нули, если они меньше 10
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Выведите результат в элементы с классом "timer_days", "timer_hours", "timer_minutes", "timer_seconds"
    document.querySelector(".days_time").innerHTML = days;
    document.querySelector(".hours_time").innerHTML = hours;
    document.querySelector(".minutes_time").innerHTML = minutes;
    document.querySelector(".seconds_time").innerHTML = seconds;

    // Если обратный отсчет закончился, напишите некоторый текст 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.querySelector(".timer").innerHTML = "Время истекло";
    }
}, 1000);

// Получите модальное окно
let modal = document.getElementById("myModal");

// Получите кнопку, которая открывает модальное окно
let btn = document.getElementById("myBtn");

// Получите элемент <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    document.body.classList.remove('no-scroll');
    modal.style.display = "none";
}

// Получите элемент <span>, который закрывает модальное окно ошибки
let errorSpan = document.getElementsByClassName("close")[1];

// Когда пользователь нажимает на <span> (x), закройте модальное окно ошибки
errorSpan.onclick = function() {
    document.body.classList.remove('no-scroll');
    erorModal.style.display = "none";
}

// Когда пользователь кликает в любом месте за пределами модального окна, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        document.body.classList.remove('no-scroll');
        modal.style.display = "none";
    }
}

// Получите кнопку, которая закрывает модальное окно
let btnClose = document.querySelector(".close-button");

// Когда пользователь нажимает на кнопку, закройте модальное окно 
btnClose.onclick = function() {
    modal.style.display = "none";
}

// Регулярное выражение для валидации email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// Получите поле ввода и кнопку
let inputField = document.querySelector(".input-field");

let erorModal = document.getElementById("errorModal");

// Когда пользователь нажимает на кнопку...
btn.onclick = function() {
    // Проверьте, является ли введенный текст действительным email
    if (EMAIL_REGEXP.test(inputField.value)) {
        // Если email действителен, откройте модальное окно
        document.body.classList.add('no-scroll');
        modal.style.display = "block";
        // Сбросьте цвет текста в поле ввода
        inputField.style.color = "black";
    } else {
        // Если email недействителен, измените цвет текста в поле ввода на красный
        document.body.classList.add('no-scroll');
        erorModal.style.display = "block";
        // Сбросьте цвет текста в поле ввода
        inputField.style.color = "black";
    }
}

document.querySelectorAll(".close-button").forEach(function(btn) {
    btn.onclick = function() {
        document.body.classList.remove('no-scroll');
        modal.style.display = "none";
        erorModal.style.display = "none";
    }
});

