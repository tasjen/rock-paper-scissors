function getComputerChoice(){
  let choice = Array('Rock', 'Scissors','Paper');
  return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){
  let choice = Array('Rock', 'Scissors','Paper');
  let out;
  do {
    out = prompt("Your choice?").toLowerCase();
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  while (choice.indexOf(out) == -1);
  return out;
}

function playRound(playerSelection, computerSelection){
  let choice = Array('Rock', 'Scissors','Paper', 'Rock');
  if (playerSelection === computerSelection){
    console.log(`Tie! ${playerSelection} vs ${computerSelection}`)
    return;
  }

  //if computerSelection is the next element of playerSelection in choice then player wins

  if (choice[choice.indexOf(playerSelection) + 1] === computerSelection){
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    return 1;
  }
  else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return 2;
  }
}

function game(){
  let player = 0;
  let computer = 0;

  for (let i = 0; i < 5; i++){
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === 1){
      player++;
    }
    else if (result === 2){
      computer++;
    }
    console.log("player:", player, "computer:", computer);
  }
}

game();

