function starPattern(n) {
  // Print the square pattern
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '* ';
    }
    console.log(row.trim()); // Trim to remove trailing space
  }
}

// Example usage:
const size = 5; // Size of the square pattern
starPattern(size);
// Output: 
// *****
// *****
// *****
// *****
// *****

function starPatternTriangle(n) {
  // Print the right-angled triangle pattern
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim()); // Trim to remove trailing space
  }
}
// Example usage:
const triangleSize = 5; // Size of the triangle pattern
starPatternTriangle(triangleSize);
// Output:
// * 
// * *
// * * *
// * * * *
// * * * * *

function numberTriangle(n) {
  // Print the number triangle pattern
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row.trim()); // Trim to remove trailing space
  }
}
// Example usage:
numberTriangle(triangleSize);
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function invertedNumberTriangle(n) {
  // Print the inverted number triangle pattern
  for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row.trim()); // Trim to remove trailing space
  }
}
// Example usage:
console.log("Inverted Number Triangle:");
invertedNumberTriangle(triangleSize);
// Output:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function leftAngledTriangle(n) {
  for(let i=0; i<n; i++) {
    let row = '';
    for(let j=0; j<n-i-1; j++) {
      row += ' '; // Add spaces for left alignment
    }
    for(let k=0; k<=i; k++) {
      row += '*'; // Add stars
    }
    console.log(row); // Trim to remove trailing space
  }
}
// Example usage:
console.log("Left Angled Triangle:");
leftAngledTriangle(triangleSize);

function alternativeNumberPattern(n) {
  for(let i=0; i<n; i++) {
    let row = '';
    let switchValue = 1;
    for(let j=0; j<=i; j++) {
      row += switchValue + ' '; // Add the current number
      switchValue = switchValue === 1 ? 0 : 1; // Switch between 1 and 0
    }
    console.log(row.trim());
  }
}
// Example usage:
console.log("Alternative Number Pattern:");
alternativeNumberPattern(triangleSize);

function alternateNumberGlobalToggle(n) {
  let toggle = 1; // Global toggle variable
  for(let i=0; i<n; i++) {
    let row = '';
    for(let j=0; j<=i; j++) {
      row += toggle + ' '; // Add the current number
      toggle = toggle === 1 ? 0 : 1; // Switch between 1 and 0
    }
    console.log(row.trim());
  }
}

// Example usage:
console.log("Alternate Number Global Toggle Pattern:");
alternateNumberGlobalToggle(triangleSize);

