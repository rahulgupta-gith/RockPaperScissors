let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

let choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "game was draw."
    msg.style.backgroundColor = "#3D3B8E"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win !");
        msg.innerText = `you win! yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("compchoice = ",compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true; 
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;   // 34: 10;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 