let symbols = ['ROCK', 'PAPER', 'SCISSOR'];
let playerScore = 0;
let computerScore = 0;



function computerPlay() {
    let theRandomNumber = Math.floor(Math.random() * 3);
    return symbols[theRandomNumber].toUpperCase();
}
function playRound(playerSelection, computerSelection) {
    
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection;



    if (playerChoice == computerChoice) {
        return "MATCH DRAW!";
    }
    else if (playerChoice == 'ROCK') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'PAPER') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!'
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!';
            
        }
    }
    else if (playerChoice == 'SCISSOR') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'ROCK') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!'
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!';
            
        }
    }
    else if (playerChoice == 'PAPER') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'SCISSOR') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!'
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!'
        }
    }




}


console.log( playRound('paper', computerPlay()));
