const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDispay = document.getElementById("playerScoreDisplay");
const computerScoreDispay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


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
            playerScore++;
        } 
        else {
            result = "Computer wins!"
            computerScore++;
        }



        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;

        playerScoreDispay.textContent = `Player score: ${playerScore}`;
        computerScoreDispay.textContent = `Computer score: ${computerScore}`;

}