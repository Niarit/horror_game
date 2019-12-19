import {dataHandler} from "./datahandler.js";

let items = {
    doll: `A doll sitting on the stairs. When you check it from closer you see that one of her eye has been removed`,
    riddle: `A paper note thrown to the stairs. It reads: A girl, Oh so beauty, with a face, Oh so pretty<br>
But her eyes, Oh what a pity, her mother did it, we all know.<br>
She was too jealous, what a hoe. An eye for an eye, sais the olds, she took one, for a price of none.`,
    graffiti: `The walls of the hallway are old and ruined. Abstract graffiti spread all over them.<br>
There is one what specially makes you nervous, an eye. You feel like as if it watching you.`,
    riddle2: `Another note: She took and eye from her, shiny it was, the joy of a children's soul it has. They say the girl had them<br>
like jewels, with lashes which now mourns, the absence of those pearls. Only the lashes are left<br>
all of them still standing next to each other with grief.`,
    riddle3: `A note again: "You took my beauty and life from me!" she said "So I took yours!" how sad<br>
"You locked me in this house taking my life with it, so I lock you in now, deal with it!"She get some chains and locked the door,<br>
with hinge as many as many year her daugther old.`
};

let story = {
    first: `You stepped through the door just see a dim staircase leading way down. As you see there is only darkness on the bottom`,
    second: `A strange hallway. Graffiti on every wall. You start feeling some strange presence`,
    third: `A door. Your first thought is about escape but when you step near it you see those chains and hinges.<br>
There is a terminal on the door`
};

function init() {
    let button = document.getElementById("btn");
    button.addEventListener('click', function () {
        try{
            dataHandler._changeBg('https://i.imgur.com/M67IE0W.jpg');
            dataHandler._changeText(story.first);
            dataHandler._collectItem('item1', items.doll);
            dataHandler._collectItem('item2', items.riddle);
            button.setAttribute('id', 'next')
        }
        catch (e) {
            console.log(e)
        }
        button.onclick = function () {
            try {
                dataHandler._changeBg("https://i.imgur.com/GAyB4BP.jpg");
                dataHandler._changeText(story.second);
                dataHandler._changeButtonPos('item1', 'item3');
                dataHandler._changeButtonPos('item2', 'item4');
                dataHandler._collectItem('item3', items.graffiti);
                dataHandler._collectItem('item4', items.riddle2);
                button.setAttribute('id', 'hallway')
            }
            catch (e) {
                console.log(e)
            }
            let nextButton = document.getElementById('hallway');
            nextButton.addEventListener('click',function () {
                dataHandler._changeBg("https://i.imgur.com/r9BRX1P.jpg");
                dataHandler._changeText(story.third);
                dataHandler._changeButtonPos('item3', 'item5');
                dataHandler._removeBtn('item4');
                dataHandler._collectItem('item5', items.riddle3);
                nextButton.setAttribute('id','end');
                let lastButton = document.getElementById('end');
                lastButton.value = `Back to main menu`;
                lastButton.addEventListener("click",function () {
                    location.href = "http://127.0.0.1:5000/end-room";
                })
            })
        }
    })
}

init();