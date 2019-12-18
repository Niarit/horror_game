import{dataHandler} from "./datahandler.js";

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


function init() {
    document.getElementById("app").innerHTML = `
    <h1 class="app-title">Which one stole the Christmas?</h1> 
        ${Bosses.map(dataHandler._renderBoss).join('')}`
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
