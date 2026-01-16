//Set TimeOut

// console.log("This will print first");
// var a = "Zero";
// setTimeout(() => {
//   a = "one";
// }, 1000);
// console.log(a);

// ********************setTimeout(function, milliseconds)

// console.log(`1. ${new Date().getSeconds()}`);
// setTimeout(() => {
//   console.log(`2. ${new Date().getSeconds()}`);
// }, 10);

// console.log(`3. ${new Date().getSeconds()}`);
// console.log(`4. ${new Date().getSeconds()}`);
// console.log(`5. ${new Date().getSeconds()}`);
// setTimeout(() => {
//   console.log(`6. ${new Date().getSeconds()}`);
// }, 0);

// console.log(`7. ${new Date().getSeconds()}`);
// console.log(`8. ${new Date().getSeconds()}`);
// console.log(`9. ${new Date().getSeconds()}`);
// console.log(`10. ${new Date().getSeconds()}`);

//////////////////////
//******************************                nest timeOut. *****************

// console.log(`1. Wake up: ${new Date().getSeconds()}`);

// setTimeout(function shower() {
//   console.log(`2. Shower: ${new Date().getSeconds()}`);
// }, 3000);
// setTimeout(function cooks() {
//   console.log(`3. Husband cooks breakfast: ${new Date().getSeconds()}`);
//   setTimeout(function eat() {
//     console.log(`4. Eat breakfast: ${new Date().getSeconds()}`);

//     setTimeout(function dress() {
//       console.log(`5. Get dressed: ${new Date().getSeconds()}`);
//     }, 1000);
//   }, 2000);
// }, 5000);

//******************* */ back to morning routine

//PROMISE !!!!!!!!!!!!!! PROMISE *************. PROMISE

// function promise_shower() {
//   let shower = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(`2. Shower: ${new Date().getSeconds()}`);
//     }, 3000);
//   });
//   return shower;
// }
// function promise_husband_cooks() {
//   let cook = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(`3. Husband cooks breakfast: ${new Date().getSeconds()}`);
//     }, 5000);
//   });
//   return cook;
// }

// function promise_eat_breakfast() {
//   let eat = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(`4. Eat breakfast: ${new Date().getSeconds()}`);
//     }, 2000);
//   });
//   return eat;
// }
// function promise_get_dressed() {
//   let dress = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(`5. Get dressed: ${new Date().getSeconds()}`);
//     }, 2000);
//   });
//   return dress;
// }

// console.log(`1. Wake up: ${new Date().getSeconds()}`);

// //OPTION 1 how to work with PROMISE              .then .catch

// promise_shower()
//   .then(function (value) {
//     console.log(value);
//     return promise_shower();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise_husband_cooks()
//   .then(function (value) {
//     console.log(value);
//     return promise_eat_breakfast();
//   })
//   .then(function (value) {
//     console.log(value);
//     return promise_get_dressed();
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //********** //OPTION 2 how to work with PROMISE async / await

// //************************ */
// // ASYNC//. syntactic sugar for promise, - doesnt add new functionality - makes it easy to write and read
// //  async/await allow us to write asynchronous program similar to synchronous program

// async function shower() {
//   try {
//     const shower = await promise_shower();
//     console.log(shower);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function the_rest() {
//   try {
//     const cook = await promise_husband_cooks();
//     console.log(cook);
//     const eat = await promise_eat_breakfast();
//     console.log(eat);
//     const dress = await promise_get_dressed();
//     console.log(dress);
//   } catch (e) {
//     console.log(e);
//   }
// }
// shower();
// the_rest();

//////////////////////
// base promise syntax

// const myName = "Johnnn Snow";

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (myName === "John Snow") {
//       resolve("The King is in the north");
//     } else {
//       reject("Winter is coming");
//     }
//   }, 3000);
// });

// myPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (reason) {
//     console.log(reason);
//   });

//********************* */
//Task1: Transferring money:
// Verify account balance
// Deduct amount
// Confirm transfer
// Reject if balance is insufficient
// Resolve if transfer succeeds
// Log success or failure using .then() / .catch()

// const amount = 2200;
// const balance = 2000;

// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (balance >= amount) {
//       const newBalance = balance - amount;
//       resolve(`Transfer succeeds. New balance is ${newBalance}`);
//     } else {
//       reject("Balance is insufficient");
//     }
//   }, 3000);
// });

// myPromise1
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (reason) {
//     console.log(reason);
//   });

//********************** */
// Task2 You want to book movie tickets online. The steps take time:
// Check seat availability
// Reserve seat
// Confirm payment
// Create a Promise checkSeats(movie) that resolves if seats are available.
// Chain reserveSeat() and confirmPayment() to simulate booking.
// Use .catch() for errors like “Sold out” or “Payment failed.”

const seats = 10;
const tickets = 2;

//****************          OPTION1/////////////
// const checkSeatsPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (seats >= tickets) {
//       const newBalance = seats - tickets;
//       resolve(`${tickets} tickets are reserved.`);
//     } else {
//       reject("Sold out");
//     }
//   }, 3000);
// });

// checkSeatsPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (reason) {
//     console.log(reason);
//   });

//*********************              OPTION2////////////////

function book_ticket() {
  let book = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (seats >= tickets) {
        resolve(`${tickets} tickets are booked`);
      } else {
        reject("Sold out");
      }
    }, 2000);
  });
  return book;
}

async function showreserveSeat() {
  try {
    const book = await book_ticket();
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

showreserveSeat();

//********************** */
const cookBeanSouffle = require("./library.js");

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty();

//********************** */
