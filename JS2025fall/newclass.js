class Mammal {
  constructor(name, habitat, country, color) {
    this._name = name;
    this._habitat = habitat;
    this.country = country;
    this.color = color;
  }
  get nameofDog() {
    return this._name;
  }

  set nameofDog(newName) {
    return (this._name = newName);
  }

  greet() {
    return `Hi, my name is ${this._name}`;
  }
  static info() {
    return "This is the Mammal class.";
  }
}
// let dog = new Mammal({ habitat: "Watter", color: "green" });

// console.log(dog.nameofDog); //runs getter
// dog.nameofDog = "Dog 2"; //runs the setter
// console.log(dog.country);

class Human extends Mammal {
  constructor(name, habitat, country, color, job) {
    super(name, habitat, country, color);
    this.job = job;
  }
  get nameofHuman() {
    return this._name;
  }

  greet() {
    return `Hi, my name is ${this._name}`;
  }
  static info() {
    return "This is the Human class, subclass of Mammal.";
  }
}
const cat = new Mammal("Cat", "Land", "Canada", "Brown");

const human = new Human("Ola", "Land", "Canada", "QA");

document.body.innerHTML = `  
    <p>${cat.greet()}</p>
    <p>${Mammal.info()}</p>
    <hr>
    <p>${Human.info()}</p>
    <p>${human.greet()}</p>
`;

console.log(typeof Human);
