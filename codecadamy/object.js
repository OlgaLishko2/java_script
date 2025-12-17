let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
let capFave = spaceship.crew.captain["favorite foods"][0];

spaceship.passengers = [{ name: "John Doe", age: 34 }];

let firstPassenger = spaceship.passengers[0];

console.log(capFave); // 'cookies'
console.log(spaceship.passengers); // [{ name: 'John Doe', age: 34 }]
console.log(firstPassenger); // { name: 'John Doe', age: 34 }

//***************************** */

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};
function greenEnergy(obj) {
  obj["Fuel Type"] = "avocado oil";
}
function remotelyDisable(obj) {
  obj.disabled = true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

//***************************** */

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

//************** */

const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);

const robotEntries = Object.entries(robot);
console.log(robotEntries);

const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot,
);

console.log(newRobot);

//****************************** */

const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Spaghetti";
menu.price = 5;

console.log(menu.todaysSpecial);

//********************** */

const team = {
  _players: [
    { firstName: "Michael", lastName: "Jordan", age: 35 },
    { firstName: "LeBron", lastName: "James", age: 36 },
    { firstName: "Kobe", lastName: "Bryant", age: 41 },
  ],
  _games: [
    { opponent: "Lakers", teamPoints: 98, opponentPoints: 95 },
    { opponent: "Celtics", teamPoints: 102, opponentPoints: 100 },
    { opponent: "Bulls", teamPoints: 110, opponentPoints: 108 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

// Добавляем нового игрока
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

// Добавляем новую игру
team.addGame("Titans", 100, 98);
console.log(team._games);
