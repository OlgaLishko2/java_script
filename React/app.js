import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
  );
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <img
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
    onClick={makeDoggy}
  />
);

root.render(kitty);

//************************** */

//'kitty' if coinToss() is 'heads' and 'doggy' if coinToss() is 'tails'.
const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

//************************** */

//will only appear if !judgmental.
{
  !judgmental && <li>Nacho Cheez Straight Out The Jar</li>;
}

//************************** */
//adding an <li> element
const person = strings.map((string) => <li>{person}</li>);

//************.  KEY. ************** */
//how to add key
const person1 = strings.map((string) => <li key={"person_" + i}>{person}</li>);

//***************.    create elements.  *********** */
//   The following JSX expression:
// const h1 = <h1>Hello world</h1>;

// can be rewritten without JSX like this:
// const h1 = React.createElement(
//   "h1",    // тип элемента (тег)
//   null,    // props / атрибуты (например className, id), здесь нет → null
//   "Hello, world" // содержимое элемента (children)
// );

// const background = (
//   <img
//     className="background"
//     alt="ocean"
//     src="/images/ocean.jpg"
//   />
// );

//************      Animal Fun Facts.   ************** */
// 1. Импорт animals
import { animals } from "./animals";

// 1. Импорт React и createRoot
import React from "react";
import { createRoot } from "react-dom/client";

// 2. Получаем контейнер
const container = document.getElementById("app");

// 3. Создаём root
const root = createRoot(container);

// 4. Заголовок
let title = "";

// extra credit (14)
const showBackground = true;

// 7. Фон
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

// 9. Массив изображений
const images = [];

// 11. Функция для показа факта
function displayFact(e) {
  const animal = e.target.alt;
  const facts = animals[animal].facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];

  const p = document.getElementById("fact");
  p.innerHTML = fact;
}

// 9 + 13. Цикл for...in
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
      onHover={handleHover}
    />,
  );
}





// 5. Заголовок с ternary
const displayTitle = title === "" ? "Click an animal for a fun fact" : title;

// 8, 10, 12. JSX
const animalFacts = (
  <div>
    <h1>{displayTitle}</h1>

    {showBackground && background}

    <div className="animals">{images}</div>

    <p id="fact"></p>
  </div>
);

// 6. Рендер
root.render(animalFacts);
    


//*************.  */
function MyQuote() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
};

export default MyQuote;



//************************
// */
import React, { useState } from 'react';

function Contact() {
  // 1. Стейт для авторизации
  const [authorized, setAuthorized] = useState(false);

  // 2. Функция для проверки пароля
  function handleSubmit(e) {
    e.preventDefault(); // не перезагружать страницу
    const password = e.target.password.value;
    if (password === 'swordfish') {
      setAuthorized(true);
    }
  }

  // 4. JSX для логина
  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );

  // 6. JSX для контактной информации
  const contactInfo = (
    <ul>
      <li>John Doe</li>
      <li>john@example.com</li>
      <li>555-555-5555</li>
    </ul>
  );

  // 2. Заголовок с условием
  const headerText = authorized ? 'Contact' : 'Enter the Password';

  return (
    <div>
      <h1>{headerText}</h1>
      {/* 7. Показываем контакт или форму в зависимости от authorized */}
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;



//*****************return a <NavBar /> component and  import the necessary component! ** */
import NavBar from './NavBar';
      <NavBar />