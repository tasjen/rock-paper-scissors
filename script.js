const choice = ['Rock', 'Paper', 'Scissors'];

const computerScoreDisplay = document.querySelector('#computer-score');
const message = document.querySelector('#message');
const playerScoreDisplay = document.querySelector('#player-score');

let playerScore = 0;
let computerScore = 0;

let isFirstRound = true;
let isEndRound = false;

const computerChoiceButtons = document.querySelectorAll('#computer-side button');
const playerChoiceButtons = document.querySelectorAll('#player-side button');
playerChoiceButtons.forEach((button) =>
  button.addEventListener('click', (event) => {
    if (!isEndRound && !isFirstRound) {
      const playerChoice = event.target.textContent;
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      button.classList.add('selected-choice');
    }
  })
);

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', () => {
  if (isFirstRound) {
    resetUI(); //when clicking play again
    playButton.textContent = 'Next Round';
    isFirstRound = false;
  } else if (isEndRound) {
    message.textContent = 'Select Your Choice';
    isEndRound = false;
  }
  playerChoiceButtons.forEach((button) => button.classList.remove('selected-choice'));
  computerChoiceButtons.forEach((button) =>
    button.classList.remove('selected-choice')
  );
  playButton.style.display = 'none'; //hide this button after clicking it
});

function getComputerChoice() {
  //randomly choose one from Rock, Scissors, and Paper
  const computerChoice = choice[Math.floor(Math.random() * 3)];
  for (let button of computerChoiceButtons) {
    if (button.textContent === computerChoice) {
      button.classList.add('selected-choice');
      break;
    }
  }
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    message.textContent = `Tie! ${playerChoice} vs ${computerChoice}`;
  }
  //if playerChoice is the next item of computerChoice in choice array then player wins
  else if (playerChoice === choice[(choice.indexOf(computerChoice) + 1) % 3]){
    message.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    playerScoreDisplay.textContent = ++playerScore;
  } else {
    message.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScoreDisplay.textContent = ++computerScore;
  }
  //shows playButton after the round ends
  isEndRound = true;
  playButton.style.display = 'inline';
  setTimeout(function () {
    if (checkWinner()) resetGame();
  }, 50);
}

function checkWinner() {
  if (playerScore === 5) {
    alert('Player wins the game!');
    return true;
  } else if (computerScore === 5) {
    alert('Computer wins the game!');
    return true;
  }
  return false;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  isFirstRound = true;
  isEndRound = false;
  playButton.textContent = 'Play Again!';
}

function resetUI() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  message.textContent = 'Select your choice';
}
