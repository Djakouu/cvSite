// File content 
// game {
    // start()
    // stop()
    // startover()
    // pause()
    // resume()
    // update()
//}
// main {
    // window.requestAnimationFrame
    // window.cancelAnimationFrame
//}

import "./controlers/onclickEvents"
import * as spriteView from "./views/spriteView"
import * as positionView from "./views/positionView"
import * as controlPanelView from "./views/controlPanelView"
import * as startGame from "./controlers/startGame"
import * as transition from "./views/transition"
import * as musicControler from "./controlers/music"
import Position from "./models/Position"
import Robot from "./models/Robot"
import { elements, isMobileDevice } from "./views/base"

// Start music
window.onload = () => {
  musicControler.onYouTubePlayerAPIReady("q7jv3ecjgNc");
  game.music = "q7jv3ecjgNc";
}

// Stop the game onresize
window.onresize = () => {
  game.stop();
}

//////////////////////////////////////
// Set the game class
//////////////////////////////////////
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
          music="RGwaGzIp7T8",
          orientation="", // For mobile devices
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
    this.orientation=orientation;
  }

  start() {
    if (isMobileDevice())
      this.orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    // Hide the control panel and widen the playgound if window.innerWidth < 900
    if (window.innerWidth < 900 && this.orientation.includes("landscape"))
      transition.hideControlPanel();
    // Demarrage du jeux  
    this.run = true;    
    startGame.startLevel(this.level);
    // Lunch time
    controlPanelView.lunchTime(); 
    // Toggle buttons
    transition.toggleButtons("start");
  }

  stop() {
    // Show the controlPanel if hidden (afte a window resize)
    if (elements("controlPanel").style.width == "0vw") 
      transition.showControlPanel();
      
    game.run=false;
    // Remove the robot
    if (this.robot) {
      const elem = elements(this.robot.id);
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
    // Reset the controlPanel time
    controlPanelView.stopTime();
    // Toggle buttons
    transition.toggleButtons("stop");
  }

  startOver() {
    // Switch music
    if (this.music != "RGwaGzIp7T8") {
      musicControler.switchMusic("RGwaGzIp7T8");
      this.music = "RGwaGzIp7T8";
    }
    // Hide the end game ad
    transition.hideElements(["endGame"], "fadeOut");
    // reset the time view
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
    if (elements("controlPanel").style.width == "0vw")
      transition.showControlPanel();
  }

  resume() {
    // Hide the control panel if window.innerWidth < 900
      if (window.innerWidth < 900 && !this.orientation.includes("landscape")) 
        transition.hideControlPanel();
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
      // Set the end game ad and show it
      transition.setEndGameAd("GAME OVER!", "Time's up", "");
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
        if (random < 0.33) 
          transition.setEndGameAd("w   a   i   t", " f    o    r", "i  t  .  .  . ");
        else if (random < 0.66) 
          transition.setEndGameAd("------------", "  Drumroll  ", "------------");
        else 
          transition.setEndGameAd("And here is", "your hard's work", "result");
        if (finalScore > 0) {
          // Switch music
          musicControler.switchMusic('Y7vJVKsDfn4');
          this.music = "Y7vJVKsDfn4";
          // Sow result
          setTimeout(() => {
            // If the player didn't hit startOver less than 2sec ago
            if (!this.run) {
              transition.hideElements(["endGame"], "fadeOut");
              transition.setEndGameAd("YOU WON!", "Final score:", finalScore);
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
              transition.setEndGameAd("You lost!", "Final score:", finalScore);
            }
          }, 2000);          
        }
      }, 200);
    };

    // Update the game according to the time
    let lap = tFrame - this.tFrameLast;
    
    // Update this.arrows according to the onkeydown or on deviceorientation
    if (this.run && this.robot) {
      // If it's not a mobile
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
            transition.toggleButtons("pause");
          }
        };
      }
      else { // isMobileDevice
        // pause on screen touch
        if (!this.orientation.includes("landscape")) {
          window.ontouchstart = () => {
            game.pause();
            // Toggle buttons
            transition.toggleButtons("pause");
          };
        }
        // Update this.arrows on keydown according to the mobile orientation
        window.ondeviceorientation = o => {
          let x = o.gamma; // In degree in the range [0,360]
          let y = o.beta;  // In degree in the range [-180,180]
          let arrow=-1;
          // values if orientation.includes("landscape")
          if (y < -15)
            arrow = 180; // Left
          else if (y > 15)
            arrow = 0; // Right
          else if (x > 15) // -30 < y < 30
            arrow = 270; // Up
          else if (x < -15) // -30 < y < 30
            arrow = 90; // Down
          if (arrow != -1 && !this.orientation.includes("landscape")) 
            arrow = (arrow + 180) % 360;
          if (arrow!=-1)
            this.arrows = positionView.updateArrowsValues(arrow);
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
          elements(this.robot.id).style.filter = "saturate(8)";
          setTimeout(() => {
            if (this.robot)
              elements(this.robot.id).style.filter = "";
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


//////////////////////////////////////
// Game animation
//////////////////////////////////////

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
