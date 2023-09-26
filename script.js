function getComputerChoice(){
  let choice = Array('Rock', 'Scissors','Paper');
  return choice[Math.floor(Math.random() * 3)];
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
