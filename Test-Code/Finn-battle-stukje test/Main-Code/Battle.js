var playerhpbar = document.getElementById("playerhpbar");
var enemyhpbar = document.getElementById("enemyhpbar");
var playerhp = 100

//------------------Normal Enemy Database---------------------// 
var goblin = { name: "Goblin", maxhealth: 30, health: 30, mindmg: 5, maxdmg: 10 };
var orc = { name: "Orc", maxhealth: 50, health: 50, mindmg: 10, maxdmg: 15 };
var skeleton = { name: "Skeleton", maxhealth: 20, health: 20, mindmg: 3, maxdmg: 7 };
var zombie = { name: "Zombie", maxhealth: 40, health: 40, mindmg: 8, maxdmg: 12 };
var giant_spider = { name: "Giant Spider", maxhealth: 25, health: 25, mindmg: 6, maxdmg: 9 };
var bandit = { name: "Bandit", maxhealth: 35, health: 35, mindmg: 7, maxdmg: 12 };
var dark_knight = { name: "Dark Knight", maxhealth: 60, health: 60, mindmg: 12, maxdmg: 18 };
var harpy = { name: "Harpy", maxhealth: 30, health: 30, mindmg: 4, maxdmg: 8 };
var troll = { name: "Troll", maxhealth: 80, health: 80, mindmg: 15, maxdmg: 20 };
var dragon = { name: "Dragon", maxhealth: 150, health: 150, mindmg: 25, maxdmg: 30 };
//------------------Boss Enemy Database---------------------// 
var necromancer = { name: "Necromancer", maxhealth: 100, health: 100, mindmg: 10, maxdmg: 20 };
var demon_lord = { name: "Demon Lord", maxhealth: 150, health: 150, mindmg: 20, maxdmg: 30 };
var lich_king = { name: "Lich King", maxhealth: 200, health: 200, mindmg: 25, maxdmg: 35 };
var giant_dragon = { name: "Giant Dragon", maxhealth: 250, health: 250, mindmg: 30, maxdmg: 40 };
var dark_god = { name: "Dark God", maxhealth: 500, health: 500, mindmg: 50, maxdmg: 60 };
//-----------------------------------------------------// 
var current_enemy = goblin
//-----------------------------------------------------// 

function hpsysteem() {

    var playerhpbar = document.getElementById("playerhpbar");
    playerhpbar.parentNode.removeChild(playerhpbar);

    var enemyhpbar = document.getElementById("enemyhpbar");
    enemyhpbar.parentNode.removeChild(enemyhpbar);

    var div = document.createElement("div");
    div.setAttribute("id", "playerhpbar");
    div.innerHTML = `<b>Player ${playerhp}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 " + parseFloat(playerhp).toFixed(2) + "%" + ", #ff0000 0%)"
    if(playerhp < 1) {div.innerHTML = `<b>Player Dead</b>`;}
    document.body.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("id", "enemyhpbar");
    div.innerHTML = `<b>${current_enemy.name} ${current_enemy.health}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 " + parseFloat((current_enemy.health / current_enemy.maxhealth * 100).toFixed(2)) + "%" + ", #ff0000 0%)"
    if(current_enemy.health < 1) {div.innerHTML = `<b>${current_enemy.name} Dead</b>`;}
    document.body.appendChild(div);    
}

function enemydmg() {
    let calcdmg = Math.floor((Math.random() * current_enemy.maxdmg) + current_enemy.mindmg);
    playerhp -= calcdmg
    hpsysteem()
}

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
        enemydmg()
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

