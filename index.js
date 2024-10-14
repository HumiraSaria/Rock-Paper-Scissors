const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(userSelection, computerSelection){
    if(userSelection === computerSelection){
        return "It is a tie!"
    }
    else if((userSelection === "rock" && computerSelection === "scissors") ||
            (userSelection === "paper" && computerSelection === "rock") ||
            (userSelection === "scissors" && computerSelection === "paper")){
                userScore++;
                userScoreEl.textContent = userScore;
                return "You Win! " + userSelection + " beats " + computerSelection;
            }
    else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + userSelection;
    } 
}