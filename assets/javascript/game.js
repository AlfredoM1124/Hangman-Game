
		// VARIABLES
		// =================================
		// The Words that will be randomly cycled through for the user to answer.
		var words = ["Jetpack","Gorilla","Mongolian","Historical","Theater","Festival","Partying","Glasses",
				 	 "Touchdown","Canal","Tabletop","Military","Jackpot","Scuba",""];

		var randomWord = []
		// The available options for user to guess.
		var ltr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		// Start the game with 0 wins.
		var wins = 0;
		// Start the game with 0 losses.
		var losses = 0;
		// User gets 8 guesses before receiving a loss.
		var guessesIndex = 0;

		var guessesRemaining = 9;
		var guessesMade = [];
		

		// FUNCTIONS 
		// =================================

		// Function to update the scores
	function updateScore(){
		var guessesLeft = guessesRemaining - guessIndex;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		document.querySelector("losses").innerHTML = "Losses: " + losses;
		document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	}

		
	function challenge(){
		rand = Math.floor(Math.random()*challenges.length);
		word = challenges[rand];
		numChar = 1;
		var letter = word.substring(0,1);
			document.getElementById('letter1').innerHTML = letter;
			document.getElementById('letter1').style.visibility = "hidden";
			document.getElementById('underline1').style.borderBottom = "3px solid black";
			document.getElementById('underline1').style.display = "block";
			document.getElementById('gamePage').style.display = "block";
			document.getElementById('categoryName').style.width = "100%";
	}
	// Main Process

	// Calls the function to set the scores and guesses to 0
	updateScore();

	// Record the user's guesses

	document.onkeyup = function(event){
		// Determine which key was pressed 
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		// For loop to determine how many guesses the user has left. 
		for (var inputGuess = 0; inputGuess < guessesRemaining; inputGuess++){
			// If user guesses correctly keep the same amount of guesses remaining and fill a blank.
			if (userInput === ){

			}
			// If they guess wrong reduce guesses remaining by 1
			else{
				guessesLeft--;
				guessesMade.push(userInput);
				showGuesses();
				updateScore();
			}
		}
	}
}
		