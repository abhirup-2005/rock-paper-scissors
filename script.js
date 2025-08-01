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
let computerChoice = getComputerChoice();
console.log(computerChoice);



function getHumanChoice() {
    let choice = prompt("Enter your choice( Rock / Paper / Scissor )");
    return choice;
}
let humanChoice = getHumanChoice();
console.log(humanChoice);



let humanScore = 0,
    computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let firsChar = humanChoice.charAt(0).toUpperCase();
    humanChoice = firsChar + humanChoice.slice(1);

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
        return "You lose! Sissor beats Paper";
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
        return "You Won! Sissor beats Paper";
    }


    else {
        return "Invalid Input";
    }

}
console.log(playRound(humanChoice, computerChoice));