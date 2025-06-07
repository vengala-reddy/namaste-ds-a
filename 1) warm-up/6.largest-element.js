function largestElement(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    let largest = -Infinity; // Initialize the largest element with the first element of the array
    for (const element of arr) {
        if (element > largest) {
            largest = element; // Update largest if the current element is greater
        }
    }  
    return largest; // Return the largest element found
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largestNumber = largestElement(numbers);
console.log("Largest element in the array:", largestNumber); // Output: 10

// alternative using Math.max
function largestElementUsingMath(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.max(...arr); // Use Math.max to find the largest element
}
// Example usage:
const largestNumberUsingMath = largestElementUsingMath(numbers);
console.log("Largest element in the array using Math.max:", largestNumberUsingMath); // Output: 10

// alternative using reduce
function largestElementUsingReduce(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return arr.reduce((max, current) => (current > max ? current : max), -Infinity); // Use reduce to find the largest element
}
// Example usage:
const largestNumberUsingReduce = largestElementUsingReduce(numbers);
console.log("Largest element in the array using reduce:", largestNumberUsingReduce); // Output: 10

// alternative using sort
function largestElementUsingSort(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return arr.sort((a, b) => b - a)[0]; // Sort the array in descending order and return the first element
}
// Example usage:
const largestNumberUsingSort = largestElementUsingSort(numbers);
console.log("Largest element in the array using sort:", largestNumberUsingSort); // Output: 10