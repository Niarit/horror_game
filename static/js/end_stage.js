const Bosses = [{
    name: "Christmas Elf",
    birthYear: "1850",
    photo: "https://cdn.shopify.com/s/files/1/1100/6424/products/IMG_9812.jpg?v=1573412468",
    weight: " 30 kg",
    height: " 60cm",
},
    {
        name: "Grinch",
        birthYear: "1957",
        photo: "https://cdn.nwmgroups.hu/s/img/i/1802/20180208109.jpg?w=644&h=396",
        weight: " 86 kg",
        height: " 200cm",
    },
    {
        name: "Saint Nicholas",
        birthYear: "1823",
        photo: "https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/adobestock_226013143.jpeg?itok=20EmkjeP",
        weight: " 125 kg",
        height: " 180cm",
    }];

function bossAge(birthYear) {
    let Age = new Date().getFullYear() - birthYear;
    return `${Age} years old`

}

function renderBoss(boss) {
    return `
    <div class= "boss">
        <img class="boss-photo" src="${boss.photo}">
            <div id="loseModal" class="modal">
            <div class="modal-content-lose">
            <span class="close">&times;</span>
            <p class="result">It wasn't me :(</p></div></div>
            
            <div id="winModal" class="modal">
            <div class="modal-content-win">
            <p class="result">Ho-ho-ho, you got me! The truth is that I hate christmas! </p></div></div>
        <h2 class="boss-name">${boss.name}</h2>
        <p><strong>Age: </strong>${bossAge(boss.birthYear)}</p>
        <p><strong>Height:</strong>${boss.height}</p>
        <p><strong>Weight:</strong>${boss.weight}</p>
    </div>`
}

function init() {
    document.getElementById("app").innerHTML = `
    <h1 class="app-title">Which one stole the Christmas?</h1> 
        ${Bosses.map(renderBoss).join('')}`
    let bossChoose = document.querySelectorAll(".boss-photo");
    let losemodal = document.getElementById("loseModal");
    let winmodal = document.getElementById("winModal")
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      losemodal.style.display = "none";
    };
    window.onclick = function(event) {
      if (event.target === winmodal) {
        winmodal.style.display = "none";
      }
    };
    for (let photo of bossChoose){
        if (photo === bossChoose[2]){
                photo.onclick = function () {
                winmodal.style.display = "block";}}
        else{
        photo.onclick = function () {
        losemodal.style.display = "block";
    }}}}

init()
