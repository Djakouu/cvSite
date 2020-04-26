 class Position {
    constructor(x=0, y=0) {
      this.x = x;
      this.y = y;
    }

    add(pos=Position()) {
        this.x = this.x + pos.x, this.y= this.y + pos.y;
    }
}

export default Position;