let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generatetarget = () => {
    return Math.floor(Math.random() * 10 ) ;
  }

  const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
  const check = humanGuess => {
    if (humanGuess > 9) { window.alert( 'Your number is out of range! Pleas, choose number between 0 and 9.')} 
  }
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  const advanceRound = () => currentRoundNumber++;  
  