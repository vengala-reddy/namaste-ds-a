/* console.log("Hello World!"); // string
console.log(7); // number
console.log(true); // boolean */
const a = 10; // constant variable
const b = 20; // constant variable
const sum = a + b; // addition of two numbers
console.log("Sum of a and b is: " + sum); 
const multiply = a * b; // multiplication of two numbers
console.log("Multiplication of a and b is: " + multiply); 
let x = 20;
console.log("Value of x is: " + x); 
x = 30; // reassigning value to x
console.log("New value of x is: " + x); 
let firstName ="Vengala Reddy"; // string variable
let lastName = "Mooli"; // string variable
let fullName = firstName + " " + lastName; 
console.log("Full Name is: " + fullName); 
let arr = [1, 2, 3, 4, 5]; // array variable
console.log("Array is: " + arr); 
let add = arr[0] + arr[6]; // accessing array elements
console.log("Sum of first two elements in array is: " + add); // NaN because arr[6] is undefined
let arr2 = ["reddy", 7, true, null, -3, [5,10]]; // mixed array
console.log("Mixed Array is: " + arr2 + ", Nested Array: " + arr2[5][1]);
let obj = { // object variable
    name: "Vengala Reddy",
    age: 26,
    isStudent: true,
    subjects: ["Data Structures", "Javascript", "Angular", "Node.js", "Java"], // array inside object
    greet: function() { // adding a method to the object
        console.log("Hello, my name is " + this.name);
    },
    introduce: function() { // adding another method to introduce age
        console.log("I am " + this.age + " years old.");
    },
    displaySubjects: function() { // adding a method to display subjects
        console.log("Subjects: " + this.subjects.join(", "));
    }
}; 
obj.greet();
obj.introduce();
obj.displaySubjects();