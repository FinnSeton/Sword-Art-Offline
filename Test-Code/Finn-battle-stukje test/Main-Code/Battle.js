var playerhpbar = document.getElementById("playerhpbar");


function battle() {
    var playerhp = 40
    var enemyhp = 100

    var div = document.createElement("div");
    div.setAttribute("id", "playerhpbar");
    div.innerHTML = `${playerhp}HP`;
    div.style.backgroundImage = "linear-gradient(to right, #00ff00 "+parseFloat(playerhp).toFixed(2)+"%"+", #ff0000 0%)"
    document.body.appendChild(div);
    
    






}

battle()
