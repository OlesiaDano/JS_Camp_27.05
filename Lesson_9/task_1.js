window.addEventListener("load", () => {
    const getSelector = selector => document.querySelector(selector);
    const stopwatch = getSelector(".container-stopwatch");

    const display = getSelector(".stopwatch-display");
    display.children[0].className = "hours";
    display.children[1].className = "minutes";
    display.children[2].className = "seconds";
    const hours = getSelector(".hours");
    const minutes = getSelector(".minutes");
    const seconds = getSelector(".seconds");


    const control = getSelector(".stopwatch-control");
    control.children[0].className = "start";
    control.children[1].className = "stop";
    control.children[2].className = "reset";


    const start = getSelector(".start");
    const stop = getSelector(".stop");
    const reset = getSelector(".reset");

    let secondsCounter = 0;
    let minutesCounter = 0;
    let hoursCounter = 0;

    let countStart;


    const count = () => {
        secondsCounter++;
        secondsCounter = counterFormatter(secondsCounter);
        seconds.innerText = secondsCounter;
        if (secondsCounter === 60) {
            secondsCounter = 0;
            secondsCounter = counterFormatter(secondsCounter);
            seconds.innerText = secondsCounter;
            minutesCounter++;
            minutesCounter = counterFormatter(minutesCounter);
            minutes.innerText = minutesCounter;
        }else if (minutesCounter === 60) {
            minutesCounter = 0;
            minutesCounter = counterFormatter(minutesCounter);
            minutes.innerText = minutesCounter;
            hoursCounter++;
            hoursCounter = counterFormatter(hoursCounter);
            hours.innerText = hoursCounter;
        }else if (hoursCounter === 24) {
            hoursCounter = 0;
            hoursCounter = counterFormatter(hoursCounter);
            hours.innerText = hoursCounter;
        };
    };

    function counterFormatter(counter) {
        return counter < 10 ? "0" + counter : counter;
    }

    start.onclick = () => {
        for(let i=0; i < stopwatch.classList.length; i++) {
            if (stopwatch.classList[i] !== 'container-stopwatch') {
                stopwatch.classList.remove(stopwatch.classList[i]);
            }
        }
        stopwatch.classList.add("green");
        countStart = setInterval(count, 1000);
        start.disabled=true;
        if(start.disabled === true) {
            start.setAttribute("style", "color: rgba(88, 88, 88, .5);");
        }
    } 

    stop.onclick = () => {
        for(let i=0; i < stopwatch.classList.length; i++) {
            if (stopwatch.classList[i] !== 'container-stopwatch') {
                stopwatch.classList.remove(stopwatch.classList[i]);
            }
        }
        stopwatch.classList.add("red");
        clearTimeout(countStart);
        start.disabled=false;
        if(start.disabled === false) {
            start.setAttribute("style", "color: white;");
        }
    } 

    reset.onclick = () => {
        for(let i=0; i < stopwatch.classList.length; i++) {
            if (stopwatch.classList[i] !== 'container-stopwatch') {
                stopwatch.classList.remove(stopwatch.classList[i]);
            }
        }
        stopwatch.classList.add("silver");
        clearTimeout(countStart);
        secondsCounter = "00";
        minutesCounter = "00";
        hoursCounter = "00";
        seconds.innerText = secondsCounter;
        minutes.innerText = minutesCounter;
        hours.innerText = hoursCounter;
        start.disabled=false;
        if(start.disabled === false) {
            start.setAttribute("style", "color: white;");
        }
    }
    
});