import{dataHandler} from "./datahandler.js";

function init() {
    let button = document.getElementById("lose");
    button.addEventListener('click', function () {
        dataHandler._playSound();
        setTimeout(function () {
            dataHandler._changeBg("https://i.ytimg.com/vi/LA_NXF2QhIs/maxresdefault.jpg")
        },500);
    })
}

init();