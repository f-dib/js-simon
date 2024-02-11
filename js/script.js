let nextDate = new Date("Feb 12, 2024 09:30:00").getTime();
let buttonElement = document.querySelector('#btn');


buttonElement.addEventListener("click", 
    function() {
        
        let updateCount = setInterval(timer, 1000);
        
    }
);

function timer() {

    let dayElement = document.querySelector('#day');
    let hourElement = document.querySelector('#hour');
    let minuteElement = document.querySelector('#minute');
    let secondElement = document.querySelector('#second');
    let now = new Date().getTime();
  
    let timeDifference = nextDate - now;
  
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000));

    dayElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minuteElement.innerHTML = minutes;
    secondElement.innerHTML = seconds;
    

    if (seconds.length < 2) {
        seconds = 0 + seconds;
    }

    if (timeDifference < 0) {
      clearInterval(updateCount);
      resultElement.innerHTML = "IT'S TIME";
    }
};

