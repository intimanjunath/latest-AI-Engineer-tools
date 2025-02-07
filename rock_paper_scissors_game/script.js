import { getComputerChoice, determineWinner } from './gameLogic.js';


let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetButton = document.getElementById('reset');


function game(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  
  switch (winner) {
    case 'user':
      userScore++;
      userScore_span.innerHTML = userScore;
      result_p.innerHTML = `You win! ${userChoice} beats ${computerChoice}.`;
      break;
    case 'computer':
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = `You lose! ${computerChoice} beats ${userChoice}.`;
      break;
    case 'draw':
      result_p.innerHTML = `It's a draw! Both chose ${userChoice}.`;
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click', () => game("scissors"));

  resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ''; 
  });
}


main();
