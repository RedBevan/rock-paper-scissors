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

/* function playRound() {
  if (userChoice === computerChoice) {
    console.log("It's a draw!");
    return "It's a draw!";
  } else if ((userChoice === 'rock' && computerChoice === 'scissors')
            || (userChoice === 'paper' && computerChoice === 'rock')
            || (userChoice === 'scissors' && computerChoice === 'paper')) {
              console.log(`You win! ${userChoice} beats ${computerChoice}`)
              userScore += 1;
              return `You win! ${userChoice} beats ${computerChoice}`;
            } else {
              console.log(`You lose! ${computerChoice} beats ${userChoice}`);
              computerScore += 1;
              return `You lose! ${computerChoice} beats ${userChoice}`;
            }}; */

function userPlaysRock() {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  if (computerChoice == 'rock') {
    console.log('Draw');
    return "It's a draw!";
  } else if (computerChoice == 'paper') {
    console.log('You lose');
    return 'You lose! Paper beats rock.';
  } else { 
    console.log('You win');
    return 'You win! Rock beats scissors.'
  }
  }

function userPlaysPaper() {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  if (computerChoice == 'paper') {
    console.log('Draw');
    return "It's a draw!";
  } else if (computerChoice == 'scissors') {
    console.log('You lose! Scissors beat paper.');
    return 'You lose! Scissors beat paper.';
  } else {
    console.log('You win! Paper beats rock.');
    return 'You win! Paper beats rock.'
  }
  }

function userPlaysScissors() {
  const computerChoice = getComputerChoice();
  if (computerChoice == 'scissors') {
    return "It's a draw!";
  } else if (computerChoice == 'rock') {
    return 'You lose! Rock beats scissors.';
  } else {
    return 'You win! Scissors beat paper.'
  }
  }

let computerScore = 0;
let userScore = 0;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


rockBtn.addEventListener('click', userPlaysRock);
paperBtn.addEventListener('click', userPlaysPaper);
scissorsBtn.addEventListener('click', userPlaysScissors);




/* function playRound() { // This function plays single round of RPS 
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const userInput = prompt('Rock, paper or scissors?', ''); //Get user choice from a prompt
  const userChoice = userInput.toLowerCase(); //Convert user choice to lower case
  console.log(userChoice);
  if (userChoice === computerChoice) {
    console.log("It's a draw!");
    return "It's a draw!";
  } else if ((userChoice === 'rock' && computerChoice === 'scissors')
            || (userChoice === 'paper' && computerChoice === 'rock')
            || (userChoice === 'scissors' && computerChoice === 'paper')) {
              console.log(`You win! ${userChoice} beats ${computerChoice}`)
              userScore += 1;
              return `You win! ${userChoice} beats ${computerChoice}`;
            } else {
              console.log(`You lose! ${computerChoice} beats ${userChoice}`);
              computerScore += 1;
              return `You lose! ${computerChoice} beats ${userChoice}`;
            }}; */
    



/* function game() {
while (userScore < 5 && computerScore < 5) {
  playRound();
  console.log(`Computer score: ${computerScore}`);
  console.log(`User score: ${userScore}`);
  }
  if (userScore > computerScore) {
    console.log(`You win the game! You scored ${userScore} points
    and the computer scored ${computerScore}`);
  } else {
    console.log(`You lose the game. The computer scored
    ${computerScore} points and you scored ${userScore}`);
  }
  } */

// game();

  /* Write function that plays single round of Rock Paper Scissors.
  Function should take two parameters - the playerChoice and 
  computerChoice ... */


