function evenNumbers(arr) {
    // Filter the array to get only even numbers
    const evenArr = arr.filter(num => num % 2 === 0);
    
    // Return the new array containing only even numbers
    return evenArr;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = evenNumbers(numbers);
console.log("Even numbers in the array:", evenNumbersArray); // Output: [2, 4, 6, 8, 10]