function printHelloWorld() {
    console.log("Hello, World!");
}
printHelloWorld();
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Vengala Reddy");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(5, 10); // returns 15
console.log("Sum of 5 and 10 is: " + addNumbers(5, 10));
let x = 20;
let y = 30;
function multiplyNumbers(a, b) {
    return a * b;
}
console.log("Multiplication of " + x + " and " + y + " is: " + multiplyNumbers(x, y));
function square(x){
    return x * x;
}
console.log("Square of x is: " + square(x)); 
// create a function which accepts age and tells whether the user is eligible to vote or not
function isEligibleToVote(age) {
    if (age < 0) {
        console.log("Age cannot be negative.");
    }
    else if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
isEligibleToVote(-2); 
// create a function to check if a number is even or odd
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }
}
isEvenOrOdd(10);
isEvenOrOdd(15);