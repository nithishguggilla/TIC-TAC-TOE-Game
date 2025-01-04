// access the buttons with classname

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg_container");
let winnerText = document.querySelector("#winText");


let turn0 = true;

// to add event listner to each box we are using for each loop

const resetgame = ()=>{
    turn0 = true;
    enaableBox();
    msgContainer.classList.add("hide");
}

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enaableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


// used for each loop to access each box(button) 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0"; //this prints 0 in boxes
            turn0 = false; //this gives chance to print alternate times
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;  //it dows not allow button change the character

        checkWinner()
    })
})

const showWinner = (winner) =>{
    winnerText.innerText = `congratulations The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}


const checkWinner = () => {
    for(let pattern of winPattern){ // using for of loop checking all values in index 1 and 2 and 3 and comparing
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){  //value sxhould not be empty 
            if(val1 == val2 && val2===val3){  // printing wi8nner only matches
                console.log("winner", val1);
                showWinner(val1);
            }
        }
    }
    
};

resetBtn.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);
