//Necesito crear una funcion que me diga el tiempo que falta para navidad

//Funcion flecha con parametro "deadline" osea fecha limite. "Date" nos arroja la fecha actual.
/*const getRemainTime = deadline => {
    let now = new Date(), //Fecha en la que termina el tiempo
        //Tiempo faltante en milisegundos
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Dec 24 2023 12:00:00 GMT-7', 'clock', Feliz Navidad!);
*/

// Function to calculate the time remaining until Christmas
function getTimeRemaining() {
    const now = new Date();
    const christmasDay = new Date(now.getFullYear(), 11, 25); // December is 11 (0-based index)
    const timeRemaining = christmasDay - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Function to update the countdown display
function updateCountdown() {
    const countdown = document.getElementById('timer');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    const time = getTimeRemaining();

    daysSpan.textContent = String(time.days).padStart(2, '0');
    hoursSpan.textContent = String(time.hours).padStart(2, '0');
    minutesSpan.textContent = String(time.minutes).padStart(2, '0');
    secondsSpan.textContent = String(time.seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
