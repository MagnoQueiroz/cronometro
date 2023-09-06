// oq é uma função construtora? operador construtor?
const showText = document.querySelector("#container p");
const button = document.querySelector("#button-init");
const pause = document.querySelector("#button-pause");
const stop = document.querySelector("#button-stop");

button.addEventListener("click", startChronometer);

let seconds = 0;
let minutes = 0;
let hours = 0;
let currentChronometer = null;

function processChronometer() {
    const times = chronometer();
    const showTime = showValues(times);
    showText.innerHTML = `<p>${showTime}</p>`;
}

function chronometer() {
    ++seconds;

    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes === 60) {
        hours += 1;
        minutes = 0;
    }

    console.log(hours, minutes, seconds);

    return [hours, minutes, seconds];
}

function showValues(time) {
    return `${convertNumber(time[0])}:${convertNumber(time[1])}:${convertNumber(
        time[2]
    )}`;
}

function startChronometer() {
    currentChronometer = setInterval(processChronometer, 1000);
    button.toggleAttribute("disabled");
    //button.disabled = !event.target.checked;
    pause.removeAttribute("disabled");
}

function convertNumber(num) {
    return num >= 10 ? num : `0${num}`;
}

pause.addEventListener("click", pauseChronometer);

function pauseChronometer() {
    clearInterval(currentChronometer);
    pause.toggleAttribute("disabled");
    //pause.disabled = !event.target.checked;
    button.removeAttribute("disabled");
}

stop.addEventListener("click", stopChronometer);

function stopChronometer() {
    clearInterval(currentChronometer);
    pause.removeAttribute("disabled");
    button.removeAttribute("disabled");

    seconds = 0;
    hours = 0;
    minutes = 0;

    showText.innerHTML = `${convertNumber(hours)}:${convertNumber(
        minutes
    )}:${convertNumber(seconds)}`;
}
