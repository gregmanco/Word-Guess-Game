// Game Variables 
var wins = 0;
var lettersGuessed = [];
var guessLeft = 10;
var key = "simpsons";
var answer = [] ;
var correctLetters = [];

// Checks to see if the input is an non numeric character and does not consist of more than 1 and prevents it from being entered.
var isAlpha = function(ch){
    return typeof ch === 'string' && ch.length === 1
           && (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z');
   }
// Action triggered by key moving back up and change to lower case letters and create slots for the lenght of the key.

document.onkeyup = function(event) {


    // Takes user letter and stores it in lowercase
    var letter = event.key.toLowerCase();

    // Creates __ on html page
    var slot = " __ ";
    var fill = slot.repeat(key.length);
    
    
    document.getElementById("slots").innerHTML = fill;
// Finds if letter exist in the key
    if (key.indexOf(letter) != -1){
        for  (var i = 0; i < key.length; i++) {
            if (letter==key[i]) {
                answer[i] = letter;
                    console.log(answer);

            }
        }
    }
     // Checks to see if its an alphabetical character and checks it against the key to see it has an of the letters.
    else {
          if(isAlpha(letter) && lettersGuessed.indexOf(letter) == -1 ) {
            lettersGuessed.push(letter); 
            guessLeft -= 1;
            document.getElementById("g-letters").innerHTML= lettersGuessed;
            document.getElementById("g-left").innerHTML = guessLeft;

          }
        }
    
    }

     (lettersGussed == correctLetters)



