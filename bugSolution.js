function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//Improved version
function fooImproved(a, b) {
  a = a === null ? 0 : a; //Sets null values to 0
  b = b === null ? 0 : b; //Sets null values to 0
  return a + b;
}

console.log(fooImproved(null, 5)); // Output: 5
console.log(fooImproved(5, null)); // Output: 5
console.log(fooImproved(5, 5)); // Output: 10