function getComputerChoice(){
    let arr = ["Rock","Paper","Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}
let PlayerPoints = 0;
let ComputerPoints = 0; 
function playRound(playerSelection,computerSelection){
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
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));