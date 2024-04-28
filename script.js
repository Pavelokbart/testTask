let countDownDate = new Date("Jul 24, 2024 00:00:00").getTime();
let modal = document.getElementById("myModal");
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let inputField = document.querySelector(".input-field");

let erorModal = document.getElementById("errorModal");



let btn = document.getElementById("myBtn");
let btnClose = document.querySelector(".close-button");

let errorSpan = document.getElementsByClassName("close")[1];
let span = document.getElementsByClassName("close")[0];


let countdownfunction = setInterval(function() {
    // Получите текущую дату и время
    let now = new Date().getTime();

    
    let distance = countDownDate - now;

   
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

   
    document.querySelector(".days_time").innerHTML = days;
    document.querySelector(".hours_time").innerHTML = hours;
    document.querySelector(".minutes_time").innerHTML = minutes;
    document.querySelector(".seconds_time").innerHTML = seconds;

   
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.querySelector(".timer").innerHTML = "Время истекло";
    }
}, 1000);


span.onclick = function() {
    document.body.classList.remove('no-scroll');
    modal.style.display = "none";
}

errorSpan.onclick = function() {
    document.body.classList.remove('no-scroll');
    erorModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        document.body.classList.remove('no-scroll');
        modal.style.display = "none";
    }
}


btnClose.onclick = function() {
    modal.style.display = "none";
}
btn.onclick = function() {
    
    if (EMAIL_REGEXP.test(inputField.value)) {
        
        document.body.classList.add('no-scroll');
        modal.style.display = "block";
    
        
    } else {
        
        document.body.classList.add('no-scroll');
        erorModal.style.display = "block";
        
        
    }
}
document.querySelectorAll(".close-button").forEach(function(btn) {
    btn.onclick = function() {
        document.body.classList.remove('no-scroll');
        modal.style.display = "none";
        erorModal.style.display = "none";
    }
});

