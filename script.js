document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".game");
    const resetBtn = document.querySelector(".reset");
    const score = document.querySelector(".score");
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;

    // Game buttons
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            humanChoice = btn.textContent;
            playGame();
        });
    });

    // Reset button
    resetBtn.addEventListener("click", resetGame);

    function playGame() {
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(`H: ${humanChoice}, C: ${computerChoice}`);
        console.log(result);
        console.log(`Score: H: ${humanScore}, C: ${computerScore}`);

        score.textContent = `${result}, Computer chose ${computerChoice}`;

        if (humanScore === 5) {
            score.textContent = `Congrats! You Won.... by ${humanScore}-${computerScore}`;
            btns.forEach((btn) => btn.style.display = "none");
        } else if (computerScore === 5) {
            score.textContent = `Computer Won.... by ${humanScore}-${computerScore}`;
            btns.forEach((btn) => btn.style.display = "none");
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        score.textContent = "Score here";
        btns.forEach((btn) => (btn.style.display = "inline-block"));
        console.clear();
    }

    function getComputerChoice() {
        let choice = Math.random();
        if (choice <= 1 / 3) return "Rock";
        else if (choice <= 2 / 3) return "Paper";
        else return "Scissor";
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return "Its a Tie";

        if (
            (humanChoice === "Rock" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Scissor") ||
            (humanChoice === "Scissor" && computerChoice === "Rock")
        ) {
            computerScore++;
            if (humanChoice === "Rock") return "You lose! Paper beats Rock";
            if (humanChoice === "Paper") return "You lose! Scissor beats Paper";
            if (humanChoice === "Scissor") return "You lose! Rock beats Scissor";
        } else {
            humanScore++;
            if (humanChoice === "Rock") return "You Won! Rock beats Scissor";
            if (humanChoice === "Paper") return "You Won! Paper beats Rock";
            if (humanChoice === "Scissor") return "You Won! Scissor beats Paper";
        }
    }
});
