function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

let playerPoints = 0, computerPoints = 0;

function playRound(playerSelection, computerSelection){
    
    switch (playerSelection){

        case 1:

            if (computerSelection == 1){
                return "Draw, no points!";
            }
            
            else if (computerSelection == 2){
                computerPoints++;
                return "Point for computer!";
            }
            
            else {
                playerPoints++;
                return "Point for you!";
            }

        case 2:

            if (computerSelection == 1){
                playerPoints++;
                return "Point for you!";  
            }

            else if (computerSelection == 2){
                return "Draw, no points!";
            }

            else {
                computerPoints++;
                return "Point for computer!";
                
            }

        case 3:

            if (computerSelection == 3){
                computerPoints++;
                return "Point for computer!";
                
            }

            else if (computerSelection == 2){
                playerPoints++;
                return "Point for you!";
                
            }

            else {
                return "Draw, no points!";
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
