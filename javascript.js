function getComputerChoice () {
    let rng = Math.random();
    return rng < (1 / 3) ? "rock":
    rng < (2 / 3) ? "paper":
    "scissors";
    
}



function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice == "rock" && computerChoice == "rock" ? alert("Tie!") :
    humanChoice == "rock" && computerChoice == "paper" ? ++computerScore && alert("Lose!") :
    humanChoice == "rock" && computerChoice == "scissors" ? ++humanScore && alert ("Win!") :
    humanChoice == "paper" && computerChoice == "rock" ? ++humanScore && alert("Win!") :
    humanChoice == "paper" && computerChoice == "paper" ? alert("Tie!") :
    humanChoice == "paper" && computerChoice == "scissors" ? ++computerScore && alert ("Lose!") :
    humanChoice == "scissors" && computerChoice == "rock" ? ++computerScore && alert("Lose!") :
    humanChoice == "scissors" && computerChoice == "paper" ? ++humanScore && alert("Win!") :
    humanChoice == "scissors" && computerChoice == "scissors" ? alert ("Tie!") :
    console.log("wtf happened to the code");
}

const preHumanChoice = getHumanChoice();
const humanChoice = preHumanChoice.toLowerCase();
const computerChoice = getComputerChoice();

console.log(humanChoice)
console.log(computerChoice)

playRound(humanChoice, computerChoice)

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)


