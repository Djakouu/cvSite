export let player1, player2;

 export function onYouTubePlayerAPIReady(id) {
    player1 = new YT.Player('player', {
    videoId: id, // this is the id of the video at youtube (the stuff after "?v=")
    loop: true,
    events: {
        onReady: e => {
          e.target.playVideo();
        },
        onStateChange: e => {
            if (event.data === 1) {
            }
        }
    }
  });
}

export const stopMusic = () => {
    const elem = document.getElementById("player");
    elem.parentNode.removeChild(elem);
}

export const switchMusic = playerId => {
    stopMusic();
    let player = document.createElement("div");
    player.setAttribute("id", "player");
    document.getElementById("body").appendChild(player);
    document.getElementById("player").style.position = "absolute";
    document.getElementById("player").style.top = "-9999px";
    onYouTubePlayerAPIReady(playerId);
}