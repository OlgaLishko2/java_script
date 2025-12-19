//IIFE - Immediately Invoked Function Expression
// function(){
//     execution stattment
// }()

//High Order Function -
// 1. takes one or more function as arguments or
// 2. returns a function as its result

// function greet(name) {
//   return "Hello " + name;
// }

// function hof(callback) {
//   let firstName = "Ola";
//   let result = callback(firstName);
//   return result;
// }
// console.log(hof(greet));

//Explanation
// function callbackfunction() {
//   console.log("I am a callback function");
// }
// function highOrderFunction(func) {
//   console.log("I am a high order function");
//   func();
// }
// highOrderFunction(callbackfunction);

//************ */
// Простые функции трансформации
// function toUpperCase(str) {
//   return str.toUpperCase();
// }
// function toLowerCase(str) {
//   return str.toLowerCase();
// }
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Функция высшего порядка
// function transformString(str, transformFunction) {
//   return transformFunction(str);
// }

// const myString = "Hello World";

// console.log(transformString(myString, toUpperCase)); // "HELLO WORLD"
// console.log(transformString(myString, toLowerCase)); // "hello world"
// console.log(transformString(myString, reverseString)); // "dlroW olleH"

//************** */

// const student = ["Ola", "Etin", "Thaisa", "Sreyasi", "Rupinder"];
// student.forEach(function (student) {
//   console.log(student + "is a student of MCA");
// });
// student.map((student, index) => {
//   console.log(`${student} is at position ${index}`);
// });
