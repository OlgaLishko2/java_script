// //SCOPE

// //1. global scope
// let firstName = "Femi";

// function studentName() {
//   let surName = "Ola"; // block scope
//   let firstName = "Fatemeh";
//   console.log(firstName);
//   return surName;
// }
// console.log(firstName);
// studentName();

// if (firstName == "Fatemeh") {
//   let secondName = "thaisa";      //function scope
//   console.log(secondName);
// }

// studentName();
// // console.log(secondName);

//********************* */

// var luckuNumber = 80;

// function witalumni() {
//   let age = 12;
//   for (let i = 0; i < 4; i++) {
//     var luckuNumber = age + 4;
//     var unluckuNumber = age - 4;
//   }
//   console.log(unluckuNumber);
// }
// witalumni();
// // console.log(unluckuNumber); // error, no access

// console.log(luckuNumber);

// class grade A = 80-100, B = 79-70, C = 69-60, D = 59-50 E = 49 - 40, F = 39". Print the grade of a particular student

// let score = 45;

// if (score >= 80 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 79) {
//   console.log("B");
// } else if (score >= 60 && score <= 69) {
//   console.log("C");
// } else if (score >= 50 && score <= 59) {
//   console.log("D");
// } else if (score >= 40 && score <= 49) {
//   console.log("E");
// } else if (score >= 0 && score <= 39) {
//   console.log("F");
// } else {
//   console.log("Invalid score");
// }

// //ternary operator       *************************

// //condition ? if do this : else this;
// // condition ? firststatements : second condition ? secondstatement : else  here

// //SPLICE
// arr.splice(2, 0, "Name"); // add element
// arr.splice(2, 1); // delete element
// arr.splice(2, 2, "Name"); // replace element

let studentid = {
  studentName: "Femi",
  saymyName: function () {
    return "Student name is " + this.studentName;
  },
};
console.log(studentid.saymyName());

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const storeItems = [
  new Item("Apple", 1.5), // item number 0
  new Item("Bread", 2.0), // item number 1
  new Item("Milk", 3.0), // item number 2
];

// calculateTotal([0, 2], [3, 1]);
// Item 0 → Apple → $1.50 × 3 = $4.50
// Item 2 → Milk → $3.00 × 1 = $3.00
// Output = 7.5

function calculateTotal(items, quantities) {
  //your code goes here
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const itemIndex = items[i];
    const quantity = quantities[i];
    const item = storeItems[itemIndex];
    // if (!item) {
    //   console.log("This item does not exist");
    // }
    total += item.price * quantity;
  }
  return total;
}
console.log(calculateTotal([1, 2], [1, 3]));
