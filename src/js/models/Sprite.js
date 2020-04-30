// File content 
// class Sprite {
    // constructor()
    // getPos()
    // moveTo()
    // moveRel()
    // moveFrame()
// }

import Position from "./Position"

class Sprite {
    constructor(id, pos, level, insideDOM=window.document.getElementById("playground")) {
        this.id=id+Math.random();
        this.imgPath="./img/" + id + ".png";
        this.pos=pos,
        this.insideDOM=insideDOM;
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
        
    getPos()  {
        return this.pos
    }

    moveTo(pos) {
        let style = document.getElementById(this.id).style;

        style.left = pos.x + "px";
        style.top = pos.y + "px";  
        this.pos = pos;
    }

    moveRel(pos) {
        this.pos.add(pos)
        this.moveTo(this.pos)
    }

    moveFrame(duration) {
        let x = parseInt(this.speedX) * duration/1000;
        let y = parseInt(this.speedY) * duration/1000;
        this.moveRel(new Position(x, y))
    }
}

export default Sprite;