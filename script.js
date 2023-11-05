console.log ("Hello world"); //Checking that my script is working xD

//Computer will randomly choose between rock, paper, scissors
//First let's randomize between 3 numbers:
var result;
function getComputerChoice() 
{
    const randomNum = Math.floor(Math.random() * 3); //random number between 0 & 2
    if (randomNum === 0) { //conditional formatting, depending on the result
            result = 'Rock';
        }
        else if (randomNum === 1) {
            result = 'Paper';
        }
        else {
            result = 'Scissors';
        }   
        return;    
       
}
getComputerChoice();

var winner;
function playRound(playerSelection, result) { //Comparing both choices to declare a winner

   
    if (
    (playerSelection == 'Rock' && computerSelection == 'Paper') || 
    (playerSelection == 'Paper' && computerSelection == 'Scissors') || 
    (playerSelection == 'Scissors' && computerSelection == 'Rock')
    ){ //Compares both choices
        winner = 'You Lose!';
    }
    else if ( 
    (playerSelection == 'Paper' && computerSelection == 'Rock') || 
    (playerSelection == 'Scissors' && computerSelection == 'Paper') || 
    (playerSelection == 'Rock' && computerSelection == 'Scissors')
    ) {
        winner = 'You Win!';
    }
    else {
        winner = "It's a Tie!";
    }
    return;
   
}
//Includes two parameters: playerSelection & computerSelection
const playerSelection = "Paper";
const computerSelection = result;

getComputerChoice();
playRound (playerSelection , computerSelection); //Initializing two functions
console.log (playerSelection,computerSelection);
console.log (winner);
