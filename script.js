  /* create function called getComputerChoice to return
  rock, paper, or scissors */

function getComputerChoice() { 
    let ranNum = (Math.random())*10;
    console.log(ranNum);
      if (ranNum <= 3.33) {
        return "rock";
      } else if (ranNum <= 6.66) {
        return "paper";       
      } else {
        return "scissors";        
      }
    console.log(computerChoice);
      
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

const userInput = prompt('Choose your weapon!', 'Rock'); //Get user choice from a prompt
const userChoice = userInput.toLowerCase(); //Convert user choice to lower case
console.log(userChoice);

function playRound() {
  if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
      } else if (computerChoice === "scissors") {
        return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
      }
      } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
          return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
        } else if (computerChoice === "scissors") {
          return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
        }
      } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
        } else if (computerChoice === "paper") {
      } return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
      }
      
}

console.log(playRound());

  /* Write function that plays single round of Rock Paper Scissors.
  Function should take two parameters - the playerChoice and 
  computerChoice ... */


