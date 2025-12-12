for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

//********************************* */

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//******************* */

let bobsFollowers = ["Tom", "Bill", "Donald", "Monica"];
let tinasFollowers = ["Bill", "Kelly", "Monica"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

//************** */
let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];

  console.log(currentCard);
}

//************ */
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cup was added");
} while (cupsAdded < cupsOfSugarNeeded);
