const mapSize = 10;
let boardNum = 0;

const root = document.querySelector(".root");

setMAP();
function setMAP(){
    for(let i=0; i<mapSize; i++){
        const row = document.createElement("div");
        for(let j=0; j<mapSize+1; j++) {
            const box = document.createElement("div");
            box.setAttribute("class","box");
            box.innerText = boardNum;
            if (j > 1) {
                boardNum ++;
            }
            row.append(box);
        }
        root.append(row);
    }
}