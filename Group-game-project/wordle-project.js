
var height = 6; //number of guesses
var width = 5; //length of word
var row = 0; //current guess (attempt #)
var col = 0; // current letter for that attempt

var gameOver = false;
// var word = "SQUID";
var wordList = ["About", "Alert", "Argue", "Beach", "Above", "Alike", "Arise", "Began", "Abuse", "Alive", "Array", "Begin", "Actor","Allow"];
var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

window.onload = function() {
    intialize();
}

function intialize() {

    //create the game board
    for (let r = 0; r < height; r++) {
        for (let c =0; c < width; c++) {
            //c<span id="0-0 class="tile></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + '-' + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile); 
        }
    }



    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
        //alert(e.code)
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -= 1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }
        else if (e.code == "Enter") {
            update();
             row += 1;
             col = 0;
        }
        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}

function update() {
    // let guess = "";
    // document.getElementById("answer").innerText = "";
    // for (let c =0; c < width; c++) {
    //     let currTile = document.getElementById(row.toString() + "-" + c.toString());
    //     let letter = currTile.innerText;
    //     guess += letter;
    // }

    let correct = 0;
    let letterCount = {};
    for (let i = 0; i < word.length; i++) {
        letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }




    for ( let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
            letterCount[letter] -= 1;
        }
        if (correct == width) {
            gameOver = true;
        }
    }


    for ( let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        if (!currTile.classList.contains("correct")) {
       
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                letterCount[letter] -= 1;
            }
            else {
                currTile.classList.add("absent");
            }
        }    
    }
}