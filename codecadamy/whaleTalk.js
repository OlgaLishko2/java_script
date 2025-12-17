let input = "Input your best phrase";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
// Double 'e' and 'u' as per Whale Talk rules
for (let k = 0; k < resultArray.length; k++) {
  if (resultArray[k] === "e" || resultArray[k] === "u") {
    resultArray[k] = resultArray[k] + resultArray[k];
  }
}

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
