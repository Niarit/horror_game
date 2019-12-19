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
            <p class="result">I am the Elf, and it wasn't me :(</p></div></div>
            
            <div id="loseModalGrinch" class="modal">
            <div class="modal-content-lose">
            <span class="close2">&times;</span>
            <p class="result">I am the Grinch, and it wasn't me :(</p></div></div>
            
            <div id="winModal" class="modal">
            <div class="modal-content-win">
            <p class="result">Ho-ho-ho, you got me! The truth is that I hate christmas! </p></div></div>
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