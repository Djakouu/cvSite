// File content 
// renderSprite()
// removeSprite()

export const renderSprite = ({id, imgPath, pos, insideDOM}) => {
    // Get window innerWidth
    const windowInnerWidth = window.innerWidth;
    // Create new Image
    let newImg = document.createElement("img");
    newImg.setAttribute("src", imgPath);
    newImg.setAttribute("id", id);
    insideDOM.appendChild(newImg);
    // style the sprite depending on the window innerWidth
    let style = document.getElementById(id).style;
    style.height = "75px";
    style.width = "75px";
    if (windowInnerWidth < 1200) {
        style.height = "60px";
        style.width = "60px";
    }
    if (windowInnerWidth < 900) {
        style.height = "45px";
        style.width = "45px";
    }
    if (windowInnerWidth < 600) {
        style.height = "30px";
        style.width = "30px";
    }
    style.left = pos.x + "px";
    style.opacity = "0"
    style.position = "absolute";
    style.top = pos.y + "px"; 
    style.transition = "all 0.017s";  
    style.transition = "opacity 1s"     

    setTimeout(() => {
        style.opacity = "1";
    }, 17);
}

export const removeSprite = id => {
    document.getElementById(id).style.opacity = "0";
    setTimeout(() => {
        const elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);
    }, 200);
}