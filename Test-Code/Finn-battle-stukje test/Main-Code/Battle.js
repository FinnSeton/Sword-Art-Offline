var playerhpbar = document.getElementById("playerhpbar");
var enemyhpbar = document.getElementById("enemyhpbar");

function dobble(min, max) {
    var dobblesteenoutput = Math.floor(Math.random() * (max - min + 1) ) + min;
    return dobblesteenoutput
}

function battle() {
    var playerhp = 40
    var enemyhp = 50

    var div = document.createElement("div");
    div.setAttribute("id", "playerhpbar");
    div.innerHTML = `<b>Player ${playerhp}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 "+parseFloat(playerhp).toFixed(2)+"%"+", #ff0000 0%)"
    document.body.appendChild(div);

    var div = document.createElement("div");
    div.setAttribute("id", "enemyhpbar");
    div.innerHTML = `<b>Enemy ${enemyhp}HP</b>`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 "+parseFloat(enemyhp).toFixed(2)+"%"+", #ff0000 0%)"
    document.body.appendChild(div);

    

}

battle()
