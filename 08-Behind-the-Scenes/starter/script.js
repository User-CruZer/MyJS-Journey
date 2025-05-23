'use strict';


// Scoping
function calcAge(birthyear) {
    const age = 2037 - birthyear;
    
    function printAge() {
        const output = `${firstname}, you are ${age} years old in 2037, and you were born in ${birthyear}`;
        var milennial = true;
        console.log(output);

        if(birthyear >= 1981 && birthyear <= 1999) {
            // const firstname = "Ojak";
            console.log(`${firstname}, You are a milennial`);
        } else if (birthyear >= 2000 && birthyear <= 2010) {
            // const firstname = "Ojak";
            console.log(`${firstname}, You are a gen z`);
        }

        function add(a, b) {
            return a + b
        }
    }
    printAge();

    return age;
}

const firstname = "Zaki";
// calcAge(2006);
// console.log(firstname, calcAge(2006));

document.getElementById("btn1").addEventListener("click", function() {
    console.log(firstname);
    calcAge(2006);
})