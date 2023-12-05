function quadratic(x1, x2) {
  // Since a = 1, we only need to find b and c

  // The sum of roots (x1 + x2) is equal to the negation of the coefficient of x
  const b = -(x1 + x2);

  // The product of roots (x1 * x2) is equal to the constant term
  const c = x1 * x2;

  // Return the coefficients as an array [a, b, c]
  return [1, b, c];
}

// Example usage:
const result1 = quadratic(1, 2);
console.log(result1); // Output: [1, -3, 2]

const result2 = quadratic(0, 1);
console.log(result2); // Output: [1, -1, 0]
