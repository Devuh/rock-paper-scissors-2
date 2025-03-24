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

const selection = document.querySelector(".buttons");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if(computerChoice === humanChoice) {
        result.textContent = "It's a tie!";
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") 
        || (computerChoice === "Paper" && humanChoice === "Rock") 
        || (computerChoice === "Scissors" && humanChoice === "Paper")) {
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
    } else {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    
    if(humanScore == 5) {
        score.textContent = `You won the game ${humanScore} - ${computerScore}!`;
        humanScore = computerScore = 0;
    } else if(computerScore == 5) { 
        score.textContent = `You lost the game ${humanScore} - ${computerScore}.`;
        humanScore = computerScore = 0;
    } else {
        score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    }
}

selection.addEventListener("click", (event) => {
    playRound(getComputerChoice(), event.target.textContent);
});

/*
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
*/