// Access Method
// 1. select the element - class, id, tag, querySelector
//2. use the method - getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(),querySelectorAll()

// by id
// let firstarticle = document.getElementById("articleone");
// console.log(firstarticle);

// //by class
// let witdetails = document.getElementsByClassName("witdetails");
// console.log(witdetails);

// //by ctag
// let wittag = document.getElementsByTagName("article");
// console.log(wittag);

// //querySelector selects with any selector(class, id, tag), return the first element that matches the selector
// let secondarticle = document.querySelector(".witdetails");
// console.log(secondarticle);

// //querySelectorAll - return nodelist of all the elements that matches the selector
// let thirdarticle = document.querySelectorAll(".witdetails");
// console.log(thirdarticle);

// //DOM Manipulations - create, update, selete, read element
// //update for id
// firstarticle.innerHTML = `<p>I have change this from the dom</p><div>This is from DOM.js</div>`;

// for (let i of wittag) {
//   i.innerHTML = `I changed this from dom.js`;
// }

//********************* */
//Events - something happens. click, hover, submit
//Event Listener - functions that happens for a particular event

//syntax
//elementfromDOM.addEventListener("event-type", callbackfunction)
//elementfromDOM.addEventListener("event-type", ()=>{
//execution statement})

let firstaside = document.getElementById("firstaside");
let firstbutton = document.getElementById("firstbutton");
// console.log(firstaside, firstbutton);

firstbutton.addEventListener("click", () => {
  firstaside.innerHTML = `This changes after the click event`;
});

// ticket task
let fullname = document.getElementById("fullname");
let emailAddress = document.getElementById("email");
let preferedsection = document.getElementById("preferedsection");
let address = document.getElementById("address");
let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", (event) => {
  event.preventDefault();
  let fullname = document.getElementById("fullname").value;
  let emailvalue = emailAddress.value;
  let sectionvalue = preferedsection.value;
  let addressvalue = address.value;

  console.log(fullname, emailvalue, sectionvalue, addressvalue);
});
