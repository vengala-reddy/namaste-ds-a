function countDigits(n) {
  if (n < 0) {
    n = -n; // Convert negative to positive
    console.log("Negative number detected, converting to positive for digit count.", n);
  }
  
  if (n === 0) {
    return 1; // Special case for zero
  }

  let count = 0;
  
  while (n > 0) {
    n = Math.floor(n / 10); // Remove the last digit
    count++;
  }
  
  return count;
}
// Example usage:
const number = -1234567890;
const digitCount = countDigits(number);
console.log("Number of digits in", number, "is:", digitCount); // Output: 10