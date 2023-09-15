
var height = 6; //number of guesses
var width = 5; //length of word
var row = 0; //current guess (attempt #)
var col = 0; // current letter for that attempt

var gameOver = false;
var word = "SQUID";

window.onload = function() {
    intialize();
}

function intialize() {

    //create the game board
    for (let r = 0; r < height; r++) {
        for (let c =0; c < width; c++) {
            //c<span id="0-0 class="tile></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "_" + c.toString();
            tile.classList.add("tile");
            tile.innerText ="P";
            document.getElementById("board").appendChild(tile); 
        }
    }
}