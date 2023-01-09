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
  console.log(`Computer plays: ${computerChoice}`);
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
  console.log(`Computer plays: ${computerChoice}`);
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



function userPlaysRock() {
  playRound('rock');
  gameEnd();
};

function userPlaysPaper() {
  playRound('paper');
  gameEnd();
}

function userPlaysScissors() {
  playRound('scissors');
  gameEnd();
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  userPlays.textContent = `You choose: ${userChoice}.`;
  computerPlays.textContent = `Computer chooses: ${computerChoice}`;
  if (computerChoice == userChoice) {
    winnerIs.textContent = "It's a draw!";
    return "It's a draw!";
  } else if (
      (userChoice == 'rock' && computerChoice == 'scissors') 
      || (userChoice == 'paper' && computerChoice == 'rock')
      || (userChoice == 'scissors' && computerChoice == 'paper')
    ) {
      winnerIs.textContent = `You win, ${userChoice} beats ${computerChoice}.`;
      userScore += 1;
      userScorePara.textContent = `Your score: ${userScore}`;
      return `You win, ${userChoice} beats ${computerChoice}.`
    } else {
      winnerIs.textContent = `You lose, ${computerChoice} beats ${userChoice}.`;
      computerScore += 1;
      computerScorePara.textContent = `Computer score: ${computerScore}`;
      return `You lose, ${computerChoice} beats ${userChoice}.`;
    };
    };

function gameEnd() {
  if (userScore === 5) {
    roundWinner.textContent = 'You won the game! Good job.'
  } else if (computerScore === 5) {
    roundWinner.textContent = 'You lost! Better luck next time.';
  }
}

let computerScore = 0;
let userScore = 0;

const userPlays = document.querySelector('#userPlays')

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


rockBtn.addEventListener('click', userPlaysRock);
paperBtn.addEventListener('click', userPlaysPaper);
scissorsBtn.addEventListener('click', userPlaysScissors);




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


