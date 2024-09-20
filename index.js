const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("playerDisplay");

function startGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() *3)];

    console.log(computerChoice);

}