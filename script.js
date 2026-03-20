let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    // 0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7
    // --> 0, 1, 2
    // Equal probability for each choice

    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors"
    }    
    else {
        console.log("Error. Start again.")
        return;
    }
}

function getHumanChoice() {
    let user_input;
    let flag = true;

    while (flag) {
        user_input = prompt("Enter your choice: ");

        // Validation
        // Ensure user input is case-insensitive for player ease
        if (user_input.toLowerCase() !== "rock" && user_input.toLowerCase() !== "paper" && user_input.toLowerCase() !== "scissors") {
            console.log(`Your input ("${user_input}") is wrong!`)
            console.log("Only choose between \"rock\", \"paper\", or \"scissors\"\n")
        }
        else {
            flag = false; // Loop ends when user_input is valid
        }
    }

    return user_input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    console.log(`Your choice: ${humanChoice}`)
    console.log(`Computer's choice: ${computerChoice}`)

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("You tied.")
        }
        else if (computerChoice === "paper") {
            console.log("You lost... Paper beats Rock.")
            computerScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You won! Rock beats Scissors.")
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! Paper beats Rock.")
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You tied.")
        }
        else if (computerChoice === "scissors") {
            console.log("You lost... Scissors beats Paper.")
            computerScore++;
        }       
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lost... Rock beats Scissors.")
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You won! Scissors beats Paper.")
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You tied.")
        }   
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);