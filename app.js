let gameseq = [];
let userseq= [];
let highest = -1;
let btns = ["yellow", 'red', 'purple', 'green']

let started = false;
let level   =0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
      if (started == false){
        started =true;
        console.log('game started')
        levelUp();
      }
} )
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    let text = `Level ${level}`
    h2.innerHTML=text;

    let randIdx = Math.floor(Math.random()*3)
    let ranColor = btns[randIdx];
    let randbtn = document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor)
    console.log(gameseq)
    btnFlash(randbtn);
}
 
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);

        }
        
    }
    else {
        if(highest <level){
            highest =level;
        }
        h2.innerHTML=`Game over! your score is <b>${level}</b> <br> Press any key to start <br> highest score is ${highest}`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white"
        },150)
        reset()
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    usercolor = this.getAttribute("id");
    userseq.push(usercolor)
    checkAns(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq=[];
    level=0;
}