let btns = document.querySelectorAll(".btns");
let reset = document.querySelector("#resetbtn");
let show = document.querySelector(".showwinner");
let game = document.querySelector(".game")




let turnO = true; //playerx, playery

let winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        // console.log("Button")
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X"
            turnO = true
        }
        checkWinner();
        // btn.disabled = true;
            btn.disabled = true;
            reset.addEventListener('click',()=>{
                btn.innerText = "";
                show.innerText = "Winner is :";
            })
    });
});



let checkWinner = ()=>{
    for (let winn of winner) {
        let pos1Val = btns[winn[0]].innerText;
        let pos2Val = btns[winn[1]].innerText;
        let pos3Val = btns[winn[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos1Val){
                show.innerText = `Winner is : ${pos1Val}`  
            }
        }
    }
};
