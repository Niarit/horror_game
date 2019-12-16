
function changeBg(background) {
    document.body.style.backgroundImage = 'url(' + background + ')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center fix";
}

function collectItem(id, message, newId) {
    let item = document.getElementById(id);
    item.addEventListener('click', function () {
        changeText(message);
        item.setAttribute('id', newId)
    })
}

function changeText(newText) {
    let text = document.getElementById("text");
    text.innerHTML = newText
}

function removeBtn(buttonName) {
    let button = document.getElementById(buttonName);
    button.remove()
}

function start() {
    let button = document.getElementById('btn');
    button.addEventListener('click', function () {
        changeBg("https://i.pinimg.com/originals/5c/71/f2/5c71f2087044c0eeb0cf8054964f1e54.jpg");
        changeText("Placeholder2");
        collectItem("item1", 'szia', 'item3');
        collectItem("item2", "henlooo", 'item4');
        button.setAttribute('id', 'nextBtn');
        button.onclick = function () {
            changeBg("https://www.narcity.com/u/2019/09/13/e9518023ad39d20cb559c217e14f324.jpg_1200x630.jpg");
            changeText("Placeholder3");
            collectItem('item3','hey','item5');
            collectItem('item4', 'yesss', 'item6');
            button.setAttribute('id', 'hallwayBtn');
            let nextButton = document.getElementById("hallwayBtn");
            nextButton.addEventListener('click',function () {
                changeBg("https://wallpaperaccess.com/full/1371521.jpg");
                changeText("Placeholder4");
                removeBtn('item5');
                removeBtn('item6');
                let shatteringGlass = new Audio('../static/breaking-glass.mp3');
                shatteringGlass.play();
                nextButton.setAttribute('id', 'toTheEnd')
            })
        }
    })
}


start();

