//CURRYING -
// function calc(a, b, c, d){
//     return a*b*c*d
// }
// calc(1, 3, 5, 7);

//********** */
// function curriedcalc(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a * b * c * d;
//       };
//     };
//   };
// }
// console.log(curriedcalc(2)(3)(5)(6));

//************** */
// const say = (word) => (name) => `${word}, ${name}`;
// const hello = say("Hi");
// console.log(hello("Ola"));
// console.log(hello("Masha"));

// const add = (a) => (b) => a + b;
// const add10 = add(10);
// add10(5);

// //**************          MEMORY MANAGMENT      ******************

// //STACK MEMORY - PRIMITIVE VALUES: STRING, NUMBER, BOOLEAN....  FAST AND SHORT-LIVED
// let firstname = "Femi";
// let lastname = "Ola";
// let age = 5;

// //HEAP MEMORY - STORES OBJECTS, ARRAYS, FUNCTIONS. NOT AS FAST

// let studentData = {
//   firstname: "Femi",
//   age: 5,
// };
// let newStudentData = studentData;
// newStudentData.firstname = "Ola";
// console.log(studentData);

//************ */              //** */

let obj1 = {
  name: "Rio",
  age: 11,
};
let obj2 = obj1;
obj1.name = "Rino";
console.log(obj1, obj2);
obj1 = null;
console.log(obj1, obj2);


// *************.   EVENT LOOPING -

//javascript = string-threaded - one thing at a time
//call stack - LIFO - where your func are executed
//Task queue - async operation come to wait

// console.log("This will print first");
// var a = "Zero";
// setTimeout(() => {
//   a = "one";
// }, 5000);

// console.log(a);



//DESING PATTERNS - how you write your code