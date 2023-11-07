console.log ("Hello world"); //Checking that my script is working xD

//Computer will randomly choose between rock, paper, scissors
//First let's randomize between 3 numbers:
var result;
var winner;
var playerScore = 0;
var computerScore = 0;
var currentRound = 0;

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
}

function playRound(playerSelection, computerSelection) { //Comparing both choices to declare a winner

    if (
    (playerSelection == 'Rock' && computerSelection == 'Paper') || 
    (playerSelection == 'Paper' && computerSelection == 'Scissors') || 
    (playerSelection == 'Scissors' && computerSelection == 'Rock')
    ){ //Compares both choices
        winner = 'You Lose!';
        computerScore ++; 
    }
    else if ( 
    (playerSelection == 'Paper' && computerSelection == 'Rock') || 
    (playerSelection == 'Scissors' && computerSelection == 'Paper') || 
    (playerSelection == 'Rock' && computerSelection == 'Scissors')
    ) {
        winner = 'You Win!';
        playerScore++;
    }
    else {
        winner = "It's a Tie!";
    }
}

function displayResult (playerSelection) {
    getComputerChoice();
    playRound (playerSelection, result);

    document.getElementById('round-winner').textContent = winner;
    currentRound++;

    document.getElementById ('current-round').textContent = currentRound;

    if (currentRound === 5) {
        //Determines who wins after playing all the rounds
        if (playerScore > computerScore) {
            document.getElementById('final-winner').textContent = 'You are the Champion!';
        }else if (playerScore < computerScore) {
                document.getElementById('final-winner').textContent = 'Computer Wins!';
            } else {
                document.getElementById('final-winner').textContent = "It's a Tie!";
            }

            //player won't be able to continue playing after 5 rounds
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
    }
    


//Adding event listeners to buttons

document.getElementById('rock').addEventListener('click', function () {
    displayResult('Rock', result)
})

document.getElementById('paper').addEventListener('click', function () {
    displayResult('Paper', result)
})
document.getElementById('scissors').addEventListener('click', function () {
    displayResult('Scissors', result)
})

