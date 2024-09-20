const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function startGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result = "";
    

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    } 
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ){
            result = "You win!";
        } 
        else {
            result = "Computer wins!"
        }

        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;

}