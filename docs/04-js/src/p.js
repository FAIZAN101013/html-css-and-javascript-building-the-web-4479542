// Original array of numbers
let groupofNums = [1,2,3,4,5,67,8,9,0,4,2,35,6,566,7,7683,2,2,1312,3,55,6];

// Arrays to store results (GLOBAL – they keep growing)
let evenNums = [];
let oddNums = [];

// New array created using spread operator
let groupofNums2 = [
  ...groupofNums,
  12,234,12343,5345,645,645,756,56,8,1234234,534,5134
];

// Function to separate odd & even numbers
function oddOrEven(a) {
  // Loop through array
  for (let i = 0; i < a.length; i++) {

    // If number is even
    if (a[i] % 2 === 0) {
      evenNums.push(a[i]); // add to even array
    } 
    // If number is odd
    else {
      oddNums.push(a[i]); // add to odd array
    }
  }
}

// First run
oddOrEven(groupofNums);
console.log(evenNums); // evens from groupofNums
console.log(oddNums);  // odds from groupofNums

// Second run (arrays KEEP growing)
oddOrEven(groupofNums2);
console.log(evenNums); // evens from BOTH arrays
console.log(oddNums);  // odds from BOTH arrays

// Filter original array using evenNums
let evenNumbers = groupofNums.filter(num => evenNums.includes(num));

// Anything not in evenNums is odd
let oddNumbers = groupofNums.filter(num => !evenNums.includes(num));

console.log(oddNumbers);
console.log(evenNumbers);
