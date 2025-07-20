let gameSeq = [];
let userSeq = [];

let btn = ["yellow","red","green", "purple"];

let h2 = document.querySelector("h2");

let level = 0;
let start = false;
document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game Started");
        start = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(() => {
        btn.classList.remove("user");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btn[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    gameFlash(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            },250);
        }
    }else{
        h2.innerText = `Game over restart again!`
        score();
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",btnPress);
}
function reset(){
    level = 0;
    start = false;
    gameSeq = [];
    userSeq = [];
}
function score(){
    h2.innerText = `Game over your score was ${level}
    Press to restart`;

    let body = document.querySelector("body");
    body.classList.add("back");
    setTimeout(() => {
        body.classList.remove("back");
    },250);
}
