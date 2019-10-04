var answer = ["a", "e", "i", "o", "u", "q", "w", "r", "t", "y"];

var win = 0;
var lose = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

// what reset should do:
// update guessLeft to 9;
// clear guess so far
// choose a new letter to guess;
// no changes to win or lose


var reset = function () {
    guessesLeft = 9;
    letterUser = [];
    var computerGuess = answer[Math.floor(Math.random() * answer.length)];
}

var updateGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = guessesLeft;
  };
  
  var updateLetterToGuess = function() {
    // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  var reset = function() {
    guessesLeft = 9;
    letterUser = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  };
  
  // Execute on page load.
  updateLetterToGuess();
  updateGuessesLeft();
  

// whenever the user keys down a letter the following will happen:
// letterUser will be pused into a new element 
var updateGuessesSoFar = function () {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas.
    document.querySelector("#yourGuess").innerHTML = guessedLetters.join(", ");
};

// and the guessesLeft go down by 1
// if it is the answer, #win++, everything resets
// it it is not the answer, and guessesleft goes down to 0, #lose++, then reset
document.onkeydown = function(event) {
    guessesLeft--;
  
    var letter = event.key.toLowerCase();
  
    guessedLetters.push(letter);
  
    updateGuessesLeft();
    updateGuessesSoFar();
  
  
    if (letter === letterToGuess) {
  
      win++;
      document.querySelector("#win").innerHTML = wins;
  
      reset();
    }
  
    if (guessesLeft === 0) {
  
      lose++;
      document.querySelector("#lose").innerHTML = lose
  
      // Then we'll call the reset.
      reset();
    }
  };
  