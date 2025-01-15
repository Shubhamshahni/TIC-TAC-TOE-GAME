let boxes = document.querySelectorAll(".button");
boxes2=document.querySelectorAll("button2");
let disablebtn = document.querySelector(".disbtn")
let resetbtn = document.querySelector(".reset");
let newgbtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".display-msg");
let winmsg = document.querySelector("#winner");

let turn0 = true; //Player X ,Pattern 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableButtons();
    msgContainer.classList.add("hide");
}


boxes.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("clicked")
        // button.innerText="X";

        if (turn0) {
            button.innerText = "0";
            
            turn0 = false;

        } else {
            button.innerText = "X";
            
            turn0 = true;
        }

        checkWinner();
    });
});

const disableButtons = () => {
    for (let button of boxes) {
        button.disabled = true;
    }
};

const enableButtons = () => {
    for (let button of boxes) {
        button.disabled = false;
        button.innerText = "";
    }
};


const showWinner = (winner) => {
    winmsg.innerText = `WINNER-${winner}`;
    msgContainer.classList.remove("hide")
}

const checkWinner = () => {
    for (let Pattern of winpatterns) {

        // console.log(Pattern[0],Pattern[1],Pattern[2]);
        // console.log(
        //     boxes[Pattern[0]].innerText,
        //     boxes[Pattern[1]].innerText,
        //     boxes[Pattern[2]].innerText
        // );

        let pos1val = boxes[Pattern[0]].innerText;
        let pos2val = boxes[Pattern[1]].innerText;
        let pos3val = boxes[Pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner - ", pos1val);
                showWinner(pos1val);
                disableButtons();
            }
        }
    }


};

newgbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
