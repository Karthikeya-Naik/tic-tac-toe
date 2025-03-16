let boxes=document.querySelectorAll(".box");
let restart=document.getElementById("restart");
let currPlayer='X';
let again=document.getElementById("new");
let final=document.querySelectorAll(".final");
let symbol=document.getElementById("symbol");
let result=document.getElementById("result");
let count=0;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(!box.textContent){
            box.textContent=currPlayer;
            if(currPlayer==='X'){
                currPlayer='O';
                // box.innerText="O";
                box.classList.add('O');
            }
            else{
                currPlayer='X';
                // box.innerText="X";
                box.classList.add('X');
            }
        }
        count++;
        let wi=Winner();
        if(count===9 && !wi){
            draw();
        }
    });
});
const draw = () =>{
    symbol.textContent="XO";
    result.textContent='Draw!';
    count=0;
    document.getElementById("final").style.display="block";
    stopboxes();
    document.getElementById("restart").style.display="none";
};
const winChance=[
    [0,1,2],
    [3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
const stopboxes = () =>{
    for(let box of boxes){
        box.classList.add('disable');
    }
}
const startboxes = () =>{
    for(let box of boxes){
        box.classList.remove('disable');
        box.innerText="";
        box.classList.remove('X','O');
    }
}
const show = (player) =>{
    symbol.textContent=player;
    result.textContent='Winner!';
    document.getElementById("final").style.display="block";
    stopboxes();
    document.getElementById("restart").style.display="none";
};
const Winner=()=>{
    for(let chance of winChance){
        let pos1=boxes[chance[0]].innerText;
        let pos2=boxes[chance[1]].innerText;
        let pos3=boxes[chance[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                show(pos1);
            }
        }
    }
};

const reset = () =>{
    currPlayer='X';
    count=0;
    startboxes();
    restart.style.display = "block";
};
restart.addEventListener("click",reset);
const playagain = () =>{
    currPlayer='X';
    document.getElementById("final").style.display="none";
    count=0;
    startboxes();
    document.getElementById("restart").style.display="block";
};
again.addEventListener("click",playagain);