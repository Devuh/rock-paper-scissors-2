function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return null;
    }
}

function getHumanChoice(display = "Rock, Paper, Scissors?") {
    let choice = prompt(display).toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        choice = choice.charAt(0).toUpperCase() + choice.substring(1);
        return choice;
    } else {
        return getHumanChoice("I'm sorry, that wasn't a valid option, please try again.");
    }
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice === humanChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") 
        || (computerChoice === "Paper" && humanChoice === "Rock") 
        || (computerChoice === "Scissors" && humanChoice === "Paper")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            return "loss";
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "win";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; humanScore < 5 && computerScore < 5; i++) {
        let result = playRound(getComputerChoice(), getHumanChoice());
        switch(result) {
            case "loss":
                computerScore++;
                break;
            case "win":
                humanScore++;
                break;
        }
    }

    if(humanScore > computerScore) {
        console.log(`You won the game ${humanScore} to ${computerScore}, congrats!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game ${humanScore} to ${computerScore}, better luck next time!`);
    } else {
        console.log(`Game tied ${humanScore} to ${computerScore}. Try again?`);
    }
}

playGame();