const CHOICE = Array('Rock', 'Scissors','Paper');

function getComputerChoice(){
  //randomly choose one from Rock, Scissors, and Paper
  return CHOICE[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){
  //get input from user as a string, convert it to lowercase
  //, then capitalize its first character
  let out = prompt("Your choice?").toLowerCase();
  out = out.charAt(0).toUpperCase() + out.slice(1);

  
  while (CHOICE.indexOf(out) === -1){
    alert("Invalid choice");
    out = prompt("Your choice?").toLowerCase();
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

function playRound(playerSelection, computerSelection){
  let choice = Array('Rock', 'Scissors','Paper', 'Rock');
  if (playerSelection === computerSelection){
    console.log(`Tie! ${playerSelection} vs ${computerSelection}`)
    return 'tie';
  }

  //if computerSelection is the next element of playerSelection in choice then player wins

  if (choice[choice.indexOf(playerSelection) + 1] === computerSelection){
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    return 'playerWins';
  }
  else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return 'computerWins';
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5){
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === 'tie'){
      continue;
    }
    if (result === 'playerWins'){
      playerScore++;
    }
    else if (result === 'computerWins'){
      computerScore++;
    }
    console.log("player:", playerScore, "computer:", computerScore);
  }
}

game();

