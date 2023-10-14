function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function playRound(playerSelection, computerSelection){
    
    switch (playerSelection){

        case 1:

            if (computerSelection == 1){
                return "Draw";
            }
            
            else if (computerSelection == 2){
                return "Computer wins!";

            }
            
            else {
                return "You won!";
            }

        case 2:

            if (computerSelection == 1){
                return "You won!";
            }

            else if (computerSelection == 2){
                return "Draw!";
            }

            else {
                return "Computer wins!";
            }

        case 3:

            if (computerSelection == 3){
                return "Computer wins!";
            }

            else if (computerSelection == 2){
                return "You won!";
            }

            else {
                return "Draw!";

            }
    }
}



function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = parseInt(prompt("Rock, Paper, Scissors! \n Choose -1(Rock), 2-(Paper), 3-(Scissors)"));
        computerSelection = getComputerChoice()
        if (playerSelection > 0 && playerSelection < 4){
            console.log(playRound(playerSelection, computerSelection));
        }
        else {
            console.error("number not in 1, 2 or 3");
            break;
        }
    }
}

game();

