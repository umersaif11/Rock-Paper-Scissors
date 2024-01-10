//Function to get randomly rock paper or scissors
function getComputerChoice(){
    let arr = ["Rock","Paper","Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}
let playerSelection;
let PlayerPoints = 0; 
let ComputerPoints = 0;
//function to play one round of game 
function playRound(playerSelection,getComputerChoice){
    let computerSelection = getComputerChoice();
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

//Use Query-selectors to select buttons and name them
let rock = document.querySelector('#rock');
 rock.textContent = 'Rock!';
 document.body.appendChild(rock);

let paper = document.querySelector('#paper');
 paper.textContent = 'Paper!';
 document.body.appendChild(paper);

let scissors = document.querySelector('#scissors');
 scissors.textContent = 'Scissors!';
 document.body.appendChild(scissors);

//div to show results 
let div2 = document.querySelector('#div2');

//Event listeners for buttons
 rock.addEventListener('click',() => {
    div2.textContent += `${playRound('ROCK', getComputerChoice)} 
    Note: Computer-points=${ComputerPoints} and Players-points=${PlayerPoints}
    
    `;
    if(PlayerPoints === 5){
        div2.textContent += `YOU WIN!!! CONGRATULATIONS.
        `;
    } else if(ComputerPoints === 5){
        div2.textContent += `YOU LOSE!!! TRY AGAIN.
        `;
    }
});
 paper.addEventListener('click',() => {
    div2.textContent += `${playRound('PAPER', getComputerChoice)} 
    Note: Computer-points=${ComputerPoints} and Players-points=${PlayerPoints}
    
    `;
    if(PlayerPoints === 5){
        div2.textContent += `YOU WIN!!! CONGRATULATIONS.
        `;
    } else if(ComputerPoints === 5){
        div2.textContent += `YOU LOSE!!! TRY AGAIN.
        `;
    }
});
 scissors.addEventListener('click',() => {
    div2.textContent += `${playRound('SCISSORS', getComputerChoice)} 
    Note: Computer-points=${ComputerPoints} and Players-points=${PlayerPoints}
    
    `;
    if(PlayerPoints === 5){
        div2.textContent += `YOU WIN!!! CONGRATULATIONS.

        `;
    } else if(ComputerPoints === 5){
        div2.textContent += `YOU LOSE!!! TRY AGAIN.
        
        `;
    }
});
