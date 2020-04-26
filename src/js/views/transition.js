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

export const showElements = (elementsIds, sens) => {
    elementsIds.forEach(elementId => {
        elements(elementId).style.animation = sens + " 0.75s ease-out 0.75s";
        elements(elementId).style.animationFillMode = "backwards";
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
        elements(elementId).style.animation = sens + " 0.75s ease-out 0.75s";
        elements(elementId).style.animationFillMode = "backwards"; 
        if (sens == "zoomOut" || sens.includes("fadeOut"))
            elements(elementId).style.opacity = "0";
        // if (elementId == "controlPanel")
        //     elements(elementId).style.display = "none";
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
        // the 3 commented code lines below had to exist with document.getElemntById("ruleNb")
        // But had to be removed with elments.ruleNb !!
        // let elm = elements(ruleNb);
        // let newone = elm.cloneNode(true);
        // elm.parentNode.replaceChild(newone, elm);
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
