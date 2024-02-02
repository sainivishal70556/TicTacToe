let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let turn0 = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 6],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            btn.innerText ="0";
            turn0=false;
            
        }
        else{
            btn.innerText ="X";
            turn0=true;
            

        }
        btn.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for(box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () => {
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner) => {
    msg.innerText = `Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner");
                showWinner(pos1);
                disableBoxes();

            }
        }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);