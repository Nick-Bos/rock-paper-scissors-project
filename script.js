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
    console.log("Rock")
} else if ( value === 1){
    console.log("Paper")
} else console.log("Scissors")
};


//play round function
function  playRound(playerSelection, computerSelection){
    
    let gameMessage;
    if (playerSelection == computerSelection){
        gameMessage = "Draw";

    } else if (playerSelection == "rock" && computerSelection == 1){
        gameMessage = "Paper beats Rock, you lose!";

    }else if (playerSelection == "scissors" && computerSelection == 1){
        gameMessage = "Scissors beats Paper, you win!";

    }else if (playerSelection == "paper" && computerSelection == 0){
        gameMessage = "Paper beats Rock, you win!";

    }else if (playerSelection == "scissors" && computerSelection == 0){

    }else if (playerSelection  == "rock" && computerSelection == 2){
        gameMessage = "Rock beats Scissors, you win!";

    }else if (playerSelection == "paper" && computerSelection == 2){
        gameMessage = "Scissors beats Paper, you lose";
    } 

    return gameMessage;

};


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
