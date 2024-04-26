const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const getHumanChoice = () => {
    let input = prompt("Choose rock, paper, or scissors");
    return input ? input.toLowerCase() : "none";  // Ensure there's a return value even if input is null
};

let humanScore = 0;
let computerScore = 0;

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);

        const playRound = (humanChoice, computerChoice) => {
            if (humanChoice === computerChoice) {
                console.log('You have tied!');
            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                       (humanChoice === 'paper' && computerChoice === 'rock') ||
                       (humanChoice === 'scissors' && computerChoice === 'paper')) {
                humanScore++;
                console.log('The player has won!');
            } else {
                computerScore++;
                console.log('The computer has won!');
            }
        };

        playRound(humanChoice, computerChoice);
        console.log(`Round ${i + 1} Scores - Player: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log(`Final Scores - Player: ${humanScore}, Computer: ${computerScore}`);
};

playGame();
