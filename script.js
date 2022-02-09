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
        gameMessage = "Rock beats scissors, you lose!";

    }else if (playerSelection  == "rock" && computerSelection == "scissors"){
        gameMessage = "Rock beats Scissors, you win!";

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        gameMessage = "Scissors beats Paper, you lose!";
    }else  return "error"
    
    return gameMessage;
    
};




const playerSelection = window.prompt().toLocaleLowerCase()
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection)

let playerScore = 0;
let computerScore = 0;


//write game()function that plays 5 rounds
//write if statement for score counter
// score must increment and save score each round 
//consol.log winner after 5 rounds

//  game function
function game(){
    
    console.log(playRound(playerSelection, computerSelection))

    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++;
    

    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++;

    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore ++;

    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++;
    }else if (playerSelection  == "rock" && computerSelection == "scissors"){
        playerScore ++;

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++ ; 
    }
    console.log(playerScore)
    console.log(computerScore)
};

// trouble? find out how to run 1 game at a time in console!





game()

