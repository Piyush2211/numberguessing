let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
const maxGuesses = 10;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessField").value);
    document.getElementById("guessField").value = ""; // Clear input box
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    guesses.push(userGuess);
    displayGuesses();

    if (userGuess === secretNumber || guesses.length === maxGuesses) {
        endGame(userGuess === secretNumber);
    } else {
        let message = `Wrong guess!`;
        if (userGuess < secretNumber) {
            message += ` Try a higher number.`;
        } else {
            message += ` Try a lower number.`;
        }
        setMessage(message);
    }
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

function endGame(won) {
    if (won) {
        setMessage(`Congratulations! You guessed the correct number (${secretNumber})!`);
    } else {
        setMessage(`Game over! The correct number was ${secretNumber}.`);
    }
    showPlayAgainButton();
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    displayGuesses();
    setMessage("");
    document.getElementById("playAgainButton").style.display = "none";
}

function displayGuesses() {
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = "";
    for (let i = Math.max(0, guesses.length - maxGuesses); i < guesses.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Guess ${i + 1}: ${guesses[i]}`;
        resultsList.appendChild(listItem);
    }
}

function showPlayAgainButton() {
    document.getElementById("playAgainButton").style.display = "block";
}
