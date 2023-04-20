var playerhpbar = document.getElementById("playerhpbar");
var enemyhpbar = document.getElementById("enemyhpbar");
var playerhp = 100

//------------------Enemy Database---------------------// 
const testdummy = { name: "Dummy the dum", maxhealth: 100, health: 100 };
const testdummy2 = { name: "Dummy the dum2", maxhealth: 50, health: 25 };
const testboss = { name: "big boi", maxhealth: 150, health: 150 };
//-----------------------------------------------------// 
var current_enemy = testboss
//-----------------------------------------------------// 
// function dobble(min, max) {
//     var dobblesteenoutput = Math.floor(Math.random() * (max - min + 1)) + min;
//     return dobblesteenoutput
// }

function hpsysteem() {

    var playerhpbar = document.getElementById("playerhpbar");
    playerhpbar.parentNode.removeChild(playerhpbar);

    var enemyhpbar = document.getElementById("enemyhpbar");
    enemyhpbar.parentNode.removeChild(enemyhpbar);

    var div = document.createElement("div");
    div.setAttribute("id", "playerhpbar");
    div.innerHTML = `<b>Player ${playerhp}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 " + parseFloat(playerhp).toFixed(2) + "%" + ", #ff0000 0%)"
    document.body.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("id", "enemyhpbar");
    div.innerHTML = `<b>${current_enemy.name} ${current_enemy.health}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 " + parseFloat((current_enemy.health / current_enemy.maxhealth * 100).toFixed(2)) + "%" + ", #ff0000 0%)"
    document.body.appendChild(div);
}

// var attackBtn = document.getElementById("attackBtn");
// attackBtn.addEventListener("click", function () {
//     playerhp = playerhp - 10;
//     hpsysteem()
// });


hpsysteem()


var selectionBtn = document.getElementById("selectionBtn");
selectionBtn.addEventListener("click", function () {
    var selectionScreen = document.createElement("div");
    var Attacksbuttons = document.createElement("div");
    selectionScreen.setAttribute("id", "selectionScreen");
    Attacksbuttons.setAttribute("id", "Attacksbuttons");
    document.body.appendChild(selectionScreen);
    document.body.appendChild(Attacksbuttons);
    for (var i = 1; i <= 5; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = "Attack " + i;
        btn.classList.add("Attack" + i);
        selectionScreen.appendChild(btn);
        Attacksbuttons.appendChild(btn);
        btn.addEventListener("click", function () {
            // Code voor elke button
            selectionScreen.parentNode.removeChild(selectionScreen);
            Attacksbuttons.parentNode.removeChild(Attacksbuttons);
        });
    }

    // Button 1 code
    var btn1 = document.querySelector(".Attack1");
    btn1.addEventListener("click", function () {
        //------------------------------------------------//
        playerhp = playerhp - 10;
        hpsysteem()
    });

    // Button 2 code
    var btn2 = document.querySelector(".Attack2");
    btn2.addEventListener("click", function () {
        //------------------------------------------------//
        current_enemy.health -= 10;
        hpsysteem()
    });

    // Button 3 code
    var btn3 = document.querySelector(".Attack3");
    btn3.addEventListener("click", function () {
        //------------------------------------------------//

    });

    // Button 4 code
    var btn4 = document.querySelector(".Attack4");
    btn4.addEventListener("click", function () {
        //------------------------------------------------//

    });

    // Button 5 code
    var btn5 = document.querySelector(".Attack5");
    btn5.addEventListener("click", function () {
        //------------------------------------------------//

    });
});

