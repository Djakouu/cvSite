import Sprite from "../models/Sprite"
import Enemy from "../models/Enemy"
import Robot from "../models/Robot"
import Position from "../models/Position"
import { game } from "../index"

export const startLevel = level => {
    const elem = document.getElementById("playground");
    const style = window.getComputedStyle(elem)
    const width = parseInt(style.width) - 100;
    const height = parseInt(style.height) - 100;

    if (level == 1) {
        let R2D2 = new Robot("R2D2", new Position(0,0));
        Sprite.renderSprite(R2D2);
        game.robot = R2D2;

        let anakin_starfighter = new Enemy("anakin_starfighter", new Position(width,height));
        Sprite.renderSprite(anakin_starfighter);
        game.enemies[game.enemies.length]=anakin_starfighter;

        let naboo_starfighter = new Enemy("naboo_starfighter", new Position(0,height));
        Sprite.renderSprite(naboo_starfighter);
        game.enemies[game.enemies.length]=naboo_starfighter;

        let obi_wan_starfighter = new Enemy("obi_wan_starfighter", new Position(width*2/3,0));
        Sprite.renderSprite(obi_wan_starfighter);
        game.enemies[game.enemies.length]=obi_wan_starfighter;

        let x_wing = new Enemy("x_wing", new Position(width/5,height/3));
        Sprite.renderSprite(x_wing);
        game.enemies[game.enemies.length]=x_wing;

        let darthvader = new Enemy("darthvader", new Position(width/2,height/2));
        Sprite.renderSprite(darthvader);
        game.enemies[game.enemies.length]=darthvader;
    }
    else if (level == 2) {
        startLevel(1);
        let anakin_starfighter2 = new Enemy("anakin_starfighter", new Position(width-100, 0), 2);
        Sprite.renderSprite(anakin_starfighter2);
        game.enemies[game.enemies.length]=anakin_starfighter2;
    
        let naboo_starfighter2 = new Enemy("naboo_starfighter", new Position(width, 0), 2);
        Sprite.renderSprite(naboo_starfighter2);
        game.enemies[game.enemies.length]=naboo_starfighter2;
    
        let obi_wan_starfighter2 = new Enemy("obi_wan_starfighter", new Position(width/2, height/4), 2);
        Sprite.renderSprite(obi_wan_starfighter2);
        game.enemies[game.enemies.length]=obi_wan_starfighter2;
    
        let x_wing2 = new Enemy("x_wing", new Position(width/4, height), 2);
        Sprite.renderSprite(x_wing2);
        game.enemies[game.enemies.length]=x_wing2;
    
        let darthvader2 = new Enemy("darthvader", new Position(width/3,height), 2);
        Sprite.renderSprite(darthvader2);
        game.enemies[game.enemies.length]=darthvader2;
    
        let darthvader3 = new Enemy("darthvader", new Position(0,height/2), 2);
        Sprite.renderSprite(darthvader3);
        game.enemies[game.enemies.length]=darthvader3;
    }
    else { // level = 3
        startLevel(2)
        let anakin_starfighter3 = new Enemy("anakin_starfighter", new Position(width/2, height/2), 3);
        Sprite.renderSprite(anakin_starfighter3);
        game.enemies[game.enemies.length]=anakin_starfighter3;

        let naboo_starfighter3 = new Enemy("naboo_starfighter", new Position(width/2, 0), 3);
        Sprite.renderSprite(naboo_starfighter3);
        game.enemies[game.enemies.length]=naboo_starfighter3;

        let obi_wan_starfighter3 = new Enemy("obi_wan_starfighter", new Position(width/4, height/6), 3);
        Sprite.renderSprite(obi_wan_starfighter3);
        game.enemies[game.enemies.length]=obi_wan_starfighter3;

        let x_wing3 = new Enemy("x_wing", new Position(width/(1.75), height/5), 3);
        Sprite.renderSprite(x_wing3);
        game.enemies[game.enemies.length]=x_wing3;

        let darthvader4 = new Enemy("darthvader", new Position(width,height/10), 3);
        Sprite.renderSprite(darthvader4);
        game.enemies[game.enemies.length]=darthvader4;

        let darthvader5 = new Enemy("darthvader", new Position(width/(2.2),height), 3);
        Sprite.renderSprite(darthvader5);
        game.enemies[game.enemies.length]=darthvader5;
    }
}
