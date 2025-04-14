// Problem 1:Write a function that accepts an exponent and returns back a function that acceptsa number and takes it to the power of the exponent.
/**
 * Returns a function that raises a given number
 * to the power of the specified exponent.
 * @param {number} exponent - The exponent to raise numbers to.
 * @returns {Function}
 */
function pow(exponent) {
  return (number) => number ** exponent; // using arrow function + exponent operator
}

// Usage examples:
const square = pow(2);
const cube = pow(3);

console.log(square(3)); // 9
console.log(cube(3)); // 27
