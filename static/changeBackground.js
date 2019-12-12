let button = document.getElementById("btn");
button.addEventListener("click", function () {
    changeBg("https://i.pinimg.com/originals/5c/71/f2/5c71f2087044c0eeb0cf8054964f1e54.jpg")
});

function changeBg(background) {
    document.body.style.backgroundImage = 'url(' + background + ')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center fix";
    console.log(document.body.style.backgroundImage);
}


function removeBtn(buttonName) {
    let button = document.getElementById(buttonName);
    button.parentNode.removeChild(button);
    return false;
}


function nextButton(btnName) {
    removeBtn('btn');
    let nextBtn = document.createElement("BUTTON");
    nextBtn.setAttribute("id", btnName);
    nextBtn.innerHTML = "";
    document.body.appendChild(nextBtn);
    nextBtn.onclick = function () {
        changeBg("https://www.narcity.com/u/2019/09/13/e9518023ad39d20cb559c217e14f324.jpg_1200x630.jpg");
        removeBtn('nextBtn')
    };

}

