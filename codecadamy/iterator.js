const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];
artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squareNumbers);
const things = ["desk", "chair", 5, "backpack", 3.14, 100];
const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});
console.log(onlyNumbers);

// map → «измени каждый»
// filter → «оставь только подходящие»
// forEach → «просто сделай что-то»

//*********************************** */это метод массивов в JavaScript, который позволяет
//  проходить по каждому элементу массива и выполнять функцию для каждого элемента.

const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}.`));

//*********************************** */это метод массива, который создаёт
// новый массив, применяя функцию к каждому элементу исходного массива.

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((animal) => animal[0]);
console.log(secretMessage.join(""));
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((num) => num / 100);
console.log(smallNumbers);

//*********************************** */.filter() — это метод массива, который:отбирает элементы по условию,
// возвращает НОВЫЙ массив,исходный массив не изменяет

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter((num) => num < 250);
console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter((a) => a.length > 7);

//*********************************** */
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s" ? true : false;
});

//*********************************** */.reduce() сводит (reduce) массив к одному значению.
//accumulator (acc) — «накопитель», результат предыдущего шага
//currentValue — текущий элемент массива
//initialValue — начальное значение acc (очень важно!)
// array.reduce((accumulator, currentValue, index, array) => {
//     return новоеЗначениеАккумулятора;
// }, initialValue);

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

//*********************************** */

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
// OR nums.some(num => num < 0);

//*********************************** */

let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let count = 0;
storyWords.forEach((word) => {
  count++;
});
console.log("Word count:", count);

storyWords = storyWords.filter((word) => word !== unnecessaryWord);

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

const badWordIndex = storyWords.findIndex((word) => word === badWord);
console.log("Index of bad word:", badWordIndex);

if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";
}

const lengthCheck = storyWords.every((word) => word.length <= 10);
console.log("All words ≤ 10 chars:", lengthCheck);

storyWords = storyWords.map((word) => {
  if (word.length > 10) {
    return "stunning";
  }
  return word;
});

console.log("Final story:", storyWords.join(" "));
