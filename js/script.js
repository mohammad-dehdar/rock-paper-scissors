const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let pcScore = 0;
let gameRounds = 5;

const checkWinner = (player, pc) => {
    if (player === pc) {
        return ("draw")
    } else if (player === "rock") {
        return pc === "scissors" ? "player" : "pc"
    } else if (player === "paper") {
        return pc === "rock" ? "player" : "pc"
    } else {
        return pc === "paper" ? "player" : "pc"
    }
}

const showResult = (result) => {
    if (result === "player") {
        console.log("winner")
        playerScore++;
    } else if (result === "pc") {
        console.log("looser")
        pcScore++;
    } else {
        console.log("tie")
    }

    console.log(`player score is ${playerScore}`)
    console.log(`pc score is ${pcScore}`)
    console.log("......................")
}

const play = () => {
    for (let i = 0; i < gameRounds; i++) {
        const playerChoice = prompt("please choose rock,paper,scissors")
        if (choices.indexOf(playerChoice.toLocaleLowerCase()) !== -1) {
            console.log(`you => ${playerChoice}`)
        } else {
            console.log("warning!!!!!")
            return;
        }

        const randNum = Math.floor(Math.random() * choices.length)
        const pcChoiec = choices[randNum];
        console.log(`pc => ${pcChoiec}`)

        const gameResult = checkWinner(playerChoice, pcChoiec)
        showResult(gameResult)
    }
    if (playerScore > pcScore) {
        console.log("Congratulations! You are the overall winner!");
        return;
    } else if (pcScore > playerScore) {
        console.log("Computer wins! Better luck next time.");
        return;
    } else {
        console.log("It's a tie overall!");
        return;
    }

    play()
}

play()