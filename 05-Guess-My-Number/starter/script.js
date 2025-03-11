'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct answer!"
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number"). textContent = secretNumber;
let score = 20;


document.querySelector(".check").addEventListener("click", function() {
    const x = Number(document.querySelector(".guess").value);
    console.log(x, typeof(x));

    if(!x) {
        document.querySelector(".message").textContent = "🗿 No number!";
    } else if (x === secretNumber) {
        document.querySelector(".message").textContent = `${secretNumber} is the correct number`
    } else if(x > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = `📈 Number is too High!`;
        score--;
        document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = `You have lost the game`;
            document.querySelector(".score").textContent = 0;
        }
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