let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice) {
  let computerChoice = computerPlay()
  let result = ""

  if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissors' && computerChoice == 'paper')) {
      playerScore += 1
    result = ('<Br>You win! ' + playerChoice + ' beats ' + computerChoice + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
    
    if (playerScore === 5) {
      result += ('<br><br>You won the game! Reload the page to play again')
      disableButtons();
      }
  } else if (playerChoice == computerChoice) {
    result += ('<br>I\'s a tie. You both chose ' + playerChoice + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
  } else {
    computerScore += 1
    result = ('<br>You lose ' + computerChoice + ' beats ' + playerChoice + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)

    if (computerScore === 5) {
      result += ('<br><br>You lose the game! Reload the page to play again')
      disableButtons()
    }
  }
  
  document.getElementById('result').innerHTML = result
  return
}

buttons.forEach(button =>{
  button.addEventListener('click', function(){
      playRound(button.value)
  })
})