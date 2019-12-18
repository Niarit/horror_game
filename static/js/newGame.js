import {dataHandler} from "./datahandler.js";

function init() {
    let button = document.getElementById("btn");
    button.addEventListener('click', function () {
        try{
            dataHandler._changeBg('https://i.imgur.com/M67IE0W.jpg');
            dataHandler._changeText('placeholder2');
            dataHandler._collectItem('item1', "doll");
            dataHandler._collectItem('item2', 'paper');
            button.setAttribute('id', 'next')
        }
        catch (e) {
            console.log(e)
        }
        button.onclick = function () {
            try {
                dataHandler._changeBg("https://i.imgur.com/GAyB4BP.jpg");
                dataHandler._changeText("placeholder3");
                dataHandler._changeButtonPos('item1', 'item3');
                dataHandler._changeButtonPos('item2', 'item4');
                dataHandler._collectItem('item3', 'something');
                dataHandler._collectItem('item4', 'again');
                button.setAttribute('id', 'hallway')
            }
            catch (e) {
                console.log(e)
            }
            let nextButton = document.getElementById('hallway');
            nextButton.addEventListener('click',function () {
                dataHandler._changeBg("https://i.imgur.com/r9BRX1P.jpg");
                dataHandler._changeText("placeholder4");
                dataHandler._changeButtonPos('item3', 'item5');
                dataHandler._removeBtn('item4');
                dataHandler._collectItem('item5', 'henlooo');
                nextButton.setAttribute('id','end');
                let lastButton = document.getElementById('end');
                lastButton.addEventListener("click",function () {
                    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                })
            })
        }
    })
}

init();