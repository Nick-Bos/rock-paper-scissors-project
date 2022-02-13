
const rock = 0;
const paper = 1;
const scissors = 2;
let playerScore = 0;
let computerScore = 0;
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
function  playRound(){
    let gameMessage;

    let computerSelection = computerPlay();

    let playerSelection = prompt("Please enter rock, paper or scissors").toLocaleLowerCase();

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

    console.log(gameMessage)
    

    
    
};

function winner(){
    if (computerScore <  playerScore){
        console.log("Congratulation! You won the Game")
    } else {
        console.log("You lost the game. Better luck next time!")
    }
}

function PlayAgain(){
    console.log("would you like to play again?")
}

//  game function
function game(){
    
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    winner()
    PlayAgain()

    

    
};

game()




