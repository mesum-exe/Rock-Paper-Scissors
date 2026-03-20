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

}