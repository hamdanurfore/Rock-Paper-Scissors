// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;
for (var i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[math.floor(math.random() * computerChoices.length)];
    // Collect the user's response and convert to lower case.
    var userGuess = prompt("Enter r, p, or s to compete!");
    userGuess = userGuess.toLowerCase();
    // Only run game logic if user chose a valid option
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
        alert("The computer's guess was " + computerGuess);
        // Win/lose conditions:
        if (userGuess === computerGuess) {
            ties++;
            alert("Okay, You've tied with the computer " + computerGuess + " time(s).");
        } else if (
            (userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")
        ) {
            wins++;
            alert("Woah! You've won " + wins + " time(s).");
        } else {
            losses++;
            alert("Oh no! You've lost " + " time(s).");
        }
    }

}

// When the game is over, alert the totals to the user. We can use the \n character to make a line break.
alert("You've won: " + wins + " time(s)" + "\nYou've tied: " + ties + " time(s)" + "\nYou've lost: " + losses + " time(s)");
