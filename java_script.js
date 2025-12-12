// console.log(Math.floor(Math.random() * 100));
// console.log(Math.ceil(43.8))
// console.log(Number.isInteger(2017))

// var favoriteFood = 'pizza'
// var numOfSlices = 8
// console.log(favoriteFood)
// console.log(numOfSlices)

// let changeMe = true;
// changeMe = false;
// console.log(changeMe);

// let myName = 'Ola';
// let myCity = 'Calgary';
// console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// let newVariable = 'Playing around with typeof.';
// console.log(typeof newVariable)
// newVariable = 1;
// console.log(typeof newVariable)

// // my age
// let myAge = 30;
// // value 2
// let earlyYears = 2;
// earlyYears *= 10.5;
// console.log(earlyYears);
// // later year
// let laterYears = myAge - 2;
// //the number of dog years
// laterYears *= 4;
// console.log(laterYears);
// //earlyYears + laterYears
// let myAgeInDogYears = earlyYears + laterYears;
// // my name
// let myName = 'OLA'.toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);

// let hungerLevel  = 7;
// if(hungerLevel > 7) {
//     console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// }
// let mood = 'sleepy';
// let tirednessLevel = 6;

// if(mood === 'sleepy' || tirednessLevel > 8) {                           //OR
//   console.log('time to sleep');
// } else {
//   console.log('not bedtime yet');
// }

// let mood = 'sleepy';
// let tirednessLevel = 6;

// if(mood === 'sleepy' && tirednessLevel > 8) {                           //AND
//   console.log('time to sleep');
// } else {
//   console.log('not bedtime yet');
// }

// let excited = true;
// console.log(!excited); // Prints false

// let sleepy = false;
// console.log(!sleepy); // Prints true

//  ***************************.       ternary operator       *************************
// let favoritePhrase = 'Love That!';

// // if (favoritePhrase === 'Love That!') {
// //   console.log('I love that!');
// // } else {
// //   console.log("I don't love that!");
// // }

// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// }
// else if  (season === 'winter') {
//   console.log('It\'s winter! Everything is covered in snow.');
// }
//  else if  (season === 'fall') {
//   console.log('It\'s fall! Leaves are falling!');
// }
//  else if  (season === 'summer') {
//   console.log('It\'s sunny and warm because it\'s summer!');
// }
// else {
//   console.log('Invalid season.');
// }

//*********************************************************************************** */

// let raceNumber = Math.floor(Math.random() * 1000);
// let registeredEarly = true;
// let age = 19;
// if (age > 18 && registeredEarly) {
//   raceNumber += 1000;
// }

// if (age > 18 && registeredEarly) {
//   console.log(`Race number ${raceNumber}: You will race at 9:30 am.`);
// } else if (age > 18 && !earlyRegistration) {
//   console.log(`Race number ${raceNumber}: You will race at 11:00 am.`);
// } else if (age < 18) {
//   console.log(`Race number ${raceNumber}: You will race at 12:30 pm.`);
// } else {

//   console.log(`Race number ${raceNumber}: Please see the registration desk.`);
// }

function sayThanks(name) {
  console.log(
    "Thank you for your purchase, " + name + "! We appreciate your business.",
  );
}
sayThanks("Cole"); // Function Declarations

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);

  console.log(`Remember to buy ${item3}`);
}

function monitorCount(rows, columns) {
  return rows * columns;
}

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Arrow Functions      // Arrow Functions         // Arrow Functions

const plantNeedsWater = (day) => (day === "Wednesday" ? true : false); // option 1

const plantNeedsWater = (day) => {
  // option 2
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

const plantNeedsWater = function (day) {
  //initial variant
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
