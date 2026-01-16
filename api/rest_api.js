// Template
//1
// const endpoint = "https://jsonplaceholder.typicode.com/posts"
// const request = fetch(endpoint);
// console.log(request)

// request
// .then(response => response.json)
// .then(json=> console.log(json))
// .catch(e => console.log(e))

//******************              2 ***************
// async function get_data() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(response);
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// get_data();

//*****************              task - https://official-joke-api.appspot.com/random_joke, display the setup, punchline, type and the id in a card.
async function get_info() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_info();

//***************** */
// go through the available items
//post
//comments
// albums
// photos
// todos
//users

async function get_comments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_comments();

//****************************** */

async function get_albums() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_albums();

//****************************** */

async function get_photos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_photos();

//****************************** */

async function get_todos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_todos();

//****************************** */

async function get_users() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
get_users();

//****************** */
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const caritem = document.getElementById("card");
    carditem.innerHTML = `<p> id: ${data.id}</p>
        <p>punchline: ${data.punchline}</p>
        <p>setup: ${data.setup}</p>`;
  });
