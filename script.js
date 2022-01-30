const rock = 0;
const paper = 1;
const scissors = 2;
//random integer function
function getRandomInt(min, max){
   return Math.floor(Math.random()*(max-min+1)+min); 
};
//computer play function
function computerPlay(){
    let value = getRandomInt(0, 2);
      
if (value === 0){
    return "rock"
} else if ( value === 1){
    return "paper"
} else return "scissors"
};


//play round function
function  playRound(playerSelection, computerSelection){
    let gameMessage;
    if (playerSelection == computerSelection){
        gameMessage = "Draw";
    
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        gameMessage = "Paper beats Rock, you lose!";

    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        gameMessage = "Scissors beats Paper, you win!";

    }else if (playerSelection == "paper" && computerSelection == "rock"){
        gameMessage = "Paper beats Rock, you win!";

    }else if (playerSelection == "scissors" && computerSelection == "rock"){

    }else if (playerSelection  == "rock" && computerSelection == "scissors"){
        gameMessage = "Rock beats Scissors, you win!";

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        gameMessage = "Scissors beats Paper, you lose";
    }else  return "error"
    
    return gameMessage;
    
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//  game function
function game()