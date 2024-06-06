const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const choicesDivs = document.querySelectorAll('.choice');

choicesDivs.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateScores(result);
        displayResult(userChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScores(result) {
    if (result === 'win') {
        userScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function displayResult(userChoice, computerChoice, result) {
    let message = '';
    if (result === 'win') {
        message = `You win! ${capitalize(userChoice)} beats ${computerChoice}.`;
    } else if (result === 'lose') {
        message = `You lose! ${capitalize(computerChoice)} beats ${userChoice}.`;
    } else {
        message = `It's a draw! You both chose ${userChoice}.`;
    }
    resultMessage.textContent = message;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
