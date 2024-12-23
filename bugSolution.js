function foo(a, b) {
  // Handle undefined and null values
  a = (typeof a === 'undefined') ? 0 : a;
  a = (a === null) ? 0 : a;
  b = (typeof b === 'undefined') ? 0 : b; 
  b = (b === null) ? 0 : b;

  // Check for NaN
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle NaN as needed
  }

  return a + b; 
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(NaN, 5)); // 0