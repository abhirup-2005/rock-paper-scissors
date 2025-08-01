function getComputerChoice() {
    let choice = Math.random();
    if(choice <= 1/3) {
        return "Rock";
    } else if(choice > 1/3 && choice <= 2/3) {
        return "Paper";
    } else {
        return "Scissor";
    }
}



function getHumanChoice(roundNumber) {
    let choice;
    do{
    choice = prompt("<Round "+roundNumber+" of 5>\nEnter your choice ( Rock / Paper / Scissor )\n[case insesitive]");

    //making inputs similar
    choice = choice.toLowerCase();
    let firsChar = choice.charAt(0).toUpperCase();
    choice = firsChar + choice.slice(1);

    //error messege for wrong input
    if(choice !== "Rock" && choice != "Paper" && choice != "Scissor") {
        alert("Oops! I guess you made a typo.\nIt's an Invalid input.\nPlease type again");
    }
    } while(choice !== "Rock" && choice != "Paper" && choice != "Scissor");
    return choice;
}



let humanScore = 0,
    computerScore = 0;


function playRound(humanChoice, computerChoice) {

    //when choices are same
    if(humanChoice === computerChoice) {
        return "Its a Tie";
    }

    //when Computer Wins
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if(humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissor";
    } else if(humanChoice === "Paper" && computerChoice === "Scissor") {
        computerScore++;
        return "You lose! Scissor beats Paper";
    }

    //When Human Wins
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You Won! Paper beats Rock";
    } else if(humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        return "You Won! Rock beats Scissor";
    } else if(humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        return "You Won! Scissor beats Paper";
    }
}


function playGame() {
    for(let i = 1; i<=5; i++) {

        let humanChoice = getHumanChoice(i);
        let computerChoice = getComputerChoice();

        console.log("< Round " + i + " >");
        console.log("👤 You      : " + humanChoice);
        console.log("💻 Computer : " + computerChoice);

        let result = playRound(humanChoice, computerChoice);

        console.log(result);
        console.log("👤 Your Score     : " + humanScore);
        console.log("💻 Computer Score : " + computerScore);
        console.log("------------------------------");
    }
    if(humanScore > computerScore) {
        console.log("🎉 Congrats! Champ 🏆, you beat Computer by " + humanScore + "-" + computerScore + "🎉\nWell deserved 👏");
    } else if (humanScore < computerScore) {
        console.log("💔 Computer won the game by " + computerScore + "-" + humanScore + " 💔\nBetter luck next time 🙂");
    } else {
        console.log("🤝 It's a Draw 🤝")
    }
}

playGame();