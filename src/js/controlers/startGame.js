import Sprite from "../models/Sprite"
import Position from "../models/Position"
import * as spriteView from "../views/spriteView"
import * as positionView from "../views/positionView"
import {game} from "../index"

export const startLevel = level => {
    const elem = document.getElementById("playground");
    const style = window.getComputedStyle(elem)
    const width = parseInt(style.width) - 100;
    const height = parseInt(style.height) - 100;

    if (level == 1) {
        let R2D2 = new Sprite("R2D2", new Position(0,0));
        spriteView.renderSprite(R2D2);
        game.robot = R2D2;

        let anakin_starfighter = new Sprite("anakin_starfighter", new Position(width,height));
        spriteView.renderSprite(anakin_starfighter);
        game.enemies[game.enemies.length]=anakin_starfighter;

        let naboo_starfighter = new Sprite("naboo_starfighter", new Position(0,height));
        spriteView.renderSprite(naboo_starfighter);
        game.enemies[game.enemies.length]=naboo_starfighter;

        let obi_wan_starfighter = new Sprite("obi_wan_starfighter", new Position(width*2/3,0));
        spriteView.renderSprite(obi_wan_starfighter);
        game.enemies[game.enemies.length]=obi_wan_starfighter;

        let x_wing = new Sprite("x_wing", new Position(width/5,height/3));
        spriteView.renderSprite(x_wing);
        game.enemies[game.enemies.length]=x_wing;

        let darthvader = new Sprite("darthvader", new Position(width/2,height/2));
        spriteView.renderSprite(darthvader);
        game.enemies[game.enemies.length]=darthvader;
    }
    else if (level == 2) {
        startLevel(1);
        let anakin_starfighter2 = new Sprite("anakin_starfighter", new Position(width-100, 0), 2);
        spriteView.renderSprite(anakin_starfighter2);
        game.enemies[game.enemies.length]=anakin_starfighter2;
    
        let naboo_starfighter2 = new Sprite("naboo_starfighter", new Position(width, 0), 2);
        spriteView.renderSprite(naboo_starfighter2);
        game.enemies[game.enemies.length]=naboo_starfighter2;
    
        let obi_wan_starfighter2 = new Sprite("obi_wan_starfighter", new Position(width/2, height/4), 2);
        spriteView.renderSprite(obi_wan_starfighter2);
        game.enemies[game.enemies.length]=obi_wan_starfighter2;
    
        let x_wing2 = new Sprite("x_wing", new Position(width/4, height), 2);
        spriteView.renderSprite(x_wing2);
        game.enemies[game.enemies.length]=x_wing2;
    
        let darthvader2 = new Sprite("darthvader", new Position(width/3,height), 2);
        spriteView.renderSprite(darthvader2);
        game.enemies[game.enemies.length]=darthvader2;
    
        let darthvader3 = new Sprite("darthvader", new Position(0,height/2), 2);
        spriteView.renderSprite(darthvader3);
        game.enemies[game.enemies.length]=darthvader3;
    }
    else { // level = 3
        startLevel(2)
        let anakin_starfighter3 = new Sprite("anakin_starfighter", new Position(width/2, height/2), 3);
        spriteView.renderSprite(anakin_starfighter3);
        game.enemies[game.enemies.length]=anakin_starfighter3;

        let naboo_starfighter3 = new Sprite("naboo_starfighter", new Position(width/2, 0), 3);
        spriteView.renderSprite(naboo_starfighter3);
        game.enemies[game.enemies.length]=naboo_starfighter3;

        let obi_wan_starfighter3 = new Sprite("obi_wan_starfighter", new Position(width/4, height/6), 3);
        spriteView.renderSprite(obi_wan_starfighter3);
        game.enemies[game.enemies.length]=obi_wan_starfighter3;

        let x_wing3 = new Sprite("x_wing", new Position(width/(1.75), height/5), 3);
        spriteView.renderSprite(x_wing3);
        game.enemies[game.enemies.length]=x_wing3;

        let darthvader4 = new Sprite("darthvader", new Position(width,height/10), 3);
        spriteView.renderSprite(darthvader4);
        game.enemies[game.enemies.length]=darthvader4;

        let darthvader5 = new Sprite("darthvader", new Position(width/(2.2),height), 3);
        spriteView.renderSprite(darthvader5);
        game.enemies[game.enemies.length]=darthvader5;
    }
}
