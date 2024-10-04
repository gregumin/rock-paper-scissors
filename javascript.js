function playGame(){

function getComputerChoice () {
    let rng = Math.random();
    return rng < (1 / 3) ? "rock":
    rng < (2 / 3) ? "paper":
    "scissors";
    
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

function updateChoice() {
    preHumanChoice = getHumanChoice();
    humanChoice = preHumanChoice.toLowerCase();
    computerChoice = getComputerChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice == "rock" && computerChoice == "rock" ? alert("Tie! R=R") :
    humanChoice == "rock" && computerChoice == "paper" ? ++computerScore && alert("Lose! R<P") :
    humanChoice == "rock" && computerChoice == "scissors" ? ++humanScore && alert ("Win! R>S") :
    humanChoice == "paper" && computerChoice == "rock" ? ++humanScore && alert("Win! P>R") :
    humanChoice == "paper" && computerChoice == "paper" ? alert("Tie! P=P") :
    humanChoice == "paper" && computerChoice == "scissors" ? ++computerScore && alert ("Lose! P<S") :
    humanChoice == "scissors" && computerChoice == "rock" ? ++computerScore && alert("Lose! S<R") :
    humanChoice == "scissors" && computerChoice == "paper" ? ++humanScore && alert("Win! S>P ") :
    humanChoice == "scissors" && computerChoice == "scissors" ? alert ("Tie! S=S") :
    console.log("wtf happened to the code");
}

// below is the current core gameplay loop

let preHumanChoice = getHumanChoice();
let humanChoice = preHumanChoice.toLowerCase();
let computerChoice = getComputerChoice();

console.log(humanChoice)
console.log(computerChoice)

playRound(humanChoice, computerChoice)

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)

updateChoice();
console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)

updateChoice();
console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)

updateChoice();
console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)

updateChoice();
console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

console.log(`your score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`)

}

playGame()