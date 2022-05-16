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
        return "MATCH DRAW!"+" "+ playerScore + " " + computerScore;
    }
    else if (playerChoice == 'ROCK') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'PAPER') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!' +" "+ playerScore + " " + computerScore
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!'+" "+ playerScore + " " + computerScore;
            
        }
    }
    else if (playerChoice == 'SCISSOR') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'ROCK') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!'+" "+ playerScore + " " + computerScore
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!'+" "+ playerScore + " " + computerScore;
            
        }
    }
    else if (playerChoice == 'PAPER') // && computerChoice == 'PAPER')
    {
        if (computerChoice == 'SCISSOR') {
            // console.log("COMPUTER WINS!");
            computerScore++;
            return 'COMPUTER WINS!'+" "+ playerScore + " " + computerScore
            
        } else {
            // console.log('PLAYER WINS!');
            playerScore++;
            return 'PLAYER WINS!'+" "+ playerScore + " " + computerScore
        }
    }




}

function game()
{
    let rounds = 5;
    while(rounds != 0)
    {
        rounds--;
        // playRound();
        console.log( playRound(prompt('ROCK PEPAH SCISSOR'), computerPlay()));
     }
    
}

// console.log( playRound('paper', computerPlay()));
game();
