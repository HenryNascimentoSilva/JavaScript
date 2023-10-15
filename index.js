function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

let playerPoints = 0, computerPoints = 0;

function playRound(playerSelection, computerSelection){
    
    switch (playerSelection){

        case 1:

            if (computerSelection == 1){
                return "Draw";
            }
            
            else if (computerSelection == 2){
                computerPoints++;
                return "Computer wins!";
            }
            
            else {
                playerPoints++;
                return "You won!";
            }

        case 2:

            if (computerSelection == 1){
                playerPoints++;
                return "You won!";  
            }

            else if (computerSelection == 2){
                return "Draw!";
            }

            else {
                computerPoints++;
                return "Computer wins!";
                
            }

        case 3:

            if (computerSelection == 3){
                computerPoints++;
                return "Computer wins!";
                
            }

            else if (computerSelection == 2){
                playerPoints++;
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
        computerSelection = getComputerChoice();
        playRounds = playRound(playerSelection, computerSelection);

        if (playerSelection > 0 && playerSelection < 4){
            console.log(playRounds);
        }
        
        else {
            console.error("number not in 1, 2 or 3");
            break;
        }
    }

    if (playerPoints > computerPoints) {
        console.log("You have won the computer!");;
    }

    else if (computerPoints > playerPoints) {
        console.log("The computer has won!");
    }

    else {
        console.log("Draw!");
    }
}

game();

