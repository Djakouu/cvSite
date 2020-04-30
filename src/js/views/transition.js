// File content
// showButton()
// hideButton()
// toggleButtons()
// showElements()
// hideElements()
// updateAndAnimate()
// skipRules()
// showControlPanel()
// hideControlPanel()
// setEndGameAd()

import { elements } from "./base"

export const showButton = buttonId => {
    elements(buttonId).disabled = false;
    elements(buttonId).style.cursor = "pointer";
    elements(buttonId).style.opacity = "1";
}

export const hideButton = buttonId => {
    elements(buttonId).disabled = true;
    elements(buttonId).style.cursor = "auto";
    elements(buttonId).style.opacity = "0";
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

export const showElements = (elementsIds, sens) => {
    elementsIds.forEach(elementId => {
        // Reset animation
        elements(elementId).style.animation = sens + " 0.75s ease-out 0.75s";
        elements(elementId).style.animationFillMode = "backwards";
        // Set dispaly and animation depending on the element
        if (elementId.includes("rulesAdTitle"))
            elements(elementId).style.opacity = "1";
        else if (elementId == "endGame" || elementId == "controlPanel") {
            elements(elementId).style.opacity = "1";
            elements(elementId).style.display = "flex";
            elements(elementId).style.animation = sens + " 1s ease-out";
        }
        if (!elementId.includes("rulesAdTilte") && elementId != "endGame") {
            setTimeout(() => {
                elements(elementId).style.display = "flex";
                setTimeout(() => {
                    elements(elementId).style.opacity = "1";
                }, 700)
            }, 1000)
        }
    });
}

export const hideElements = (elementsIds, sens) => {
    elementsIds.forEach(elementId => {
        // Reset animation
        elements(elementId).style.animation = sens + " 0.75s ease-out 0.75s";
        elements(elementId).style.animationFillMode = "backwards"; 
        // Set display and opacity depending on the element
        if (sens == "zoomOut" || sens.includes("fadeOut"))
            elements(elementId).style.opacity = "0";
        if (sens.includes("fadeOut"))
            elements(elementId).style.animation = sens + " 0.75s ease-out 0s";
        if (elementId.includes("ruleAd") || elementId == "rules") {
            setTimeout(() => {
                if (sens == "slideOutLeft")
                    elements(elementId).style.opacity = "0";
                elements(elementId).style.display = "none";
            }, 1000)
        }
    });
}

export const updateAndAnimate = (ruleNb, sens) => {
    if (ruleNb == 3 && sens == "Up") {
        elements("ruleNb").innerHTML = ruleNb;
        elements("rulesNb").style.opacity = "1";
    }
    else {
        elements("ruleNb").style.animation = "fadeOut" + sens + " 0.75s ease-out 0.75s";
        elements("ruleNb").style.animationFillMode = "backwards"; 
        setTimeout(() => {
            elements("ruleNb").style.animation = "fadeIn" + sens + " 0.75s ease-out 0.75s";
            elements("ruleNb").style.animationFillMode = "backwards"; 
            elements("ruleNb").innerHTML = ruleNb;
        }, 1000)
    }
}

export const skipRules = () =>  {
    const ruleNb = parseInt(elements("ruleNb").innerHTML);
    // Show "previousRule" button
    showButton("previousRule");
    // Hide "nextRule" and "skipRules" buttons
    hideButton("skipRules");
    hideButton("nextRule");
    // Hide "RulesAdTitle", "ruleNb" and "rule page"
    hideElements(["rulesAdTitle", "rulesNb", "ruleAd"+ruleNb],  "zoomOut");
    setTimeout(() => {
      elements("ruleNb").innerHTML = 4;
    }, 1000);
    // Show last rule page
    showElements(["ruleAd4"], "slideInLeft");
}

export const hideControlPanel = async () => {
    let promise = new Promise((res, rej) => {
    elements("controlPanel").style.width = "0vw";
    elements("playgroundAndDashboard").style.width = "100vw";
    elements("esc").style.visibility = "visible";
    setTimeout(() => {
        elements("controlPanel").style.display = "none";
        elements("playground").style.height = "90%";
        elements("touchDevicesDashboard").style.height = "10%";
        setTimeout(() => {
            elements("touchDevicesDashboard").style.display = "flex";
        }, 200);
    }, 200);
    setTimeout(() => {
        res();
    }, 1000);
    });
    await promise;
}

export const showControlPanel = () => {
    elements("playground").style.height = "100%";
    elements("touchDevicesDashboard").style.height = "0%";
    setTimeout(() => {
        elements("touchDevicesDashboard").style.display = "none";
        elements("controlPanel").style.width = "20vw";
        elements("playgroundAndDashboard").style.width = "80vw";
        elements("esc").style.visibility = "hidden";
        setTimeout(() => {
          elements("controlPanel").style.display = "flex";
        }, 400);
    }, 200);
}

export const setEndGameAd = (you, your, finlaScore) => {
    // Set the ad
    elements("you").innerHTML = you;
    elements("your").innerHTML = your;
    elements("finalScore").innerHTML = finlaScore;
    // Render the ad
    showElements(["endGame"], "fadeIn");
}