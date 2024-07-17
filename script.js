let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreBoard=document.querySelector("#user_score");
const compScoreBoard=document.querySelector("#comp_score");

const computerChoice=()=>{
    let options=["rock","paper","scissors"];
    //generating a random number from 0 to 2
    const ran=Math.floor(Math.random()* 3);
    return options[ran];
};

const drawGame=()=>{
    msg.innerText="This is a draw! Play again.";
    msg.style.backgroundColor="blue";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===false)
    {
        compScore++;
        compScoreBoard.innerText=compScore;
        msg.innerText=`You loose! ${compChoice} beats your ${userChoice} !!Try again :(`;
        msg.style.backgroundColor="red";
    }
    else
    {
        userScore++;
        userScoreBoard.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice} :)`;
        msg.style.backgroundColor="green";
    }
}

const PlayGame=(userChoice)=>{
    //Generate computer's choice
    let compChoice=computerChoice();
    if(userChoice===compChoice) //same
    {
        drawGame();
    }
    else //different
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //can be paper or scissors
            userWin=(compChoice==="paper")?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=(compChoice==="scissors")?false:true;
        }
        else
        {
            userWin=(compChoice==="rock")?false:true;
        }
        //to show the winner
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        PlayGame(userChoice);
    });
});