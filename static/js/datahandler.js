export let dataHandler = {
    _changeBg: function (background) {
        document.body.style.backgroundImage = `url(${background})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center fix";
    },

    _changeButtonPos: function(btnId1, nextId1) {
        let item = document.getElementById(btnId1);
        item.setAttribute('id', nextId1);
    },

    _collectItem: function (id, message) {
        let item = document.getElementById(id);
        item.addEventListener('click', function () {
            dataHandler._changeText(message);
        })
    },

    _changeText: function (newText) {
        let text = document.getElementById("text");
        text.innerHTML = newText
    },

    _removeBtn: function (buttonName) {
        let button = document.getElementById(buttonName);
        button.remove()
    },
    _renderBoss: function (boss) {
    return `
    <div class= "boss">
        <img class="boss-photo" src="${boss.photo}">
            <div id="loseModalElf" class="modal">
            <div class="modal-content-lose">
            <span class="close1">&times;</span>
            <p class="result">I didn't do it... How would I? I mean I am not even 1m tall, How should I stole Christmas
            from this height?</p></div></div>
            
            <div id="loseModalGrinch" class="modal">
            <div class="modal-content-lose">
            <span class="close2">&times;</span>
            <p class="result">It wasn't me I swear! I mean, I know... I tried it once or twice, but I get bored.
            Nonetheless how should I be able to send away all the elves from the factory to do that? The last time I went there 
            they throw me out. I am not joking, they throw me out! They even managed to pluck my fur and steal me hat...
            Those bastards</p></div></div>
            
            <div id="winModal" class="modal">
            <div class="modal-content-win">
            <p class="result">Eh...Yes. I did it. I know, I know 'But you are the Santa!'. Yes I am and as a Santa
            I tried to do my job and bring joy to everyone. But nowadays this is impossible. IMPOSSIBLE!
            All those entitled little kids asking for an Iphone6 or IphoneX or whatever else these called!
            At first I tried to give them these, but when they got it they started to complain 'I wanted rosegold'
            and 'I wanted the latest'. You know how hard is to make these things? The licencing and manufacturing? 
            So I thought I start give them the old school gifts and the joy of the season, BUT THEY WANTED NONE OF IT!
            They sent me angry letters and threatened me! ME!... Eh... I thought if I stop the season they will see
            what the real spirit of the season is. These entitled kids need to learn it!</p></div></div>
        <h2 class="boss-name">${boss.name}</h2>
        <p><strong>Age: </strong>${dataHandler._bossAge(boss.birthYear)}</p>
        <p><strong>Height:</strong>${boss.height}</p>
        <p><strong>Weight:</strong>${boss.weight}</p>
    </div>`
    },
    _bossAge: function (birthYear) {
    let Age = new Date().getFullYear() - birthYear;
    return `${Age} years old`
    },
    _playSound: function () {
        let scream = new Audio('../static/jumpscare.mp3');
        scream.play();
    }
};