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

//************************* */
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

//****************************** */ LIBRARY
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratings.length;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544,
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

//********************************** */ SCHOOL

// Parent class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // setter
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  // methods
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`,
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

// PrimarySchool class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// HighSchool class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

// Instances

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
);

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.sportsTeams;

//////************** EXPPORT */

export {
 alSmith,
 lorraineHansbury
};

export default salaryData;