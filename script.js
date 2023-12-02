const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box4 = document.querySelector("#box-4");
const box5 = document.querySelector("#box-5");
const box6 = document.querySelector("#box-6");
const box7 = document.querySelector("#box-7");
const box8 = document.querySelector("#box-8");
const box9 = document.querySelector("#box-9");

const reload = document.querySelector("#reload");

const show = document.querySelector("main");
const showWinner = show.firstElementChild;

const div11 = box1.firstChild;
const div12 = div11.firstChild;

const div21 = box2.firstChild;
const div22 = div21.firstChild;

const div31 = box3.firstChild;
const div32 = div31.firstChild;

const div41 = box4.firstChild;
const div42 = div41.firstChild;

const div51 = box5.firstChild;
const div52 = div51.firstChild;

const div61 = box6.firstChild;
const div62 = div61.firstChild;

const div71 = box7.firstChild;
const div72 = div71.firstChild;

const div81 = box8.firstChild;
const div82 = div81.firstChild;

const div91 = box9.firstChild;
const div92 = div91.firstChild;

let xTurn = true;

let box1NotClicked = true;
let box2NotClicked = true;
let box3NotClicked = true;
let box4NotClicked = true;
let box5NotClicked = true;
let box6NotClicked = true;
let box7NotClicked = true;
let box8NotClicked = true;
let box9NotClicked = true;

let box1Is = null;
let box2Is = null;
let box3Is = null;
let box4Is = null;
let box5Is = null;
let box6Is = null;
let box7Is = null;
let box8Is = null;
let box9Is = null;

let gameEnd = false;

reload.addEventListener("click",() =>{
    location.reload();
})

let playCount = 0;

const decideWinner = () =>{
    playCount++;

    if(playCount>=9){
        showWinner.textContent="Game Over..Draw..!";
    }
        if(box1Is=="x" && box2Is=="x" && box3Is=="x" ||
        box4Is=="x" && box5Is=="x" && box6Is=="x" ||
        box7Is=="x" && box8Is=="x" && box9Is=="x" ||
        box7Is=="x" && box5Is=="x" && box3Is=="x" ||
        box1Is=="x" && box5Is=="x" && box9Is=="x" ||
        box1Is=="x" && box4Is=="x" && box7Is=="x" ||
        box2Is=="x" && box5Is=="x" && box8Is=="x" ||
        box3Is=="x" && box6Is=="x" && box9Is=="x" 
        ){
            showWinner.textContent="Player X won the game";
            gameEnd = true;
        }
        if(box1Is=="o" && box2Is=="o" && box3Is=="o" ||
        box4Is=="o" && box5Is=="o" && box6Is=="o" ||
        box7Is=="o" && box8Is=="o" && box9Is=="o" ||
        box7Is=="o" && box5Is=="o" && box3Is=="o" ||
        box1Is=="o" && box5Is=="o" && box9Is=="o" ||
        box1Is=="o" && box4Is=="o" && box7Is=="o" ||
        box2Is=="o" && box5Is=="o" && box8Is=="o" ||
        box3Is=="o" && box6Is=="o" && box9Is=="o" ){
            showWinner.textContent="Player O won the game";
            gameEnd = true;
        }
}

box1.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box1NotClicked){
            if(xTurn){
                div11.classList.add("x-left")
                div12.classList.add("x-right")
                xTurn=false;
                box1NotClicked = false;
                box1Is="x";
                decideWinner();
            }
            else{
                div11.classList.add("circle")
                div12.classList.add("in-circle")
                box1NotClicked = false;
                xTurn=true;
                box1Is="o";
                decideWinner();
            }
        }
    }
});

box2.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box2NotClicked){
            if(xTurn){
                div21.classList.add("x-left")
                div22.classList.add("x-right")
                xTurn=false;
                box2NotClicked = false;
                box2Is="x";
                decideWinner();
            }
            else{
                div21.classList.add("circle")
                div22.classList.add("in-circle")
                box2fNotClicked = false;
                xTurn=true;
                box2Is="o";
                decideWinner();
            }
        }
    }
});

box3.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box3NotClicked){
            if(xTurn){
                div31.classList.add("x-left")
                div32.classList.add("x-right")
                xTurn=false;
                box3NotClicked = false;
                box3Is="x";
                decideWinner();
            }
            else{
                div31.classList.add("circle")
                div32.classList.add("in-circle")
                box3NotClicked = false;
                xTurn=true;
                box3Is="o";
                decideWinner();
            }
        }
    }
});

box4.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box4NotClicked){
            if(xTurn){
                div41.classList.add("x-left")
                div42.classList.add("x-right")
                xTurn=false;
                box1NotClicked = false;
                box4Is="x";
                decideWinner();

            }
            else{
                div41.classList.add("circle")
                div42.classList.add("in-circle")
                box4NotClicked = false;
                xTurn=true;
                box4Is="o";
                decideWinner();
            }
        }
    }
});

box5.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box5NotClicked){
            if(xTurn){
                div51.classList.add("x-left")
                div52.classList.add("x-right")
                xTurn=false;
                box5NotClicked = false;
                box5Is="x";
                decideWinner();
            }
            else{
                div51.classList.add("circle")
                div52.classList.add("in-circle")
                box5NotClicked = false;
                xTurn=true;
                box5Is="o";
                decideWinner();
            }
        }
    }
});

box6.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box6NotClicked){
            if(xTurn){
                div61.classList.add("x-left")
                div62.classList.add("x-right")
                xTurn=false;
                box6NotClicked = false;
                box6Is="x";
                decideWinner();
            }
            else{
                div61.classList.add("circle")
                div62.classList.add("in-circle")
                box6NotClicked = false;
                xTurn=true;
                box6Is="o";
                decideWinner();
            }
        }
    }
});

box7.addEventListener("click",addCircle = () =>{
    if(gameEnd==false){
        if(box7NotClicked){
            if(xTurn){
                div71.classList.add("x-left")
                div72.classList.add("x-right")
                xTurn=false;
                box7NotClicked = false;
                box7Is="x";
                decideWinner();
            }
            else{
                div71.classList.add("circle")
                div72.classList.add("in-circle")
                box7NotClicked = false;
                xTurn=true;
                box7Is="o";
                decideWinner();
            }
        }
    }
});

box8.addEventListener("click",addCircle = () =>{
    if(gameEnd==false)
    {
        if(box8NotClicked){
            if(xTurn){
                div81.classList.add("x-left")
                div82.classList.add("x-right")
                xTurn=false;
                box8NotClicked = false;
                box8Is="x";
                decideWinner();
            }
            else{
                div81.classList.add("circle")
                div82.classList.add("in-circle")
                box8NotClicked = false;
                xTurn=true;
                box8Is="o";
                decideWinner();
            }
        }
    }
});

box9.addEventListener("click",addCircle = () =>{
    if(gameEnd==false)
        {
        if(box9NotClicked){
            if(xTurn){
                div91.classList.add("x-left")
                div92.classList.add("x-right")
                xTurn=false;
                box9NotClicked = false;
                box9Is="x";
                decideWinner();
            }
            else{
                div91.classList.add("circle")
                div92.classList.add("in-circle")
                xTurn=true;
                box9NotClicked = false;
                box9Is="o";
                decideWinner();
            }
        }
    }
});
