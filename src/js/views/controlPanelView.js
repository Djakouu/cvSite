export const updateScore = score => {
    document.getElementById("scoreInput").value = score;
    if (score > 0)
        document.getElementById("scoreInput").style.color = "green";
    else if (score < 0)
        document.getElementById("scoreInput").style.color = "red";
    else 
        document.getElementById("scoreInput").style.color = "black";
}

let countDownTime;
let timer;
let timeLeft;

export const lunchTime = (time=121000) => {
    countDownTime = new Date().getTime() + time;
    timer = setInterval(myTimer, 1000);
}

export const stopTime = () => {
    if (document.getElementById("timeLeftInput").value != "TIME'S UP!") {
        clearInterval(timer);
        document.getElementById("timeLeftInput").value = "02:00"
        document.getElementById("timeLeftInput").style.color = "green"
    }
}

export const pauseTime = () => {
    clearInterval(timer);
    timeLeft = countDownTime - new Date().getTime();
}

export const resumeTime = () => {
    lunchTime(timeLeft);
}

const myTimer = () => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    var timeLeft = countDownTime - now;            
    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    // If the count down is over, write some text 
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timeLeftInput").value = "TIME'S UP!";
    } 
    else {
        // Output the result 
        if (seconds<10) 
        document.getElementById("timeLeftInput").value = "0" + minutes + ":0" + seconds;
        else 
        document.getElementById("timeLeftInput").value = "0" + minutes + ":" + seconds;

        // If the time is less than 30 seconds change : take off the miuntes, change the color to red 
        // and make the font size bigger
        if (minutes < 1 && seconds < 30) {
        // Take off the minutes
        if(seconds < 10)
            document.getElementById("timeLeftInput").value = "0" + seconds;
        else
            document.getElementById("timeLeftInput").value = seconds;
        // Change color to red
        document.getElementById("timeLeftInput").style.color = "red";
        // Make the front size bigger
        document.getElementById("timeLeftInput").style.border = "none";
        document.getElementById("timeLeftInput").style.padding = "0";
        document.getElementById("timeLeftInput").style.fontSize = "2.4rem";
        }
        // If the time is less than 1 minute change color to orange
        else if (minutes < 1)
        document.getElementById("timeLeftInput").style.color = "orange";
    }
}

export const toggleButtons = action => {
    if (action == "start" || action == "startOver") {
        // Stop button  animation
        document.getElementById("start").style.animation = "none";
        // Toggle to "Stop" button
        document.getElementById("start").innerHTML = "Stop";
        // Show pause button
        document.getElementById("pause").style.animation = "none";
        document.getElementById("pause").style.display = "flex";
        setTimeout(() => {
            document.getElementById("pause").style.opacity = "1";
        }, 300);

    }
    else if (action == "stop") {
       
        // Toggle to Pause button and hide it
        document.getElementById("pause").innerHTML = "Pause";
        document.getElementById("pause").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("pause").style.display = "none";
        }, 300);
        
         // Toogle to "Start over" button
         setTimeout(() => {
            document.getElementById("start").innerHTML = "Start over";
            document.getElementById("start").style.animation = "heartBeat 5s infinite";
        }, 300);
        // Reset animation
    }
    else if (action == "pause") {
        // Chenge innerHTML
        document.getElementById("pause").innerHTML = "Resume";
        // Animate "Resume button"
        document.getElementById("pause").style.animation = "bounce 3s infinite 0s ease-in-out";
    }
    else { // action == "resume"
        // Stop animation 
        document.getElementById("pause").style.animation = "none";
        // Chenge innerHTML
        document.getElementById("pause").innerHTML = "Pause";
    }
}

