let playerScore = 0;
let computerScore = 0;
//random integer function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//buttons
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const ScissorsBtn = document.querySelector(".scissors");

//button assignment
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection);
  domScore();
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection);

  domScore();
});

ScissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection);
  domScore();
});

//computer play function
function computerPlay() {
  let value = getRandomInt(0, 2);

  if (value === 0) {
    return "rock";
  } else if (value === 1) {
    return "paper";
  } else return "scissors";
}
//dom gamemessage
const gameMsg = document.querySelector(".gameMessage");
const gameMsgPara = document.createElement("p");

//play round function
function playRound(playerSelection) {
  let gameMessage;
  let computerSelection = computerPlay();

  //scoring statment
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
  }

  //game message statment
  if (playerSelection == computerSelection) {
    gameMessage = "Draw";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    gameMessage = "Paper beats Rock, you lose!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    gameMessage = "Scissors beats Paper, you win!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    gameMessage = "Paper beats Rock, you win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    gameMessage = "Rock beats scissors, you lose!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    gameMessage = "Rock beats Scissors, you win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    gameMessage = "Scissors beats Paper, you lose!";
  } else return "error";

  gameMsgPara.textContent = gameMessage;
  gameMsg.appendChild(gameMsgPara);
  gameEnd();
}

//dom computer score
const computerResults = document.querySelector(".computerResults");
const computerPara = document.createElement("p");

//dom player score
const playerResults = document.querySelector(".playerResults");
const playerPara = document.createElement("p");

//dom winner
const winnerMessage = document.querySelector(".winner");
const winnerH3 = document.createElement("h4");
//dom play again

function domScore() {
  //player score
  playerPara.textContent = playerScore;
  playerResults.appendChild(playerPara);

  //computer score
  computerPara.textContent = computerScore;
  computerResults.appendChild(computerPara);
}
function winner() {
  if (computerScore < playerScore) {
    winnerH3.textContent = "PLAYER WINS!";
    winnerMessage.appendChild(winnerH3);
  } else {
    winnerH3.textContent = "COMPUTER WINS!";
    winnerMessage.appendChild(winnerH3);
  }
}
function resetGame() {
  document.location.reload();
}

function playAgain() {
  let playAgain = confirm("Play again?");
  if (playAgain) {
    resetGame();
  } else;
}

function gameEnd() {
  if (playerScore == 5 || computerScore == 5) {
    winner();
    setTimeout(playAgain, 3000);
  }
}
