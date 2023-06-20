console.log("Welcome to Tic Tac Toe")
let music=new Audio("Tic Tac Toe Game - Tiktok.mp3")
let audioTurn =new Audio 
let gameOver= new Audio
let turn ="X"
let isGameOver=false;

//Function to change the turn
const changeTurn=()=>{
    music.play();
    return turn === "X"?"0":"X";
}

//Function to check for a win
const checkWin = ()=>{
    let boxtexts=document.getElementsByClassName('boxText');
let wins=[
[0, 1, 2, 5, 5, 0],
[3, 4, 5, 5, 15, 0],
[6, 7, 8, 5, 25, 0],
[0, 3, 6, -5, 15, 90],
[1, 4, 7, 5, 15, 90],
[2, 5, 8, 15, 15, 90],
[0, 4, 8, 5, 15, 45],
[2, 4, 6, 5, 15, 135]
]
wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
     document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON"   
     isGameOver=true;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    //  document.querySelector(".line").style.transform = `translate(${e[3]}vm, ${e[4]}vm) rotate(${e[5]}deg)`
    //  document.querySelector(".line").style.width= "20vw";
    }
}) 
}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText=== ''){
            boxText.innerText = turn;
            turn =changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        }
    })
})

//Add on click Listener on Reset button
reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= ""
    });
    turn = "X";
    isGameOver=false;
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})
