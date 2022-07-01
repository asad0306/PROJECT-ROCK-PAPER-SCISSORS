
function computerPlay () {
     if (rock) {
        console.log("Rock");
    } else if (paper) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function playRound(playerSelection, computerSelection) {
    return "You lost the game."
}
const playerSelection = "rock"
const computerSelection = computerPlay(); 
console.log(playRound(playerSelection, computerSelection));
