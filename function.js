// //traditional / standart function
// function functName (arg1, ag2){
//     return
// }
// functName ()

// //function expression
// const functName2 = function(arg1){
//     return
// }
// functName2 ()

// //arrowfunction
// const functName3 = () => {
//     return
// }
// functName3 ()

// // hoisting
// console.log(favCountry)
// favCountry  = "Canada"

const alumni = ["Alice", "Bob", "Diana", "Olga", "Bob"];
const students = ["Mark", "Diana", "Olga", "Sara", "John"];

function getUniqueNames(alumni, students) {
  const combined = alumni.concat(students);
  const unique = [];

  for (let name of combined) {
    if (!unique.includes(name)) {
      unique.push(name);
    }
  }
  return unique;
}
console.log(getUniqueNames(alumni, students));
