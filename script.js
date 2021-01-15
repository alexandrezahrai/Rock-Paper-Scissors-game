// declares that default score of both players is set to zero at begining of each game
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

// this function randomly returns either rock, paper, or scissors
function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

// disables all buttons when game is over  
function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

// main function for game
function playRound(playerSelection) {
  let computerSelection = computerPlay()
  let result = ""

  if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
      (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
      (playerSelection == 'Paper' && computerSelection == 'Rock')) {
      
      playerScore += 1
      result = ('You win! ' + playerSelection + ' beats ' + computerSelection + '.'
          + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore)

      if (playerScore == 5) {
          result += '<br><br>You won the game! Reload the page to play again.'
          disableButtons()
      }
  }
  else if (playerSelection == computerSelection) {
      result = ('It\'s a tie... You both chose ' + playerSelection + '.'
          + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore)
  }
  else {
      computerScore += 1
      result = ('You lose. ' + computerSelection + ' beats ' + playerSelection + '.' 
          + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore)

      if (computerScore == 5) {
          result += '<br><br>Computer won the game! Reload the page to play again.'
          disableButtons()
      }
  }
    
// prints result to html file
    document.getElementById('result').innerHTML = result
    return
}

// adds the functoinality to initiate a round of the game when a button is clicked 
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})