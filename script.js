const CHOICE = ['Rock', 'Scissors','Paper'];

const playerChoice = document.querySelectorAll('#player-side button');
const playButton = document.querySelector('#play-button');

const computerScoreDisplay = document.querySelector('#computer-score');
const message = document.querySelector('#message');
const playerScoreDisplay = document.querySelector('#player-score');

let playerScore = 0;
let computerScore = 0;

let isFirstRound = true;
let isEndRound = false;


playerChoice.forEach((button) =>
  button.addEventListener('click', (event) => {
    if (!isEndRound && !isFirstRound) playRound(event.target.textContent);
  })
);

playButton.addEventListener('click', () => {
  
  if (isFirstRound) {
    resetUI(); //when clicking play again
    playButton.textContent = 'Next Round';
    isFirstRound = false;
  }
  else if (isEndRound) {
    message.textContent = 'Select Your Choice';
    isEndRound = false;
  }

  playButton.style.display = 'none'; //hide the button after clicking it

})

function getComputerChoice(){
  //randomly choose one from Rock, Scissors, and Paper
  return CHOICE[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice){
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice){
    message.textContent = `Tie! ${playerChoice} vs ${computerChoice}`;
  }

  //if computerSelection is the next element of playerSelection in choice then player wins
  else if (CHOICE[(CHOICE.indexOf(playerChoice) + 1) % 3] === computerChoice){
    message.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    playerScoreDisplay.textContent = ++playerScore;
  }

  else {
    message.textContent =`You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScoreDisplay.textContent = ++computerScore;
  }

  //shows playButton after the round ends
  isEndRound = true;
  playButton.style.display = 'inline';
  
  if(checkWinner()) resetGame();
}

function checkWinner(){
  if (playerScore === 5){
    alert('Player wins the game!');
    return true;
  }
  else if (computerScore === 5){
    alert('Computer wins the game!');
    return true;
  }
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  isFirstRound = true;
  isEndRound = false;
  playButton.textContent = 'Play Again!';
}

function resetUI(){
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  message.textContent = 'Select your choice';
}
