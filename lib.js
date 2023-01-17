document.getElementById("joinButton").addEventListener("click", giveVirus);

function giveVirus() {
    document.write("<h1 id=\"virus\">Congrats on your new virus!!</h1>");
    document.getElementById("virus").style.width = "10em";
    document.getElementById("virus").style.textAlign = "center";
    document.getElementById("virus").style.boxShadow = "#4cff00 0 0 10px 10px";
}