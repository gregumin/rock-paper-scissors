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
    humanChoice == "rock" && computerChoice == "rock" ? alert("Tie! Both R") :
    humanChoice == "rock" && computerChoice == "paper" ? ++computerScore && alert("Lose! R loses to P") :
    humanChoice == "rock" && computerChoice == "scissors" ? ++humanScore && alert ("Win! R beats S") :
    humanChoice == "paper" && computerChoice == "rock" ? ++humanScore && alert("Win! P beats R") :
    humanChoice == "paper" && computerChoice == "paper" ? alert("Tie! Both P") :
    humanChoice == "paper" && computerChoice == "scissors" ? ++computerScore && alert ("Lose! P loses to S") :
    humanChoice == "scissors" && computerChoice == "rock" ? ++computerScore && alert("Lose! S loses to R") :
    humanChoice == "scissors" && computerChoice == "paper" ? ++humanScore && alert("Win! S beats P ") :
    humanChoice == "scissors" && computerChoice == "scissors" ? alert ("Tie! Both S") :
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