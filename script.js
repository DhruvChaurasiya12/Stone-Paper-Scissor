let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");
let result = document.getElementById("result");

let restart = document.getElementById("restart-button");

restart.addEventListener("click" ,() => {
    userScore.innerText = 0;
    compScore.innerText = 0;
    result.innerText = "Play your move!";
});


const choices = document.querySelectorAll(".choices");
let userChoice = null;


const compID = () => {
    let arr = ["stone","paper","scissor"];
    let randomVal = Math.floor(Math.random() * 3);
    return arr[randomVal];
};


function declareResult(userChoice,compChoice, resultOutput){

    if(resultOutput=="win"){
        result.innerText = `Your choice: ${userChoice}, Comp choice: ${compChoice} You Won!`;
        userScore.innerText = Number(userScore.innerText)+1;
    }
    else if(resultOutput=="draw"){
        result.innerText = `Your choice: ${userChoice}, Comp choice: ${compChoice} Draw!`;
    }
    else{
        result.innerText = `Your choice: ${userChoice}, Comp choice: ${compChoice} You Lose!`;
        compScore.innerText = Number(compScore.innerText)+1;
    }
}


const gameResult = (userChoice, compChoice) => {
    if(userChoice == "stone" && compChoice == "scissor") return "win";
    if(userChoice == "paper" && compChoice == "stone") return "win";
    if(userChoice == "scissor" && compChoice == "paper") return "win";
    if(userChoice == compChoice) return "draw";
    else return "loss";
};


function playGame(userChoice){
    let compChoice = compID();
    let resultOutput = gameResult(userChoice, compChoice);

    declareResult(userChoice,compChoice, resultOutput);
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});