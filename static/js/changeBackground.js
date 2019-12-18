
let story = {
    first: `This is the room of the elves working in the Christmas Factory.<br> 
Or at least it was. After the crime has been made many of the elves found missing.<br>
Now this and many other rooms in the facility are fully abandoned.`,
    second: `The hallway of the Christmas Factory. The walls are cold and many started to ruin.<br>
It seems as the work itself stopped in a moment and every worker just left, leaving everything behind.<br>
Whoever stole the holiday was able to scare the elves into doing his bidding.`,
    third:`Snow-less landscape stretching in every direction before you.<br>
The rustling of fallen leaves and some strange noise echoes through your head.<br>
The footsteps leaded you to a dead end as if whoever came through just flew away.`
};

let items = {
    hat:`A warm red hat, too big for an elf. When you grab it some green fur falls out`,
    fur: `Some green fur. The odor of it makes you gag.`,
    knife: `A knife with remainders of a cake on it, which means it was recently used.  No fingerprints though`,
    foot:`The floor is broken on a spot and there are several footprints around it.<br>
You also felt how unstable the flooring is - cracking and moving under your steps - but to this damage you'd need more weight`,
    elf: `Under some fallen leaves was an elf. He was unconscious, but alive.<br> 
It seems someone punched him pretty hard in the face. Whoever did it, must have been way bigger then the elf.`
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

