let nextDate = new Date("Feb 12, 2024 09:30:00").getTime();
let buttonElement = document.querySelector('#btn');

buttonElement.addEventListener("click", 
    function() {
        
        let updateCount = setInterval(timer, 1000);
        
    }
);

function timer() {

    let resultElement = document.querySelector("#result");
    let now = new Date().getTime();
  
    let timeDifference = nextDate - now;
  
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    resultElement.innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

    if (timeDifference < 0) {
      clearInterval(updateCount);
      resultElement.innerHTML = "IT'S TIME";
    }
};

