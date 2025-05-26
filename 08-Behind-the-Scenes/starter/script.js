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



// Hoisting

console.log(me);
// console.log(job);
// console.log(year);



// Variables
var me = "Zaki";
let job = "unemployed";
const year = 2006;

// functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArr(2,3));

function addDecl(a, b) {
    return a + b
}

const addExpr = function(a, b) {
    return a + b
}

const addArr = (a, b) => a + b;


// example 
let carts = 12
if(!carts) {
    deleteShoppingCart()
} else if (carts) {
    console.log("You got some carts to pay")
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log("Your shopping cart is clear");
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);