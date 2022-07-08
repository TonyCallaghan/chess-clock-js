let changeTime;
const Wtime = document.getElementById("Wtime");
const Btime = document.getElementById("Btime");
const btnTime = document.getElementById("btnTime");
const toggle = document.getElementById('toggle');

const updateTimes = (time) => {
    time--;
    if (time == 0) {
        time++;
        Btime.innerText = `0${time}:00`;
        Wtime.innerText = `0${time}:00`;
        btnTime.innerText = `0${time}:00 Minute`;
    } else if (time < 10) {
        Btime.innerText = `0${time}:00`;
        Wtime.innerText = `0${time}:00`;
        btnTime.innerText = `0${time}:00 Minutes`;
    } else {
        Btime.innerText = `${time}:00`;
        Wtime.innerText = `${time}:00`;
        btnTime.innerText = `${time}:00 Minutes`;
    }
}

const startTimer = (duration, display) => {
    let timer = duration,
        minutes,
        seconds;
    changeTime = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(changeTime);
            gameOver = true;
            if(whiteTurn) {
                toggle.innerText="White Wins";
                toggle.style.color="white";
                Wtime.innerText="     ";
                Btime.innerText="     ";
            } else {
                toggle.innerText="Black Wins";
                toggle.style.color="black";
                Wtime.innerText="     ";
                Btime.innerText="     ";
            }
        }
    }, 1000);
};

let gameOver = false;
let whiteTurn = true;
const switcher = () => {
    if(gameOver) {
        window.location.reload();
    }
    clearInterval(changeTime);
    let current;
    if (whiteTurn) {
        current = Wtime;
    } else {
        current = Btime;
    }
    const time = current.innerText;

    if (whiteTurn === false) {
        whiteTurn = true;
        Btime.style.color="white";
        Wtime.style.color="white";
        startTimer(
            parseInt(time.slice(0, 2) * 60 + parseInt(time.slice(3, 5)) - 1),
            current
        );
    } else {
        whiteTurn = false;
        Btime.style.color="black";
        Wtime.style.color="black";
        startTimer(
            parseInt(time.slice(0, 2) * 60 + parseInt(time.slice(3, 5)) - 1),
            current
        );
    }
};
