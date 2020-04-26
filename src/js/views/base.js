// export const elements = {
//     timeLeftInput: document.getElementById("timeLeftInput"),
//     you: document.getElementById("you"),
//     your: document.getElementById("your"),
//     finalScore: document.getElementById("finalScore"),
//     endGame: document.getElementById("endGame"),
//     scoreInput: document.getElementById("scoreInput"),
//     previousLevel: document.getElementById("previousLevel"),
//     levelInput: document.getElementById("levelInput"),
//     nextLevel: document.getElementById("nextLevel"),    
//     start: document.getElementById("start"),
//     pause: document.getElementById("pause"),
//     nextRule: document.getElementById("nextRule"),
//     previousRule: document.getElementById("previousRule"),
//     skipRules: document.getElementById("skipRules"),
//     ruleNb: document.getElementById("ruleNb"),
//     ready: document.getElementById("ready"),
//     rules: document.getElementById("rules"),
//     game: document.getElementById("game")
// };

export const elements = elementId => {
    return document.getElementById(elementId);
}