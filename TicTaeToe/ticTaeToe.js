const mapSize = 3;
let turn = 1;
let win = -1;
let cnt = 0;

const root = document.querySelector(".root");
const board = document.createElement("div");
board.setAttribute("class","board");

setMap();
function setMap(){
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            const boxNum = `y${i}x${j}`;

            const box = document.createElement("div");
            box.setAttribute("id",boxNum);
            box.setAttribute("class","box");

            box.addEventListener("click", ()=>{
                if (box.textContecnt !== "" || win !== -1) return;
                if (turn === 1) {
                    box.textContecnt = "X";
                    turn = 2;
                } else {
                    box.textContecnt = "O";
                    turn = 1;
                }
                checkWin();
                cnt ++;
            });
            board.append(box);
        }
    }
    root.append(board);
}

function checkWin(){
    const selBox = document.querySelector(".box");
    const winArryIdx = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    for (let i = 0; i < winArryIdx.length; i++) {
        const [a,b,c] = winArryIdx[i];
        if ((box[a].textContecnt === box[b].textContecnt)&&
        (box[b].textContecnt === box[c].textContecnt)){
            win = turn;
            alert (`P${win}승!`);
            return;
        } else if (cnt > 7){
            alert (`무승부`);
            return;
        }
    }
}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    reset();
});

function reset(){
    turn = 1;
    win = -1;
    location.reload();
}