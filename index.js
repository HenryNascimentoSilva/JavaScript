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
        let computerChoice = Math.floor(Math.random() *3) + 1;
        return getChoice(computerChoice);
}

function getPlayerChoice() {
    let choice = parseInt(prompt("Choose 1 for rock, 2 for paper and 3 for scissors."));
    if (choice >= 0 && choice <= 3){
        return getChoice(choice);
    }
    else{
        return console.error("Erro");
    }
}

function playRound(playerSelection, computerSelection){
    
}
