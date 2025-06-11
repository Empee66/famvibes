const words = ["command", "honeypot", "game", "cyber", "developer","luper","rootkit","proxy","symphony","catasrophe","security"];
let selectedWord = "";
let guessedLetters = [];
let attempts = 3;

const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessButton");
const messageDisplay = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

function initGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 3;
    updateDisplay();
    messageDisplay.textContent = "";
    letterInput.value = "";
}

function updateDisplay() {
    wordDisplay.textContent = selectedWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
}

function handleGuess() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = "";

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            attempts--;
        }
        checkGameOver();
        updateDisplay();
    }
}

function checkGameOver() {
    if (attempts <= 0) {
        messageDisplay.textContent = `You don't Know Anything! The word was "${selectedWord}".`;
        guessButton.disabled = true;
    } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        messageDisplay.textContent = "Weldone! That wasn't easy!";
        guessButton.disabled = true;
    }
}

guessButton.addEventListener("click", handleGuess);
restartButton.addEventListener("click", () => {
    initGame();
    guessButton.disabled = false;
});

initGame();