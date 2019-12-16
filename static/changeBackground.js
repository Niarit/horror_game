
function changeBg(background) {
    document.body.style.backgroundImage = 'url(' + background + ')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center fix";
}

function changeButtonPosition(btnId1, nextId1) {
    let item1 = document.getElementById(btnId1);
    item1.setAttribute('id', nextId1);
}

function collectItem(id, message, newId, img) {
    let item = document.getElementById(id);
    item.addEventListener('click', function () {
        changeText(message);
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
        changeBg("https://i.imgur.com/R6Fim3n.jpg");
        changeText("Placeholder2");
        collectItem("item1", 'szia', 'item3');
        collectItem("item2", "henlooo", 'item4');
        button.setAttribute('id', 'nextBtn');
        button.onclick = function () {
            changeBg("https://i.imgur.com/L36UxW0.jpg");
            changeText("Placeholder3");
            changeButtonPosition('item1', 'item3');
            changeButtonPosition('item2', 'item4');
            collectItem('item3','hey','item5');
            collectItem('item4', 'yesss', 'item6');
            button.setAttribute('id', 'hallwayBtn');
            let nextButton = document.getElementById("hallwayBtn");
            nextButton.addEventListener('click',function () {
                changeBg("https://wallpaperaccess.com/full/1371521.jpg");
                changeText("Placeholder4");
                removeBtn('item6');
                let shatteringGlass = new Audio('../static/breaking-glass.mp3');
                shatteringGlass.play();
                nextButton.setAttribute('id', 'toTheEnd')
            })
        }
    })
}


start();

