'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector(".check").addEventListener("click", function() {
    const x = Number(document.querySelector(".guess").value);
    console.log(x, typeof(x));

    // When there is no input
    if(!x) {
        document.querySelector(".message").textContent = "🗿 No number!";

    // When the player wins
    } else if (x === secretNumber) {
        document.querySelector(".message").textContent = `${secretNumber} is the correct number`
        document.querySelector(".number"). textContent = secretNumber;


        document.querySelector("body").style.backgroundColor = "green";

        document.querySelector(".number").style.width = "300px"

        // Highscore:
        if(score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }


    // When guess is too high
    } else if(x > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = `📈 Number is too High!`;
        score--;
        document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = `You have lost the game`;
            document.querySelector(".score").textContent = 0;
        }

    // When guess is to low
    } else if(x < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = `📉 Number is too Low!`;
            score--;
            document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = `You have lost the game`;
                document.querySelector(".score").textContent = 0;
            
        }
    }
});


document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20;
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.background = "#222"
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = NaN
    document.querySelector(".message").textContent = `Start guessing...`;
        
});