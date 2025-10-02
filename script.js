document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".game");
    const resetBtn = document.querySelector(".reset");
    const anouncement = document.querySelector(".anouncement");
    const showComputerResult = document.querySelector(".computerResult");
    const showHumanResult = document.querySelector(".humanResult");
    const computerImage = document.createElement("img");
    const humanImage = document.createElement("img");

    const themeBtn = document.querySelector(".theme");
    const body = document.querySelector("body");

    computerImage.classList.add("resultIcon");
    humanImage.classList.add("resultIcon");

    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;

    showHumanResult.textContent = `You: ${humanScore}`;
    showComputerResult.textContent = `Computer: ${computerScore}`;

    // Game buttons
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            humanChoice = btn.textContent;
            if (humanChoice === "Rock") {
                humanImage.src = "./images/rock.jpg";
            }
            else if (humanChoice === "Paper") {
                humanImage.src = "./images/paper.jpg";
            }
            else {
                humanImage.src = "./images/scissor.jpg";
            }
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

        showHumanResult.textContent = `You: ${humanScore}`;
        showHumanResult.append(humanImage);
        showComputerResult.textContent = `Computer: ${computerScore}`;
        showComputerResult.append(computerImage);
        anouncement.textContent = `${result}`;

        if (humanScore === 5) {
            anouncement.textContent = `Congrats! You Won`;
            btns.forEach((btn) => btn.style.display = "none");
        } else if (computerScore === 5) {
            anouncement.textContent = `Sorry! Computer Won`;
            btns.forEach((btn) => btn.style.display = "none");
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        anouncement.textContent = "";
        showHumanResult.textContent = `You: ${humanScore}`;
        showComputerResult.textContent = `Computer: ${computerScore}`;
        btns.forEach((btn) => (btn.style.display = "inline-block"));
        console.clear();
    }

    function getComputerChoice() {
        let choice = Math.random();
        computerImage.style.transform = "scaleX(-1)";
        if (choice <= 1 / 3) {
            computerImage.src = "./images/rock.jpg";
            return "Rock";
        }
        else if (choice <= 2 / 3) {
            computerImage.src = "./images/paper.jpg";
            return "Paper";
        }
        else {
            computerImage.src = "./images/scissor.jpg";
            return "Scissor";
        }
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

    //Theme:
    // Check if user had a saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeBtn.textContent = "Light Mode";
    }

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeBtn.textContent = "Light Mode";
            localStorage.setItem("theme", "dark"); // save preference
        } else {
            themeBtn.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
});