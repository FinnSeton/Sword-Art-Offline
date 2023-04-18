var playerhpbar = document.getElementById("playerhpbar");
var enemyhpbar = document.getElementById("enemyhpbar");
var playerhp = 100
var enemyhp = 100

function dobble(min, max) {
    var dobblesteenoutput = Math.floor(Math.random() * (max - min + 1)) + min;
    return dobblesteenoutput
}

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
    div.innerHTML = `<b>Enemy ${enemyhp}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 " + parseFloat(enemyhp).toFixed(2) + "%" + ", #ff0000 0%)"
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
    selectionScreen.setAttribute("id", "selectionScreen");
    document.body.appendChild(selectionScreen);
    for (var i = 1; i <= 5; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = "Attack " + i;
        btn.classList.add("Attack" + i);
        selectionScreen.appendChild(btn);
        btn.addEventListener("click", function () {
            playerhp = playerhp - 10;
            hpsysteem()
            selectionScreen.parentNode.removeChild(selectionScreen);
        });
    }
});

