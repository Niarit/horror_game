import{dataHandler} from "./datahandler.js";

function init() {
    let button = document.getElementById("lose");
    button.addEventListener('click', function () {
        dataHandler._playSound();
        setTimeout(function () {
            dataHandler._changeBg("https://i.ytimg.com/vi/LA_NXF2QhIs/maxresdefault.jpg");
        },500);
        dataHandler._changeButtonPos('lose', 'back');
        let backBtn = document.getElementById('back');
        backBtn.innerText = `Back to main menu`;
        backBtn.addEventListener('click', function () {
            location.href = "http://127.0.0.1:5000"
        })
    })
}

init();