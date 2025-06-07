function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const element of arr) {
        if (element > largest) {
            secondLargest = largest; // Update second largest before updating largest
            largest = element; // Update largest
        } else if (element > secondLargest && element !== largest) {
            secondLargest = element;
        }

    }
    return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest found
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondLargestNumber = secondLargest(numbers);
console.log("Second largest element in the array:", secondLargestNumber); // Output: 9