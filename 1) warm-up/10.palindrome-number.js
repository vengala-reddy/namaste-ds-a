function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// Example usage:
const number = 12321; // Change this to test other numbers
const result = isPalindrome(number);
console.log(`Is ${number} a palindrome?`, result); // Output: true or false based on the number

function isPalindromeNumber(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    let original = num;
    let reversed = 0;

    while (num > 0) {
        const digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }

    return original === reversed; // Check if original and reversed are the same
}
// Example usage:
const numberToCheck = 12321; // Change this to test other numbers
const isPalindromeResult = isPalindromeNumber(numberToCheck);
console.log(`Is ${numberToCheck} a palindrome?`, isPalindromeResult); // Output: true or false based on the number