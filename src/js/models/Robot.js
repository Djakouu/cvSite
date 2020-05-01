// File content 
// class Robot extends Sprite {
    // constructor()
//}

import Sprite from "./Sprite"

class Robot extends Sprite {
    constructor(id, pos, insideDOM=window.document.getElementById("playground")) {
        super(id, pos, insideDOM)
    }
}

export default Robot;