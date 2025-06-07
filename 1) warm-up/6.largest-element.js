function largestElement(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    let largest = -1; // Initialize the largest element with the first element of the array
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