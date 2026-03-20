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
        if (user_input !== "rock" && user_input !== "paper" && user_input !== "scissors") {
            console.log(`Your input ("${user_input}") is wrong!`)
            console.log("Only choose between \"rock\", \"paper\", or \"scissors\"\n")
        }
        else {
            flag = false; // Loop ends when user_input is valid
        }
    }

    return user_input;
}