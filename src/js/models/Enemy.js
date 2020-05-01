// File content 
// class Enemy extends Sprite {
    // constructor()
// }

import Sprite from "./Sprite"

class Enemy extends Sprite {
    constructor(id, pos, level, insideDOM=window.document.getElementById("playground")) {
        super(id, pos, insideDOM);
        let speedX, speedY;
        if (id == "anakin_starfighter") {
          speedX = 20;
          speedY = 0;
        }
        else if (id == "naboo_starfighter") {
          speedX = 0;
          speedY = 40;
        }
        else if (id == "obi_wan_starfighter") {
          speedX = 60;
          speedY = 60;
        }
        else if (id == "x_wing") {
          speedX = 80;
          speedY = 20;
        }
        else if (id == "darthvader") {
          speedX = 100;
          speedY = 120;
        }
        if (level == 2) {
          this.speedX=speedX*2 + "px/s";
          this.speedY=speedY*2 + "px/s";
        }
        else if (level == 3) {
          if (window.innerWidth > 600) {
            this.speedX=speedX*4 + "px/s";
            this.speedY=speedY*4 + "px/s";
          }
          else { // window.innerWidth < 600
            this.speedX=speedX + "px/s";
            this.speedY=speedY + "px/s";
          }
        }
        else {
          this.speedX=speedX + "px/s";
          this.speedY=speedY + "px/s";
        }
    }
}

export default Enemy;