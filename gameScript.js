let count1 = 0;
let count2 = 0;

let boxes = document.querySelectorAll(".box");
let uScore = document.querySelector("#uscore");
let cScore = document.querySelector("#cscore");
let msg = document.querySelector("#msg");

const cRandom = () => {
    const arr = ["rock","paper","sissor"];
    const num = Math.floor(Math.random() * 3);
    return arr[num];
}

const isWinner = (check, uChoice, cChoice) => {
    if(check){
        count1++;
        uScore.innerText = count1;
        msg.innerText = `You Won! Your ${uChoice} beats ${cChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        count2++;
        cScore.innerText = count2;
        msg.innerText = `You Lose ${cChoice} beats Your ${uChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (uChoice) => {
    const cChoice = cRandom();
    if(uChoice === cChoice){
        msg.innerText = "Game Draw";
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
    }
    else{
        let check = true;
        if(uChoice === 'rock'){
            check = cChoice==="paper" ? false : true;
        }
        else if(uChoice === 'paper'){
            check = cChoice==="sissor" ? false : true;
        }
        else{
            check = cChoice==="rock" ? false : true;
        }
        isWinner(check, uChoice, cChoice);
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const uChoice = box.getAttribute("id");
        playGame(uChoice);
    })
});