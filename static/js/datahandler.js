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
    }
};