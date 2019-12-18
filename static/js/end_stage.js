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
    let losemodalElf = document.getElementById("loseModalElf");
    let losemodalGrinch = document.getElementById("loseModalGrinch");
    let winmodal = document.getElementById("winModal")
    let span1 = document.getElementsByClassName("close1")[0];
    let span2 = document.getElementsByClassName("close2")[0];

    span1.onclick = function() {
      losemodalElf.style.display = "none";
    };

    span2.onclick = function() {
      losemodalGrinch.style.display = "none";
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
        else if (photo === bossChoose[1]){
                photo.onclick = function () {
                losemodalGrinch.style.display = "block";}}
        else {photo.onclick = function () {
                losemodalElf.style.display = "block";}}
    }}

init()
