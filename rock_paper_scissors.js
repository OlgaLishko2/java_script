const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! Choose rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You win with the secret cheat code!";
  }

  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer won!" : "You won!";
  }

  if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer won!" : "You won!";
  }

  if (userChoice === "scissors") {
    return computerChoice === "rock" ? "Computer won!" : "You won!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${userChoice}`);
  console.log(`The computer chose: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
