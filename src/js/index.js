// TODO
// score handler done
// time handler done
// start/stop/ start_over button effects done
// pause/resume button done
// game.startover() function done
// toggle buttons on buttons handler done
// "next/previous level" buttons done
// Git done
// Rules done
// end of the Game : done
    // time out done
    // 0 enemies done
// Transition fade in start  done
// Responsive done
// Change robot speed ! done
// Stop on resize window done
// Press "escape to pause" message flash infinite done
// Heroku/ mywebsite done
// Sound effects done
// player folder done
//
// mobile game
// onclick folder
// Comments 
// Orga
// ask audio permission
// Robot class




import Position from "./models/Position"
import Robot from "./models/Robot"
import * as spriteView from "./views/spriteView"
import * as positionView from "./views/positionView"
import * as controlPanelView from "./views/controlPanelView"
import * as startGame from "./controlers/startGame"
import * as transition from "./views/transition"
import { elements } from "./views/base"
import * as musicControler from "./controlers/music"

const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
if (!isMobileDevice()) 
  document.getElementById("esc").innerHTML = " Press 'ESC' key to pause ";
else {
  document.getElementById("esc").innerHTML = " Tap the 'screen' to pause ";
}

let orientation = "";

export const game = new class {
  constructor(
          nom,
          arrows={
            arrowLeft:false, 
            arrowUp:false, 
            arrowRight:false, 
            arrowDown:false
          },
          lastRobotDirection="ArrowLeft", // Could be left or up because the robot starts at (0,0)
          robot,
          run=true,
          tFrameLast=0,
          level=1,
          enemies=[],
          score=0,
          time=181999,
          music="RGwaGzIp7T8"
      ) {
    this.nom = nom;
    this.arrows=arrows;
    this.lastRobotDirection=lastRobotDirection;
    this.robot = robot;
    this.run = run;
    this.tFrameLast= tFrameLast;
    this.level=level;
    this.enemies=enemies;
    this.touched=false // A lock for updating score after collision with darthvader.
    this.score=score;
    this.time=time;
    this.music=music;
  }
  async start() {
    if (isMobileDevice())
      orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    // Hide the control panel and widen the playgound if window.innerWidth < 900
    let promise = new Promise((res, rej) => {
      if (window.innerWidth < 900 && !orientation.includes("landscape")) {
        // transition.hideElements(["controlPanel"], "fadeOutRight")
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
          res(1);
        }, 1000);
      }
      else res(0);
    });
    await promise;
    // Demarrage du jeux  
    this.run = true;    
    startGame.startLevel(this.level);
    // Lunch time
    controlPanelView.lunchTime(); 
    // Toggle buttons
    controlPanelView.toggleButtons("start");
  }

  stop() {
    // Show the controlPanel if hidden (afte a window resize)
    if (elements("controlPanel").style.width == "0vw") {
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
    game.run=false;
    // Remove the robot
    if (this.robot) {
      const elem = document.getElementById(this.robot.id);
      elem.parentNode.removeChild(elem);
      this.robot = null;
    }
    // Remove enemies
    this.enemies.forEach(enemy => {
      spriteView.removeSprite(enemy.id);
    })
    this.enemies=[];
    // reset Arrows
    this.arrows={
      arrowLeft: false, 
      arrowUp: false, 
      arrowRight: false, 
      arrowDown: false
    }
    // Reset the score
    this.score=0;
    controlPanelView.updateScore(this.score);
    // Reset tFrameLast
    // Reset the controlPanel time
    controlPanelView.stopTime();
    // Toggle buttons
    controlPanelView.toggleButtons("stop");
  }

  startOver() {
    // Switch music
    if (this.music != "RGwaGzIp7T8") {
      musicControler.switchMusic("RGwaGzIp7T8");
      this.music = "RGwaGzIp7T8";
    }
    transition.hideElements(["endGame"], "fadeOut");
    if (elements("timeLeftInput").value == "UP!") {
      elements("timeLeftInput").value = "02:00";
      elements("dashboardTimeLeftInput").value = "02:00";

    }
    this.run=true;
    main(0, true);
    this.start(); 
  }

  pause() {
    this.run = false;
    // Pause the time
    controlPanelView.pauseTime();
    // Show the control panel if hidden and tighten the playgound
    if (elements("controlPanel").style.width == "0vw") {
      // transition.hideElements(["controlPanel"], "fadeOutRight")
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
   
  }

  async resume() {
    // Hide the control panel if window.innerWidth < 900
    let promise = new Promise((res, rej) => {
      if (window.innerWidth < 900 && !orientation.includes("landscape")) {
        // transition.hideElements(["controlPanel"], "fadeOutRight")
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
          res(true);
        }, 1000);
      }
      else res(false);
    });
    await promise
    // Resume the game animation
    this.run = true;
    main(0, true);
    // Resume the time
    controlPanelView.resumeTime();
  }

  update(tFrame) {
    // Stop the game if time out
    if (elements("timeLeftInput").value == "UP!") {
      musicControler.switchMusic('NZruHFBBi6Q');
      this.music = "NZruHFBBi6Q";
      this.stop();
      elements("you").innerHTML = "GAME OVER!";
      elements("your").innerHTML = "Time's up";
      elements("finalScore").innerHTML = "";
      transition.showElements(["endGame"], "fadeIn");
    }

    // Stop the game if no more enemies
    if (this.run && this.robot && this.enemies.length <= ((this.level-1)*2)+1) {
    //((this.level-1)*2)+1): means 1 darthvader left for level 1,
    // Three darthvader for level 2 and 5 darthvader for level 3
      let lastTime = elements("timeLeftInput").value;
      const lastScore = elements("scoreInput").value;
      this.stop();
      setTimeout(() => {
        
        elements("timeLeftInput").value = lastTime;
        elements("scoreInput").value = lastScore;
        let finalScore; // equals to (lastScore + lastTime div 3) so every 3 seconds make a point
        if (lastTime.includes(":")) { //lastTime > 30 seconds
          lastTime = lastTime.split(":");
          const minutes = parseInt(lastTime[0]);
          const seconds = parseInt(lastTime[1]);
          finalScore = parseInt(lastScore) + Math.trunc(((minutes*60)+seconds)/3);
        }
        else //lastTime < 30 seconds
          finalScore = parseInt(lastScore) + Math.trunc(parseInt(lastTime)/3);
          const random = Math.random();
          if (random < 0.33) {
            elements("you").innerHTML = "w   a   i   t";
            elements("your").innerHTML = " f    o    r"
            elements("finalScore").innerHTML = "i  t  .  .  . ";
          }
          else if (random < 0.66) {
            elements("you").innerHTML = "------------";
            elements("your").innerHTML = "  Drumroll  ";
            elements("finalScore").innerHTML = "------------";
          }
          else {
            elements("you").innerHTML = "And here is";
            elements("your").innerHTML = "your hard's work";
            elements("finalScore").innerHTML = "result";
          }
        if (finalScore > 0) {
          musicControler.switchMusic('Y7vJVKsDfn4');
          this.music = "Y7vJVKsDfn4";
          transition.showElements(["endGame"], "fadeIn");
          const lastLevel = this.level;
          setTimeout(() => {
            // If the player didn't hit startOver or next/previous level less than 2sec ago
            if (!this.run && lastLevel == this.level) {
              transition.hideElements(["endGame"], "fadeOut");
              elements("you").innerHTML = "YOU WON!";
              elements("your").innerHTML = "Final score:"
              elements("finalScore").innerHTML = finalScore;
              transition.showElements(["endGame"], "fadeIn");
            }
          }, 2000);
        }
        else { // finalScore <= 0
          musicControler.switchMusic('bI8u4k6wxek');
          this.music = "bI8u4k6wxek";
          transition.showElements(["endGame"], "fadeIn");
          const lastLevel = this.level;
          setTimeout(() => {
            // If the player didn't hit startOver or next/previous level less than 2sec ago
            if (!this.run && lastLevel == this.level) {
              transition.hideElements(["endGame"], "fadeOut");
              elements("you").innerHTML = "You lost!";
              elements("your").innerHTML = "Final score:";
              elements("finalScore").innerHTML = finalScore;
              transition.showElements(["endGame"], "fadeIn");
            }
          }, 2000);          
        }
      }, 200);
    };

    
    

    // Update the game according to the time
    let lap = tFrame - this.tFrameLast;
    
    if (this.run && this.robot) {
      if (!isMobileDevice()) {
        // Update this.arrows on keydown
        window.onkeydown = k => {
          if (this.arrows[k.key] != true && 
              (k.key === "ArrowLeft" ||
              k.key === "ArrowUp" ||
              k.key === "ArrowRight" || 
              k.key === "ArrowDown")
            ) {
            this.arrows = positionView.updateArrowsValues(k.key);
          }
          // Pause the game if "ESC" key is pressed (if window.innerWidth is < 900)
          else if (window.innerWidth < 900 && k.key === "Escape") {
            // or ontouchstart for touch diveces
            game.pause();
            // Toggle buttons
            controlPanelView.toggleButtons("pause");
          }
        };
      }
      else { // isMobileDevice
        // pause on screen touch
        document.ontouchstart = () => {
          game.pause();
          // Toggle buttons
          controlPanelView.toggleButtons("pause");
        };
        // Update this.arrows on keydown according to the mobile orientation
        if (orientation.includes("landscape")) {
          window.ondeviceorientation = orientation => {
            let x = orientation.gamma; // In degree in the range [0,360]
            let y = orientation.beta;  // In degree in the range [-180,180]
            if (y < -15)
              this.arrows = positionView.updateArrowsValues("ArrowLeft");
            else if (y > 15)
              this.arrows = positionView.updateArrowsValues("ArrowRight");
            else if (x > 15) // -30 < y < 30
              this.arrows = positionView.updateArrowsValues("ArrowUp");
            else if (x < -15) // -30 < y < 30
              this.arrows = positionView.updateArrowsValues("ArrowDown");
          }
        }
        else { // orientation.includes("portrait")
          window.ondeviceorientation = orientation => {
            let x = orientation.gamma; // In degree in the range [0,360]
            let y = orientation.beta;  // In degree in the range [-180,180]
            if (y < -15)
              this.arrows = positionView.updateArrowsValues("ArrowUp");
            else if (y > 15)
              this.arrows = positionView.updateArrowsValues("ArrowDown");
            else if (x > 15) // -30 < y < 30
              this.arrows = positionView.updateArrowsValues("ArrowRight");
            else if (x < -15) // -30 < y < 30
              this.arrows = positionView.updateArrowsValues("ArrowLeft");
          }
        }
      }
    }

    // Update the robot position
    if (this.robot) {
        const {stepX, stepY} = positionView.updateRobotPosition(this.arrows, this.robot);
        this.robot.moveRel(new Position(stepX, stepY));
    }
    
    

    // Update enemies positions then check possible collision 
    this.enemies.forEach(enemy => {
    // 1. update enemies position
      const {stepX, stepY} = positionView.updateEnemiesPosition(enemy, lap);
      enemy.moveRel(new Position(stepX, stepY));
    // 2. Check possible collision
      const collisionEnemy = positionView.checkCollision(enemy, this.robot);
      if (collisionEnemy) {
        if (!collisionEnemy.id.includes("darthvader")) {
          // Remove sprite from the view
            spriteView.removeSprite(collisionEnemy.id);
          // Remove enemy from the array
            this.enemies.splice(this.enemies.indexOf(collisionEnemy), 1);
          // Update score
            this.score += 3;
            controlPanelView.updateScore(this.score);
        }
        else {
          // Warn the player 
          document.getElementById(this.robot.id).style.filter = "saturate(8)";
          setTimeout(() => {
            if (this.robot)
              document.getElementById(this.robot.id).style.filter = "";
          }, 1000);
          // Update score
          if (!this.touched) {
            this.touched = true;
            this.score -= 5;
            controlPanelView.updateScore(this.score);
            setTimeout(() => {
                this.touched = false;
            }, 1000);
          }
        }
      }
    });
  }
}('Star-Wars');

