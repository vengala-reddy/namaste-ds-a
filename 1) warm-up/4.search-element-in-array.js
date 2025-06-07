function searchElement(nums, x){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === x){
            return i; // Return the index of the element if found
        }
    }
    return -1;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementToFind = 15;
const index = searchElement(numbers, elementToFind);
console.log("Index of element", elementToFind, "is:", index); // Output: Index of element 5 is: 4