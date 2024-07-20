let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]

]
const resetGame = () => {
turn0 = true;
enableBoxes();
msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box is work 0");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else  {
            box.innerText = "X"
            console.log("Box is work X");
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledBoxes = () => {
for(let box of boxes){
    box.disabled = true; // when i got winner there is no any button happing//
}
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = true; 
        box.innerText = "";// when i got winner there is no any button happing//
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratualation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let post3Val = boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos2Val != "" && post3Val != "") {
        if(pos1Val === pos2Val && pos2Val === post3Val){
            
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
       }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

