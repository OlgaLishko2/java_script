export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(4, 3));
console.log(divide(10, 2));

//another wau of export : module.exports = {add, substract, multiply, divide};
