import { elements } from "./base"

export const updateScore = score => {
    elements("scoreInput").value = score;
    elements("dashboardScoreInput").value = score;
    if (score > 0) {
        elements("scoreInput").style.color = "green";
        elements("dashboardScoreInput").style.color = "green";
    }
    else if (score < 0) {
        elements("scoreInput").style.color = "red";
        elements("dashboardScoreInput").style.color = "red";
    }
    else {
        elements("scoreInput").style.color = "black";
        elements("dashboardScoreInput").style.color = "black";
    }
}

let countDownTime;
let timer;
let timeLeft;

export const lunchTime = (time=121000) => {
    countDownTime = new Date().getTime() + time;
    timer = setInterval(myTimer, 1000);
}

export const stopTime = () => {
    if (elements("timeLeftInput").value != "UP!") {
        clearInterval(timer);
        elements("timeLeftInput").value = "02:00"
        elements("dashboardTimeLeftInput").value = "02:00"
        elements("timeLeftInput").style.color = "green"
        elements("dashboardTimeLeftInput").style.color = "green"
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
        elements("timeLeftInput").value = "UP!";
        elements("dashboardTimeLeftInput").value = "UP!";
    } 
    else {
        // Output the result 
        if (seconds<10) {
            elements("timeLeftInput").value = "0" + minutes + ":0" + seconds;
            elements("dashboardTimeLeftInput").value = "0" + minutes + ":0" + seconds;
        }
        else {
            elements("timeLeftInput").value = "0" + minutes + ":" + seconds;
            elements("dashboardTimeLeftInput").value = "0" + minutes + ":" + seconds;
        }
        // If the time is less than 30 seconds change : take off the miuntes, change the color to red 
        // and make the font size bigger
        if (minutes < 1 && seconds < 30) {
        // Take off the minutes
        if(seconds < 10) {
            elements("timeLeftInput").value = "0" + seconds;
            elements("dashboardTimeLeftInput").value = "0" + seconds;
        }
        else {
            elements("timeLeftInput").value = seconds;
            elements("dashboardTimeLeftInput").value = seconds;
        }
        // Change color to red
        elements("timeLeftInput").style.color = "red";
        elements("dashboardTimeLeftInput").style.color = "red";
        // Make the front size bigger
        elements("timeLeftInput").style.border = "none";
        elements("dashboardTimeLeftInput").style.border = "none";
        elements("timeLeftInput").style.padding = "0";
        elements("dashboardTimeLeftInput").style.padding = "0";
        elements("timeLeftInput").style.fontSize = "2.4rem";
        elements("dashboardTimeLeftInput").style.fontSize = "2.4rem";
        }
        // If the time is less than 1 minute change color to orange
        else if (minutes < 1) {
            elements("timeLeftInput").style.color = "orange";
            elements("dashboardTimeLeftInput").style.color = "orange";
        }
    }
}

export const toggleButtons = action => {
    if (action == "start" || action == "startOver") {
        // Stop button  animation
        elements("start").style.animation = "none";
        // Toggle to "Stop" button
        elements("start").innerHTML = "Stop";
        // Show pause button
        elements("pause").style.animation = "none";
        elements("pause").style.display = "flex";
        setTimeout(() => {
            elements("pause").style.opacity = "1";
        }, 300);

    }
    else if (action == "stop") {
       
        // Toggle to Pause button and hide it
        elements("pause").innerHTML = "Pause";
        elements("pause").style.opacity = "0";
        setTimeout(() => {
            elements("pause").style.display = "none";
        }, 300);
        
         // Toogle to "Start over" button
         setTimeout(() => {
            elements("start").innerHTML = "Start over";
            elements("start").style.animation = "heartBeat 5s infinite";
        }, 300);
        // Reset animation
    }
    else if (action == "pause") {
        // Chenge innerHTML
        elements("pause").innerHTML = "Resume";
        // Animate "Resume button"
        elements("pause").style.animation = "bounce 3s infinite 0s ease-in-out";
    }
    else { // action == "resume"
        // Stop animation 
        elements("pause").style.animation = "none";
        // Chenge innerHTML
        elements("pause").innerHTML = "Pause";
    }
}

