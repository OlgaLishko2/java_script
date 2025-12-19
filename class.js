// class Sudent {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   greet() {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// // object is the instance of the class
// let femi = new Sudent("Femi", 22, 6);
// console.log(femi.greet());

// //subclass
// class Wit extends Sudent {
//   constructor(name, age, country) {
//     super(name, age);
//     this.country = country;
//   }

//   static greeting(){
//     return "this is a static greeting";
//   }
// }
// let witinstance = new Wit("Femi", 21, "Canada");
// console.log(Wit.greeting);

// //**************************** */

// create a class shape, you get to decide the variables,
// create a method to check if the shape is a poylgon or not

class Shape {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }
  checkIfPoligon() {
    return this.sides >= 3;
  }
}
// object is the instance of the class
let triangle = new Shape("Triangle", 3);
let circle = new Shape("Circle", 0);
let line = new Shape("Line", 2);

// console.log(triangle.checkIfPoligon());
// console.log(circle.checkIfPoligon());
// console.log(line.checkIfPoligon());

// create a subclass for class Shape, create a static method and a non-static method;
// for the static method calculate the area for the non-static calculate the perimeter;

class Calc extends Shape {
  constructor(name, sides, length) {
    super(name, sides);
    this.length = length;
  }

  perimeter() {
    return `The perimeter is ${this.sides} * ${this.length}`;
  }
  static area() {
    return `The area is ${this.length} * ${this.length}`;
  }
}
let values = new Calc("Triangle", 3, 15);
console.log(values.perimeter());
console.log(Calc.area());
