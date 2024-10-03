function getComputerChoice () {
    let rng = Math.random();
    return rng < (1 / 3) ? "rock":
    rng < (2 / 3) ? "paper":
    "scissors";
    
}

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice == "rock" && computerChoice == "rock" ? alert("Tie!") :
    humanChoice == "rock" && computerChoice == "paper" ? alert("Lose!") && ++computerScore :
    humanChoice == "rock" && computerChoice == "scissors" ? alert ("Win!") && ++humanScore :
    humanChoice == "paper" && computerChoice == "rock" ? alert("Win!") && ++humanScore :
    humanChoice == "paper" && computerChoice == "paper" ? alert("Tie!") :
    humanChoice == "paper" && computerChoice == "scissors" ? alert ("Lose!") && ++computerScore :
    humanChoice == "scissors" && computerChoice == "rock" ? alert("Tie!") && ++computerScore :
    humanChoice == "scissors" && computerChoice == "paper" ? alert("Lose!") && ++humanScore :
    humanChoice == "scissors" && computerChoice == "scissors" ? alert ("Win!") :
    console.log("wtf happened to the code");
}

const preHumanChoice = getHumanChoice();
const humanChoice = preHumanChoice.toLowerCase();
const computerChoice = getComputerChoice();

console.log(humanChoice)

playRound(humanChoice, computerChoice)

console.log(humanScore)
console.log(computerScore)


