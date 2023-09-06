function getComputerChoice(){
    let arr = ["Rock","Paper","Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}let playerSelection;
const computerSelection = getComputerChoice();
let PlayerPoints = 0;
let ComputerPoints = 0; 
function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Type either Rock,Paper or Scissors","Rock");
    if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors"){
        PlayerPoints++;
        return "You Win! Rock beats Scissors";
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper"){
        ComputerPoints++;
        return "You Lose! Paper beats Rock";
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock"){
        return "Tied! No one gets a point";
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock"){
        PlayerPoints++;
        return "You Win! Paper beats Rock";
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"){
        ComputerPoints++;
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Paper"){
        return "Tied! No one gets a point";
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper"){
        PlayerPoints++;
        return "You Win! Scissors beats Paper";
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock"){
        ComputerPoints++;
        return "You Lose! Rock beats Scissors";
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Scissors"){
        return "Tied! No one gets a point";
    }
}
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
    }
    if(PlayerPoints > ComputerPoints){
        return `You won the GAME! You got ${PlayerPoints}/5 and Computer got ${ComputerPoints}/5`;
    } else if(PlayerPoints < ComputerPoints){
        return `You lose the GAME! Computer got ${ComputerPoints}/5 and You got ${PlayerPoints}/5`;
    }
}
console.log(game());

