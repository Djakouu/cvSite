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
//
// Transition fade in start  done
// Responsive done
// Change robot speed ! done

// Stop on resize window
// Sound effects
// Heroku/ mywebsite
// Comments 
// Orga
// Robot class



import Position from "./models/Position"
import Robot from "./models/Robot"
import * as spriteView from "./views/spriteView"
import * as positionView from "./views/positionView"
import * as controlPanelView from "./views/controlPanelView"
import * as startGame from "./controlers/startGame"
import * as transition from "./views/transition"
import { elements } from "./views/base"

export const game = new class {
  constructor(
          nom,
          arrowLeft=false, arrowUp=false, arrowRight=false, arrowDown=false,
          robot,
          run=true,
          tFrameLast=0,
          level=1,
          enemies=[],
          score=0,
          time=181999
      ) {
    this.nom = nom;
    this.arrowLeft = arrowLeft;
    this.arrowUp = arrowUp;
    this.arrowRight = arrowRight;
    this.arrowDown = arrowDown;
    this.robot = robot;
    this.run = run;
    this.tFrameLast= tFrameLast;
    this.level=level;
    this.enemies=enemies;
    this.touched=false // A lock for updating score after collision with darthvader.
    this.score=score;
    this.time=time;
  }
  async start() {
    // Hide the control panel and widen the playgound if window.innerWidth < 900
    let promise = new Promise((res, rej) => {
      if (window.innerWidth < 900) {
        // transition.hideElements(["controlPanel"], "fadeOutRight")
        elements("controlPanel").style.width = "0vw";
        elements("playground").style.width = "100vw";
        setTimeout(() => {
          elements("controlPanel").style.display = "none";
        }, 200);
        setTimeout(() => {
          res(true);
        }, 1000);
      }
      else res(false);
    });
    await promise
    // Demarrage du jeux  
    this.run = true;    
    startGame.startLevel(this.level)
    // Lunch time
    controlPanelView.lunchTime(); 
    // Toggle buttons
    controlPanelView.toggleButtons("start")
  }

  stop() {
    game.run=false;
    // Remove the robot
    if (this.robot) {
      const elem = document.getElementById(this.robot.id);
      elem.parentNode.removeChild(elem);
      this.robot = null;
    }
    // Remove enemies
    this.enemies.forEach(enemy => {
      spriteView.removeSprite(enemy.id)
    })
    this.enemies=[];
    // reset Arrows
    this.arrowLeft = false;
    this.arrowUp = false;
    this.arrowRight = false;
    this.arrowDown = false;
    // Reset the score
    this.score=0;
    controlPanelView.updateScore(this.score);
    // Reset tFrameLast
    // Reset the controlPanel time
    controlPanelView.stopTime();
    // Toggle buttons
    controlPanelView.toggleButtons("stop")
  }

  startOver() {
    transition.hideElements(["endGame"], "fadeOut");
    if (elements("timeLeftInput").value == "TIME'S UP!")
      elements("timeLeftInput").value = "02:00"
    this.run=true;
    main(0, true)
    this.start(); 
  }

  async pause() {
    // Show the control panel if hidden and tighten the playgound
    let promise = new Promise((res, rej) => {
      if (elements("controlPanel").style.width == "0vw") {
        // transition.hideElements(["controlPanel"], "fadeOutRight")
        elements("controlPanel").style.width = "20vw";
        elements("playground").style.width = "80vw";
        setTimeout(() => {
          elements("controlPanel").style.display = "flex";
        }, 400);
        setTimeout(() => {
          res(true);
        }, 1000);
      }
      else res(false);
    });
    await promise;

    this.run = false;
    // Pause the time
    controlPanelView.pauseTime();
  }

  async resume() {
    // Hide the control panel if window.innerWidth < 900
    let promise = new Promise((res, rej) => {
      if (window.innerWidth < 900) {
        // transition.hideElements(["controlPanel"], "fadeOutRight")
        elements("controlPanel").style.width = "0vw";
        elements("playground").style.width = "100vw";
        setTimeout(() => {
          elements("controlPanel").style.display = "none";
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
    if (elements("timeLeftInput").value == "TIME'S UP!") {
      this.stop();
      elements("you").innerHTML = "GAME OVER!";
      elements("your").innerHTML = "Time's up";
      elements("finalScore").innerHTML = "";
      transition.showElements(["endGame"], "fadeIn");
    }

    // Stop the game if no more enemies
    if (this.robot && this.enemies.length <= ((this.level-1)*2)+1) {
    //((this.level-1)*2)+1): means 1 darthvader left for level 1,
    // Three darthvader for level 2 and 5 darthvader for level 3
      let lastTime = elements("timeLeftInput").value
      const lastScore = elements("scoreInput").value
      setTimeout(() => {
        this.stop();
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
        if (finalScore > 0) {
          elements("you").innerHTML = "YOU WON!"
          elements("your").innerHTML = "Final score:"
          elements("finalScore").innerHTML = finalScore
          transition.showElements(["endGame"], "fadeIn");

        }
        else { // finalScore <= 0
          elements("you").innerHTML = "You lost!"
          elements("your").innerHTML = "Final score:"
          elements("finalScore").innerHTML = finalScore
          transition.showElements(["endGame"], "fadeIn");
        }
      }, 200);
      
      
    }
    // Update the game according to the time
    let lap = tFrame - this.tFrameLast ;//< 20 ? tFrame - this.tFrameLast : 17;
    
    // Update Arrows values on keydown
    document.addEventListener('keydown', event => {
      if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowRight" || event.key === "ArrowDown"){
        const arrowsValues = positionView.updateArrowsValues(event.key);
        this.arrowLeft = arrowsValues[0];
        this.arrowUp = arrowsValues[1];
        this.arrowRight = arrowsValues[2];
        this.arrowDown = arrowsValues[3];
      }
    });

    //
    document.addEventListener('keydown', event => {
      if (window.innerWidth < 900 && event.key === "Escape") {
        game.pause();
        // Toggle buttons
        controlPanelView.toggleButtons("pause");
      }
    });

    // Update the robot position
    if (this.robot) {
        const arrows = [this.arrowLeft, this.arrowUp, this.arrowRight, this.arrowDown]
        const {stepX, stepY} = positionView.updateRobotPosition(arrows, this.robot)
        this.robot.moveRel(new Position(stepX, stepY));
    }

    // Update enemies positions then check possible collision 
    this.enemies.forEach(enemy => {
    // 1. update enemies position
      const {stepX, stepY} = positionView.updateEnemiesPosition(enemy, lap)
      enemy.moveRel(new Position(stepX, stepY));
    // 2. Check possible collision
      const collisionEnemy = positionView.checkCollision(enemy, this.robot)
      if (collisionEnemy) {
        if (!collisionEnemy.id.includes("darthvader")) {
          // Remove sprite from the view
            spriteView.removeSprite(collisionEnemy.id)
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
  transition.hideElements(["endGame"], "fadeOut")
  if (game.robot)
    game.stop();
  game.level += 1;
  elements("levelInput").value = game.level + "/3"
  if (game.level == 3)
    transition.hideButton("nextLevel");
  if (game.level > 1)
    transition.showButton("previousLevel");
}

elements("previousLevel").onclick = () => {
  transition.hideElements(["endGame"], "fadeOut")
  if (game.robot)
    game.stop();
  game.level -= 1;
  elements("levelInput").value = game.level + "/3"
  if (game.level == 1)
    transition.hideButton("previousLevel");
  if (game.level < 3)
    transition.showButton("nextLevel");
}



// Starting and stopping the game by clicking on the button "Start" or "Stop"
elements("start").onclick = () => {
  const innerHTML = elements("start").innerHTML
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
      lastLap = tFrame - game.tFrameLast
      // Runs game.update
      game.update(tFrame);
    // Cancels the animation if the "stop" button in clicked
    } else {
      window.cancelAnimationFrame(cbId);
    }
    // Updates game.tFrameLast after every game.update
    game.tFrameLast = tFrame;
    }
  main(0); // Lunch cycle
})();

// Stop game if 's' pressed
window.onkeyup = (k) => {
  if (k.key == "s")
      game.stop();
  if (k.key == "x") {
      game.stop();
      game.run=false;
  }
}


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
elements("nextRule").onclick = () => {
  const ruleNb = parseInt(elements("ruleNb").innerHTML);
  // Show "previousRule" button
  transition.showButton("previousRule")
  // Update rules number and its animation
  transition.updateAndAnimate(ruleNb+1, "Down");
  // Toggle rule page
  transition.hideElements(["ruleAd"+ruleNb], "zoomOut")
  transition.showElements(["ruleAd"+(ruleNb+1)], "slideInLeft")
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
  transition.hideElements(["ruleAd"+ruleNb], "slideOutLeft")
  transition.showElements(["ruleAd"+(ruleNb-1)], "zoomIn")
  // Show "nextRule" button, "skipRules" button, "rulesAd title" and "rulesNb" if last page
  if (ruleNb-1 == 3) {
    // Show "nextRule" button
    transition.showButton("nextRule");
    // Show "skipRules" button
    transition.showButton("skipRules")
    // Show "rulesAdTilte" and "rulesNb"
    transition.showElements(["rulesAdTitle", "rulesNb"], "zoomIn")
  }
}

elements("skipRules").onclick = () => transition.skipRules();

elements("ready").onclick = () => {
  // Set game.level according to the form
  game.level = parseInt(getRadioCheckedValue("level"));
  elements("levelInput").value = game.level + "/3"
  //Hide "previousLevel" or "nextLevel" buttons if game.level = 1 or 3 respectively
  if (game.level == 1)
    transition.hideButton("previousLevel");
  else if (game.level == 3)
    transition.hideButton("nextLevel");
  // Hide the rules interface
  transition.hideElements(["rules"], "zoomOut");
  // Show the game interface
  transition.showElements(["game"], "slideInDown");
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

