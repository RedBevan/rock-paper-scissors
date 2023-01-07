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

let computerScore = 0;
let userScore = 0;

function playRound() { /* This function plays single round of RPS */
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
            }};
    

alert('Get ready to play!');

function game() {
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
  }

/* function game() {
  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      playRound();
      console.log('User score: ' + userScore);
      console.log('Computer score: ' + computerScore);
    }
 }
 console.log(`Computer score: ${computerScore}`);
 console.log(`User score: ${userScore}`);
} */

game();

  /* Write function that plays single round of Rock Paper Scissors.
  Function should take two parameters - the playerChoice and 
  computerChoice ... */


