
let story = {
    first: 'hey',
    second: 'alyoo',
    third:'yess',
    fourth: 'here'
};

let items = {
    hat:'hat',
    fur: 'fur ball',
    knife: 'knife',
    foot:'footprint',
    elf: 'elf'
};

function changeBg(background) {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center fix";
}

function changeButtonPosition(btnId1, nextId1) {
    let item = document.getElementById(btnId1);
    item.setAttribute('id', nextId1);
}

function collectItem(id, message) {
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
    button.addEventListener('click', function (e) {
        try {
            changeBg("https://i.imgur.com/R6Fim3n.jpg");
            changeText(story.first);
            collectItem("item1", items.hat, 'item3');
            collectItem("item2", items.fur, 'item4');
            button.setAttribute('id', 'nextBtn');
        }
        catch (e) {
            console.log('This error occurs because of the bubbling effect')
        }
        button.onclick = function () {
            try {
                changeBg("https://i.imgur.com/L36UxW0.jpg");
                changeText(story.second);
                changeButtonPosition('item1', 'item3');
                changeButtonPosition('item2', 'item4');
                collectItem('item3', items.knife, 'item5');
                collectItem('item4', items.foot, 'item6');
                button.setAttribute('id', 'hallwayBtn');
            }
            catch (e) {
                console.log('This error occurs because of the bubbling effect')
            }
            let nextButton = document.getElementById("hallwayBtn");
            nextButton.addEventListener('click',function () {
                changeBg("https://i.imgur.com/DTaLHkX.jpg");
                changeText(story.third);
                removeBtn('item3');
                changeButtonPosition('item4', 'item6');
                collectItem('item6', items.elf);
                let shatteringGlass = new Audio('../static/breaking-glass.mp3');
                shatteringGlass.play();
                nextButton.setAttribute('id', 'toTheEnd');
                let lastButton = document.getElementById('toTheEnd');
                lastButton.addEventListener("click", function () {
                    location.href = "http://127.0.0.1:5000/end";
                })
            })
        }
    })
}


start();

