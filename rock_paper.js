let gameChoices = ["rock", "paper", "scissors"];
let finalWinner = [];

function playGame() {
  /***** 
 play the game for five rounds
 *****/
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  gameWinner();
}

function playRound(round) {
  let playerSelection = playerChoice();
  //   console.log(playerSelection);
  let computerSelection = randomComputerChoice();
  //   console.log(computerSelection);
  let winner = decideWinner(playerSelection, computerSelection);
  //   console.log(winner);
  finalWinner.push(winner);
  gameRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  // get the choice input from the player
  let playerInput = prompt("Type: Rock, Paper or Scissor");
  while (playerInput == null) {
    playerInput = prompt("Type: Rock, Paper or Scissor");
  }

  playerInput = playerInput.toLowerCase();
  let valueCheck = validatePlayerInput(playerInput);
  while (valueCheck == false) {
    playerInput = prompt("wrong input please type: Rock, Paper or Scissor");
    while (playerInput == null) {
      playerInput = prompt("Type: Rock, Paper or Scissor");
    }
    playerInput = playerInput.toLocaleLowerCase();
    valueCheck = validatePlayerInput(playerInput);
  }
  return playerInput;
}

function randomComputerChoice() {
  // computer give random choice
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function validatePlayerInput(choice) {
  if (gameChoices.includes(choice)) {
    return true;
  }
  return false;
}

function decideWinner(choicep, choiceC) {
  if (choiceC === choicep) {
    return "Tie";
  } else if (
    (choicep === "scissors" && choiceC === "paper") ||
    (choicep === "paper" && choiceC === "rock") ||
    (choicep === "rock" && choiceC === "scissors")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function gameWinner() {
  let playerWin = finalWinner.filter((result) => result == "Player").length;
  let computerWin = finalWinner.filter((result) => result == "Computer").length;
  let ties = finalWinner.filter((result) => result == "Tie").length;
  console.log("Final Result:");
  console.log("Player Win: ", playerWin);
  console.log("Computer Win: ", computerWin);
  console.log("Ties: ", ties);
  console.log(".................................................");
  console.log(".................................................");
}

function gameRound(playerSelection, computerSelection, winner, round) {
  console.log("Rounds:", round);
  console.log("Player Chose:", playerSelection);
  console.log("Computer Chose:", computerSelection);
  if (winner == "Tie") {
    console.log(winner, "no one wins");
  } else {
    console.log(winner, "wins");
  }
  console.log(".................................................");
}
