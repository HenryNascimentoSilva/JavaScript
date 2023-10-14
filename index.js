function getChoice(choice){
    switch(choice){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function getComputerChoice() {
        const computerChoice = Math.floor(Math.random() *3) + 1;
        return getChoice(computerChoice);
}

function getPlayerChoice() {
    const choice = parseInt(prompt("Choose 1 for rock, 2 for paper and 3 for scissors."));
    if (choice >= 0 && choice <= 3){
        return getChoice(choice);
    }
    else{
        return console.error("Erro");
    }
}

function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    switch (playerSelection){
        case "rock":
            if (computerSelection == "rock"){
                const result = console.log("Draw!");
                break;
            }
            
            else if (computerSelection == "paper"){
                const result = console.log("Computer wins!");
                break;
            }
            
            else {
                const result = console.log ("You won!");
                break;
            }
        case "paper":
            if (computerSelection == "rock"){
                const result = console.log("You won!");
                break;
            }

            else if (computerSelection == "paper"){
                const result = console.log("Draw!");
                break;
            }

            else {
                const result = console.log("Computer wins!");
                break;
            }
        case "scissors":
            if (computerSelection == "rock"){
                const result = console.log("Computer wins!");
                break;
            }

            else if (computerSelection == "paper"){
                const result = console.log("You won!");
            }

            else {
                const result = console.log("Draw!");
                break;
            }
    }
}
playRound();
