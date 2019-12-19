
const buttons = document.querySelectorAll(".button");
for (let button of buttons){
    button.addEventListener('click',function () {
        document.form.textview.value = document.form.textview.value+button.value;
    })
}

const okButton = document.querySelector(".ok-button");
okButton.addEventListener('click',function () {
    if (document.form.textview.value == 1811){
        location.href = "http://127.0.0.1:5000/new-game-end-2";
    }else{
        location.href = "http://127.0.0.1:5000/new-game-end-1";
    }

});
