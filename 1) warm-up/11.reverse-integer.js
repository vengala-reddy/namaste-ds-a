function reverseInteger(num) {
    let reversed = 0;
    let isNegative = num < 0; // Check if the number is negative
    num = Math.abs(num); // Work with the absolute value of the number

    while (num > 0) {
        const digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }

    return isNegative ? -reversed : reversed; // Restore the sign if it was negative
}
// Example usage:
const numberToReverse = -12345; // Change this to test other numbers
const reversedNumber = reverseInteger(numberToReverse);
console.log(`Reversed integer of ${numberToReverse} is:`, reversedNumber); // Output: -54321