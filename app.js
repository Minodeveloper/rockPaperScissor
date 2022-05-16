let symbols = ['ROCK', 'PAPER','SCISSOR'];
// console.log(symbols[2]);
let theRandomNumber = Math.floor(Math.random() * 3) ;
let playerScore = 0;
let computerScore = 0;

// console.log(symbols[theRandomNumber]);

function playRound(playerSelection, computerSelection)
{
    

    if(playerSelection.toUpperCase() == computerSelection)
    {
        console.log("MATCH DRAW!");
    }
    
}


function computerPlay()
{
    return symbols[theRandomNumber].toUpperCase();
}

playRound('scissor', computerPlay());