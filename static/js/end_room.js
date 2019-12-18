
const buttons = document.querySelectorAll(".button");
for (let button of buttons){
    button.addEventListener('click',function () {
        document.form.textview.value = document.form.textview.value+button.value;
    })
}

const okButton = document.querySelector(".ok-button");
okButton.addEventListener('click',function () {
    if (document.form.textview.value == 2811){
        console.log("nice")
    }

})
