

let nextDate = new Date("Feb 12, 2024 01:44:00").getTime();
let buttonElement = document.querySelector('#btn');


buttonElement.addEventListener("click", 
    function() {
        
        let updateCount = setInterval(timer, 1000);
        
    }
);

function timer() {

    let resultElement = document.querySelector('#result');
    let dayElement = document.querySelector('#day');
    let hourElement = document.querySelector('#hour');
    let minuteElement = document.querySelector('#minute');
    let secondElement = document.querySelector('#second');
    let now = new Date().getTime();
  
    let timeDifference = nextDate - now;
  
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    dayElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minuteElement.innerHTML = minutes;
    secondElement.innerHTML = seconds;
    
    // to fix
    // if (dayElement < 10) {
    //     dayElement = "0" + dayElement;
    // }

    if (timeDifference < 0) {
      clearInterval(updateCount);
      resultElement.style.color = 'red';
      resultElement.innerHTML = "THE END IT'S NEAR";
    }
};

