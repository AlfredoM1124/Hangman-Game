// Creating Variables

var wordsArray = ["Jetpack","Gorilla","Mongolian","Historical","Theater","Festival","Partying","Glasses",
				"Touchdown","Canal","Tabletop","Military","Jackpot","Scuba","Hydroelectricity","Words","Keys"];
var currentWord = [];
var totalWords = wordsArray.length;
var guessesRemaining = 9;
var wins = 0;
var losses = 0;
var Correctguesses = 0;
var prevGuess= [];
// Render a random word to begin the game - - 
var randomWord = document.getElementById("current-word");

randomWord.innerHTML = "";

for(var i=0;i<totalWords;i++){  
    randomWord.innerHTML += "_"; 
    currentWord.push("_");
}
// - - Random Word generator ends
var currentProgress = randomWord.innerHTML;

// Keep track of player's keyboard inputs
 document.onkeyup = function(event) {
     var attempts = event.key;    
     // Only run if user has guesses remaining 
     if(guessesRemaining > 0){   
          // Continue if the user's guess has not been chosen yet 
        if(prevGuess.indexOf(attempts) < 0){
            
              console.log("User guessed: " + attempts);
            
             if((wordsArray.indexOf(attempts) >= 0)){
                 var currentGuess = "";

                 console.log("Alert Alert Alert Alert");
                 for(var i = 0; i < wordsArray.length; i++){
                     if(wordsArray.charAt(i) === attempts){
                         console.log("Found " + attempts + " at index: " + i);
                         Correctguesses++;
                         currentWord[i] = attempts;                        
                     }
                 }
                 currentWord.forEach(function(thing){
                    currentGuess += thing;
                 });
                     
                 randomWord.innerHTML = currentGuess;
                 
             }
             else{
                 
                guessesRemaining--;
                document.getElementById("guesses-left").innerHTML = guessesRemaining;
                 
                 if(guessesRemaining<9 && guessesRemaining>=5){
                    document.getElementById("guesses-left").style.color = "#008000";
                 }
                 else if(guessesRemaining<5 && guessesRemaining>=2){
                    document.getElementById("guesses-left").style.color = "#ff6600";
                 }
                 else if(guessesRemaining<2){
                    document.getElementById("guesses-left").style.color = "#ff0000";
                 }
             }
            
            prevGuess.push(attempts);
            document.getElementById("used-letters").innerHTML = prevGuess;
            console.log("Guess List: " + prevGuess + "\nGuesses Left: " + guessesRemaining + "\nCorrect Guesses: ");
        }
         
         if(Correctguesses == totalWords){
             wins++; document.getElementById("wins").innerHTML = wins;
             resetValues();
         }
     
 }
     else{
         losses++;
         document.getElementById("losses").innerHTML = losses;
         resetValues();
     }
     
 };

// Resets the game statistics and words
function resetValues(){
    guessesLeft = 9;
    Correctguesses = 0;
    guessList = [];
    currentWord = [];
    
    randomWord.innerHTML = "";
    document.getElementById("guesses-left").innerHTML = guessesRemaining;
    document.getElementById("used-letters").innerHTML = "";
    document.getElementById("guesses-left").style.color = "black";
    
    
    for(var i=0;i<totalWords;i++){  
        randomWord.innerHTML += "_"; 
        currentWord.push("_");
    }
    currentProgress = randomWord.innerHTML;
}