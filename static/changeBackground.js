let button = document.getElementById("btn");

button.addEventListener("click", function () {
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/5c/71/f2/5c71f2087044c0eeb0cf8054964f1e54.jpg")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center fix";
    console.log(document.body.style.backgroundImage);
});

function removeBtn() {
    let button = document.getElementById('btn');
    button.parentNode.removeChild(button);
    return false;
}

function previousBtn() {
    let prevBtn = document.createElement("BUTTON");
    prevBtn.setAttribute("id", "prevBtn");
    prevBtn.innerHTML = "";
    prevBtn.onclick = function () {
        document.body.style.backgroundImage = 'url("https://i.ytimg.com/vi/FpVGQ_lXW3s/maxresdefault.jpg")';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center fix";
        console.log(document.body.style.backgroundImage);
    };
    document.body.appendChild(prevBtn);

}