// Choosing level
// document.getElementById("level1").onclick = () => {
//   game.level = 1;
// }
// document.getElementById("level2").onclick = () => {
//   game.level = 2;
// }
// document.getElementById("level3").onclick = () => {
//   game.level = 3;
// }

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
      controlPanelView.toggleButtons("pause");
    }
  }
  else {
    innerHTML = elements("pause").innerHTML;
    if (innerHTML == "Resume") {
      // Resume the game
      game.resume();
      // Toggle buttons
      controlPanelView.toggleButtons("resume");
    }
  }
}

// Game animation
let main; // Main animation function to run on browser lunch then  bu clicking the button start over
let lock=false; // Allows the update of game.tFrameLast after a restart
let lastLap; // Stores the last lp between tFrame and game.tFrameLast to be reduced from the new tFrame after restart
// Explanation about the lock for start over :
// After stopping the game the tFrame goes back to zero
// On "start over" the first tFrame = 0 then the second jumps back to where it was before pausing the game
// For that, the first gmae.tFrameLast needs to be 0 :
// if (startover) {
//   game.tFrameLast = tFrame;
//   lock = true;
// }
// then jumps back to the second to last tFrame before pausing the game
// if (lock) {
//   game.tFrameLast = tFrame - lastLap;
//   lock = false;
// }
;(  () => {
  main = (tFrame, startover) => {
    // Lunch animation
    let cbId = window.requestAnimationFrame(main);
    // While game.run is true it runs game.update
    if (game.run) {
      // Restores game.tFrameLast after a restart
      if (lock) {
          game.tFrameLast = tFrame - lastLap;
          lock = false;
      }
      // If it's a start over game.tFrameLast needs to be set to tFrame 
      // which is equals to 0 (from main(0)) on the first run
      if (startover) {
          game.tFrameLast = tFrame;
          lock = true;
      }
      // Stores the last lap
      lastLap = tFrame - game.tFrameLast;
      // Runs game.update
      game.update(tFrame);
    // Cancels the animation if the "stop" button in clicked
    } else {
      window.cancelAnimationFrame(cbId);
    }
    // Updates game.tFrameLast after every game.update
    game.tFrameLast = tFrame;
    }
  main(0, false); // Lunch cycle
})();

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
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
  // Switch music
  setTimeout(() => {
    musicControler.switchMusic("RGwaGzIp7T8");
    game.music = "RGwaGzIp7T8";
  }, 2500);
  
}

window.onload = () => {
  musicControler.onYouTubePlayerAPIReady("q7jv3ecjgNc");
  game.music = "q7jv3ecjgNc";
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

window.onresize = () => {
  game.stop();
}
