function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 1 / 3) {
        return "Rock";
    } else if (choice > 1 / 3 && choice <= 2 / 3) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

const btns = document.querySelectorAll("button");
let humanChoice;
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        humanChoice = btn.textContent;
        playGame();
    });
});

let humanScore = 0,
    computerScore = 0;


function playRound(humanChoice, computerChoice) {

    //when choices are same
    if (humanChoice === computerChoice) {
        return "Its a Tie";
    }

    //when Computer Wins
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissor";
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        computerScore++;
        return "You lose! Scissor beats Paper";
    }

    //When Human Wins
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You Won! Paper beats Rock";
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        return "You Won! Rock beats Scissor";
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        return "You Won! Scissor beats Paper";
    }
}


function playGame() {
        let computerChoice = getComputerChoice();

        console.log("👤 You      : " + humanChoice);
        console.log("💻 Computer : " + computerChoice);

        let result = playRound(humanChoice, computerChoice);

        console.log(result);
        console.log("👤 Your Score     : " + humanScore);
        console.log("💻 Computer Score : " + computerScore);
        console.log("------------------------------");

        const div = document.querySelector("div");
        const score = document.createElement("div");
        score.textContent = `${result}, Y: ${humanScore} C: ${computerScore}`;
        div.append(score);

    if (humanScore == 5) {
        console.log("🎉 Congrats! Champ 🏆, you beat Computer");
        const greet = document.createElement("div");
        greet.textContent = "You Won";
        div.append(greet);
    } else if(computerScore == 5){
        console.log("💔 Computer won the game");
        const greet = document.createElement("div");
        greet.textContent = "You Lost";
        div.append(greet);
    }
}