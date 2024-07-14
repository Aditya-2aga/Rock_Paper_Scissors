let usScore=0;
let coScore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScore=document.querySelector("#uscore");
const compScore= document.querySelector("#cscore");

const genCompChoice= ()=>{
    const options=["rock","paper","scissors"];
    const randIndex= Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="blue"; 
}

const showWinner=(userWin, uChoiceId, compChoice)=>{
    if(userWin){
        usScore++;
        userScore.innerText=usScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${uChoiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
    }
    else{
        coScore++;
        compScore.innerText=coScore;
        console.log("You Lose!");
        msg.innerText=`You Lost! ${compChoice} beats your ${uChoiceId}`;
        msg.style.backgroundColor="red"; 
    }
}

const playGame=(uChoiceId)=>{
    console.log("User choice =",uChoiceId);
    //computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice:", compChoice);

    if(uChoiceId==compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(uChoiceId=="rock"){
            //computer must have generated either paper or scissors
            userWin = compChoice==="paper" ? false: true;
        }
        else if(uChoiceId=="paper"){
            //computer must have generated either rock or scissors
            userWin = compChoice==="scissors" ? false: true;
        }
        else{
            //computer must have generated either rock or paper
            userWin = compChoice==="rock" ? false: true;
        }
        showWinner(userWin, uChoiceId, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const uChoiceId=choice.getAttribute("id");
        playGame(uChoiceId);
    });
});