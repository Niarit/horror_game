
let winModal = document.getElementById("winModal");
let winButton= document.getElementById("win");

winButton.onclick =function () {
    winModal.style.display ='block';
};

let backBtn = document.getElementById('back');
backBtn.onclick = function () {
    location.href = "http://127.0.0.1:5000"
};