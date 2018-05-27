



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];


    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;
    var turnsLeft = 10;
    var userChoices = [];
    
            

            // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {

        // Determines which key was pressed.
            var userGuess = event.key.toLowerCase();
            
            userChoices.push(userGuess);

            // Randomly chooses a choice from the options array. This is the Computer's guess.
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Only run the following code block if the user presses "r" or "p" or "s".
        
            if(turnsLeft>=0){

                if (userGuess === computerGuess){
                    wins++;
                }
                else 
                    losses++;
                
                    
                document.getElementById('wins').innerHTML =  wins;
                document.getElementById('losses').innerHTML = losses;
                document.getElementById('turnsLeft').innerHTML = turnsLeft;
                document.getElementById('guesses').innerHTML=userChoices;
                
                turnsLeft--;
               


                    // Set the inner HTML contents of the #game div to our html string
                    
                    
                
            } 
           
            

            
        };