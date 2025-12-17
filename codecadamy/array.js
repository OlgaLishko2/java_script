let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";
console.log(groceryList);

//********************* */

const arr = [10, 20, 30, 40]; //new syntax
console.log(arr.at(-1));
console.log(arr.at(-2));

//************************ */

const arr = [10, 20, 30, 40]; // works as well
console.log(arr[arr.length - 1]);

//************************ */

const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];
console.log(objectives.length);

// //************************ */

const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("sleep", "clean"); //add the words to the end of the array.
console.log(chores);

// //************************ */

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop(); //removes the last element of an array.
console.log(chores);

// //************************ */

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift(); //remove the first item
console.log(groceryList);
groceryList.unshift("popcorn"); //add 'popcorn' to the beginning of the grocery list.
console.log(groceryList);

console.log(groceryList.slice(1, 4)); //(start, end)returns a partial copy of an array        DUBLICATE for arr

const pastaIndex = groceryList.indexOf("pasta"); //find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
console.log(pastaIndex);

// //************************ */

const concept = ["arrays", "can", "be", "mutated"];
function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);

// // //************************ */ nested array

numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1];
console.log(target);

//******************************** */
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
// console.log(secretMessage.length);

secretMessage.push("to", "Program");
// console.log(secretMessage);

secretMessage[7] = "right";
// console.log(secretMessage);

secretMessage.shift();
// console.log(secretMessage);

secretMessage.unshift("Programming");
// console.log(secretMessage);

secretMessage.splice(7, 5, "know,"); //(indexToStart, numberOfIndices, 'stringToAdd');                SPLICE. - add , remove, replace elements
console.log(secretMessage.join(" "));
