function myFunction2() {
  console.log(2);
  // throw Error ("i have throw an error in funct 2");
  console.log(3);
}

function myFunction1() {
  console.log(1);
  try {
    myFunction2();
  } catch (e) {
    console.log(e);
  }
  console.log(4);
}
console.log(0);
myFunction1();
