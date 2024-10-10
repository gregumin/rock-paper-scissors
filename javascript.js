

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
    //preHumanChoice = getHumanChoice();
    //humanChoice = preHumanChoice.toLowerCase();
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

    const yourChoice = document.querySelector("#yourChoice");
    const compChoice = document.querySelector("#compChoice");
    const yourScore = document.querySelector("#yourScore");
    const compScore = document.querySelector("#compScore");

    yourChoice.textContent = `you entered: ${humanChoice}`;
    compChoice.textContent = `the computer entered: ${computerChoice}`;
    yourScore.textContent = `your score is: ${humanScore}`;
    compScore.textContent = `the computer score is: ${computerScore}`;

    const winnerText = document.querySelector("#winnerText");

    updateChoice();

    if (computerScore === 5) {winnerText.textContent = `computer wins the whole game :(`};
    if (humanScore === 5) {winnerText.textContent = `you win the whole game! :)`}
}

// below is the current core gameplay loop

let computerChoice = getComputerChoice();

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.onclick = () => playRound("rock",computerChoice);
btnPaper.onclick = () => playRound("paper",computerChoice);
btnScissors.onclick = () => playRound("scissors",computerChoice);


}

playGame()