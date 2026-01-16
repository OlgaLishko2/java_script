// const xhr = new XMLHttpRequest();
// const url = "https://ipinfo.io/json";

// const { notStrictEqual } = require("node:assert");

// xhr.responseType = "json";
// xhr.onload = () => {
//   console.log(xhr.response);
// };

// xhr.open("GET", url);
// xhr.send();

//create a button on the html, have a click event
// on that button and once the user clicks on the button
// then log the information to the console.

//*********************** */// Fetch -

// function get_Data2() {
//   fetch("https://ipinfo.io/json")
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response.json();
//         }
//       },
//       (networkError) => console.log(networkError.message),
//     )
//     .then((jsonResponse) => {
//       console.log(jsonResponse);
//     });
// }
// get_Data2();

//*********************** */

// async function getData3() {
//   try {
//     const response = await fetch("https://ipinfo.io/json");
//     console.log(response);
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData3();

//*********************** */. POST

async function post_data() {
  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({ name: "Femi", age: 4 }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
post_data();
