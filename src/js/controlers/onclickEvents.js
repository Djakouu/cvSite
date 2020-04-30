// File content

/////////////////////////////////////
// The rules' interface //
/////////////////////////////////////
// elements("nextRule").onclick()
// elements("previousRule").onclick()
// elements("skipRules").onclick()
// elements("ready").onclick()
// getRadioCheckedValue()

/////////////////////////////////////
// The game' interface //
/////////////////////////////////////
// elements("nextLevel").onclick()
// elements("previousLevel").onclick()
// elements("start").onclick()
// elements("pause").onclick()

import { game } from "../index"
import { elements, isMobileDevice } from "../views/base"
import * as transition from "../views/transition"
import * as musicControler from "./music"

/////////////////////////////////////
// The rules' interface //
/////////////////////////////////////
elements("nextRule").onclick = () => {
    const ruleNb = parseInt(elements("ruleNb").innerHTML);
    // Show "previousRule" button
    transition.showButton("previousRule");
    // Update rules number and its animation
    transition.updateAndAnimate(ruleNb+1, "Down");
    // Toggle rule page
    transition.hideElements(["ruleAd"+ruleNb], "zoomOut");
    transition.showElements(["ruleAd"+(ruleNb+1)], "slideInLeft");
    // skip rule if last page
    if (ruleNb+1 == 4) {
      transition.skipRules();
    }
}
  
elements("previousRule").onclick = () => {
    const ruleNb = parseInt(elements("ruleNb").innerHTML);
    // Update rules number and its animation
    transition.updateAndAnimate(ruleNb-1, "Up");
    // Hide "previousRule" button if first page
    if (ruleNb-1 == 1) {
        transition.hideButton("previousRule");
    }
    // Toggle rule page
    transition.hideElements(["ruleAd"+ruleNb], "slideOutLeft");
    transition.showElements(["ruleAd"+(ruleNb-1)], "zoomIn");
    // Show "nextRule" button, "skipRules" button, "rulesAd title" and "rulesNb" if last page
    if (ruleNb-1 == 3) {
        // Show "nextRule" button
        transition.showButton("nextRule");
        // Show "skipRules" button
        transition.showButton("skipRules");
        // Show "rulesAdTilte" and "rulesNb"
        transition.showElements(["rulesAdTitle", "rulesNb"], "zoomIn");
    }
}
  
elements("skipRules").onclick = () => transition.skipRules();
  
elements("ready").onclick = () => {
    // Set game.level according to the form
    game.level = parseInt(getRadioCheckedValue("level"));
    elements("levelInput").value = game.level + "/3";
    elements("dashboardLevelInput").value = game.level + "/3";
    //Hide "previousLevel" or "nextLevel" buttons if game.level = 1 or 3 respectively
    if (game.level == 1)
        transition.hideButton("previousLevel");
    else if (game.level == 3)
        transition.hideButton("nextLevel");
    // Hide the rules interface
    transition.hideElements(["rules"], "zoomOut");
    // Show the game interface
    transition.showElements(["game"], "slideInDown");
    // Set the message to show to pause the game according to the device
    if (!isMobileDevice()) 
      elements("esc").innerHTML = " Press 'ESC' key to pause ";
    else
      elements("esc").innerHTML = " Tap the 'screen' to pause ";
    // Switch music
    setTimeout(() => {
        musicControler.switchMusic("RGwaGzIp7T8");
        game.music = "RGwaGzIp7T8";
    }, 2500);
}

const getRadioCheckedValue = radio_name => {
    const oRadio = document.forms[0].elements[radio_name];
    for (let i = 0; i < oRadio.length; i++) {
      if (oRadio[i].checked) {
        return oRadio[i].value;
      }
    }
    return '';
}

/////////////////////////////////////
// The game's interface //
/////////////////////////////////////

// Changing level
elements("nextLevel").onclick = () => {
    if (game.robot)
      game.stop();
    game.level += 1;
    elements("levelInput").value = game.level + "/3";
    elements("dashboardLevelInput").value = game.level + "/3";
    if (game.level == 3)
      transition.hideButton("nextLevel");
    if (game.level > 1)
      transition.showButton("previousLevel");
}
  
elements("previousLevel").onclick = () => {
    if (game.robot)
      game.stop();
    game.level -= 1;
    elements("levelInput").value = game.level + "/3";
    elements("dashboardLevelInput").value = game.level + "/3";
    if (game.level == 1)
      transition.hideButton("previousLevel");
    if (game.level < 3)
      transition.showButton("nextLevel");
}
  
// Starting and stopping the game by clicking on the button "Start" or "Stop"
elements("start").onclick = () => {
    const innerHTML = elements("start").innerHTML;
    if (innerHTML == "Start") {
      // Start the game
      game.start(); 
    }
    else if (innerHTML == "Stop") {
      game.stop();
    }
    else { // innerHTML == "Start over"
      // Restart the game, the animation and the time
      game.startOver();
    }
};
  
// Pausing and resuming the game by clicking on the button "Pause" or "Resume"
elements("pause").onclick = () => {
    let innerHTML;
    if (game.run) {
      innerHTML = elements("pause").innerHTML;
      if (innerHTML == "Pause") {
        // Pause the game
        game.pause();
        // Toggle buttons
        transition.toggleButtons("pause");
      }
    }
    else {
      innerHTML = elements("pause").innerHTML;
      if (innerHTML == "Resume") {
        // Resume the game
        game.resume();
        // Toggle buttons
        transition.toggleButtons("resume");
      }
    }
}