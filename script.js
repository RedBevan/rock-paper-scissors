  /* create function called getComputerChoice to return
  rock, paper, or scissors */

function getComputerChoice() { 
    let ranNum = (Math.random())*10;
      if (ranNum <= 3.33) {
        return "rock";
      } else if (ranNum <= 6.66) {
        return "paper";       
      } else {
        return "scissors";        
      }
      
}




function playRound() { /* This function plays single round of RPS */
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const userInput = prompt('Rock, paper or scissors?', ''); //Get user choice from a prompt
  const userChoice = userInput.toLowerCase(); //Convert user choice to lower case
  console.log(userChoice);
  if (userChoice === computerChoice) {
    console.log("It's a draw!");
        return "It's a draw!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        console.log('You lose, ' + computerChoice + ' beats ' + userChoice + '!');
        return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
      } else if (computerChoice === "scissors") {
        console.log('You win, ' + userChoice + ' beats ' + computerChoice + '!');
        return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
      }
      } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
          console.log('You win, ' + userChoice + ' beats ' + computerChoice + '!');
          return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
        } else if (computerChoice === "scissors") {
          console.log('You lose, ' + computerChoice + ' beats ' + userChoice + '!');
          return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
        }
      } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          console.log('You lose, ' + computerChoice + ' beats ' + userChoice + '!');
          return 'You lose, ' + computerChoice + ' beats ' + userChoice + '!';
        } else if (computerChoice === "paper") {
          console.log('You win, ' + userChoice + ' beats ' + computerChoice + '!');
      } return 'You win, ' + userChoice + ' beats ' + computerChoice + '!';
      }
      
}

alert('Get ready to play!');

function game() {
  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      playRound();
    }
 }
}

game();

  /* Write function that plays single round of Rock Paper Scissors.
  Function should take two parameters - the playerChoice and 
  computerChoice ... */


