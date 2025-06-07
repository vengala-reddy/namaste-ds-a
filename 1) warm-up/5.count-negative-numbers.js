function countNegativeNumbers(arr) {
    // Filter the array to get only negative numbers
    const negativeArr = arr.filter(num => num < 0);
    
    // Return the new array containing only negative numbers
    return negativeArr;
}
// Example usage:
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10];
const negativeNumbersArray = countNegativeNumbers(numbers);
console.log("Negative numbers in the array:", negativeNumbersArray); // Output: [-2, -4, -6, -8]