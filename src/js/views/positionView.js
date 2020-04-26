// export const updateRobotPosition = (k, robot) => {
//     const PGstyle = window.getComputedStyle(document.getElementById("playground"));
//     const robotX1 = robot.getPos().x;
//     const robotX2 = robotX1 + parseInt(document.getElementById(robot.id).style.width);
//     const robotY1 = robot.getPos().y;
//     const robotY2 = robotY1 + parseInt(document.getElementById(robot.id).style.height);
//     let move;
//     const step = 25;
//     if (k.key == "ArrowLeft") {
//         if (robotX1 - step >= 0)
//                 move = {stepX: -step, stepY: 0}
//             // robot.moveRel(new Position(-step, 0));
//     }
//     else if (k.key == "ArrowUp") {
//         if (robotY1 - step >= 0)
//             move = {stepX: 0, stepY: -step}
//             // robot.moveRel(new Position(0, -step));
//     }
//     else if (k.key == "ArrowRight") {
//         if (robotX2 + step <= parseInt(PGstyle.width)) 
//             move = {stepX: step, stepY: 0}
//             // robot.moveRel(new Position(step, 0));
//     }
//     else if (k.key == "ArrowDown") {
//         if (robotY2 + step <= parseInt(PGstyle.height))
//             move = {stepX: 0, stepY: step}
//             // robot.moveRel(new Position(0, step));
//     }
//     else move={stepX:0, stepY:0}
//     return move;
// }
export const updateArrowsValues = k => {
    let arrows;
    if (k == "ArrowLeft")
        arrows = [true, false, false, false];
    else if (k == "ArrowUp") 
        arrows = [false, true, false, false];
    else if (k == "ArrowRight") 
        arrows = [false, false, true, false];
    else if (k == "ArrowDown") 
        arrows = [false, false, false, true];  
    return arrows;
}

export const updateRobotPosition = (arrows, robot) => {
    const PGstyle = window.getComputedStyle(document.getElementById("playground"));
    const robotX1 = robot.getPos().x;
    const robotX2 = robotX1 + parseInt(document.getElementById(robot.id).style.width);
    const robotY1 = robot.getPos().y;
    const robotY2 = robotY1 + parseInt(document.getElementById(robot.id).style.height);
    let move;
    const step = 1;
    if (arrows[0]) {
        if (robotX1 - step >= 0)
            move = {stepX: -step, stepY: 0}
    }
    else if (arrows[1]) {
        if (robotY1 - step >= 0)
            move = {stepX: 0, stepY: -step}
    }
    else if (arrows[2]) {
        if (robotX2 + step <= parseInt(PGstyle.width)) 
            move = {stepX: step, stepY: 0}
    }
    else if (arrows[3]) {
        if (robotY2 + step <= parseInt(PGstyle.height))
            move = {stepX: 0, stepY: step}
    }
    // In case key down is not a directional arrow 
    // or if the key is a directional arrow but the robot is on the playground edge
    if (!move) move={stepX:0, stepY:0}
    return move;
}

export const updateEnemiesPosition = (enemy, lap) => {
    let PGstyle = window.getComputedStyle(document.getElementById("playground"));

    let stepX = parseInt(enemy.speedX) * lap/1000;
    let stepY = parseInt(enemy.speedY) * lap/1000;

    let enemyX1 = enemy.getPos().x;
    let enemyX2 = enemyX1 + parseInt(document.getElementById((enemy).id).style.width);
    let enemyY1 = enemy.getPos().y;
    let enemyY2 = enemyY1 + parseInt(document.getElementById((enemy).id).style.height);

    if (stepX > 0)
        if(enemyX2 + stepX >= parseInt(PGstyle.width)) {
            stepX = - stepX;
            enemy.speedX = -parseInt(enemy.speedX) + "px/s";
        }
    if (stepX < 0)
        if(enemyX1 + stepX <= 0) {
            stepX = - stepX;
            enemy.speedX = -parseInt(enemy.speedX) + "px/s";
        }
    if (stepY > 0)
        if(enemyY2 + stepY >= parseInt(PGstyle.height)) {
            stepY = -stepY;
            enemy.speedY = -parseInt(enemy.speedY) + "px/s";
        }
    if (stepY < 0)
        if(enemyY1 + stepY <= 0) {
            stepY = -stepY;
            enemy.speedY = -parseInt(enemy.speedY) + "px/s";
        }
    return {stepX, stepY};
}

export const checkCollision = (enemy, robot) => {
    const robotX1 = robot.getPos().x;
    const robotX2 = robotX1 + parseInt(document.getElementById(robot.id).style.width);
    const robotY1 = robot.getPos().y;
    const robotY2 = robotY1 + parseInt(document.getElementById(robot.id).style.height);

    let enemyX1 = enemy.getPos().x;
    let enemyX2 = enemyX1 + parseInt(document.getElementById((enemy).id).style.width);
    let enemyY1 = enemy.getPos().y;
    let enemyY2 = enemyY1 + parseInt(document.getElementById((enemy).id).style.height);

    if (
        ((robotX1 + 28 >= enemyX1 && robotX1 + 28 <= enemyX2) || (robotX2 - 28 >= enemyX1 && robotX2 -28 <= enemyX2))
        && 
        ((robotY1  + 28 >= enemyY1 && robotY1 + 28 <= enemyY2) || (robotY2 - 28 >= enemyY1 && robotY2 - 28 <= enemyY2))
        ) {
        return (enemy)
        
    }
}

