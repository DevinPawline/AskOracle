//blackwidow release date july 9 2021

const duedate = "July 9, 2021 12:00:00"
const secondDate = "September 3, 2021 12:00:00"
const thirdDate = "November 5, 2021 12:00:00"
const fourthDate = "December 17, 2021 12:00:00"


//time conversion
function getTimeLeft(duedate) {
    const total = Date.parse(duedate) - Date.parse(new Date()); //getting the time in between
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
};

//displaying clock and stopping it at zero
function startClock(id, duedate) {

    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

//taking delay off clock

function noDelay() {
    const t = getTimeLeft(duedate);

    
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
        clearInterval(timeInt);
    }
}

noDelay();
var timeInterval = setInterval(noDelay, 1000);
}



const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

startClock('clockDiv', duedate);

startClock('shang', secondDate);

startClock('eternals', thirdDate);

startClock('spiderman', fourthDate);


