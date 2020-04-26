import Sprite from "./Sprite"

class Robot extends Sprite {
    constructor(id, imgPath="../data/R2D2.png",insideDOM=window.document.getElementById("playground"), pod, speedX, speedY) {
      // Appel au constructeurde Personne
      super(id, imgPath, insideDOM, pos, speedX, speedY);
    }
}

export default Robot;