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


const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id == 1){
            playerSelection = 1;
        }

        else if (button.id == 2){
            playerSelection = 2;
        }

        else{
            playerSelection = 3;
        }

        let computerSelection = getComputerChoice();
        const result = (playRound(playerSelection, computerSelection));

        if (result.includes("Point for you!")) {
            playerScore.textContent = playerPoints;
        } else if (result.includes("Point for computer!")) {
            computerScore.textContent = computerPoints;
        }

        console.log(result);
      });

});