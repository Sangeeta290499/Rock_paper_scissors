let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () =>{ //computer choice
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () =>{
    
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color =  " #081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color =  " #fff";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color =  " #fff";
    }
}



const playGame = (userChoice) => {
   
    //Generate computer choice
    const compChoice = genCompChoice();
   

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false: true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"? false: true;
        } else {
            //rock, paper
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
};



choices.forEach((choice) =>{      // user choice 
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
