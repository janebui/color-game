// RGB Color Guessing Game
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    listenButtons();
    listenSquares();
    reset();
}


//easy.addEventListener("click", function() {
//    easy.classList.add("selected");
//    hard.classList.remove("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    displayColor.textContent = pickedColor;
//    
//    for(i = 0; i < squares.length; i++ ) {
//        if(colors[i]){
//            squares[i].style.backgroundColor = colors[i];
//        }
//        else {
//            squares[i].style.display = "none";
//        }
//    }
//})
//
//hard.addEventListener("click", function() {
//    hard.classList.add("selected");
//    easy.classList.remove("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    displayColor.textContent = pickedColor;
//    for(i = 0; i < squares.length; i++ ) {
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//        }       
//})


// mode button listeners, loops through difficulty modes, currently 2 modes
function listenButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            // Alternate: this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

            reset();
        })
    }
}

// square listeners
function listenSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                // correct
                messageDisplay.textContent = "CORRECT!";
                changeColors(clickedColor);
                h2.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                // wrong
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN";
            }
        })
    }
}

// resets game when user clicks on reset button
resetButton.addEventListener("click", function () {
    reset();
})

// loop through all squares
// change each color to match given color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Pick a random square
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

// Generate random colors into array
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "RESET";

    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h2.style.backgroundColor = "#1F487E";
}
