let box = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let won = document.querySelector("#whoWon")
let turnO = true ;

const winPattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

restart.addEventListener("click", () =>{
    reset();
})


const reset = () =>{
    turnO = true ;
    enableboxes();
    won.classList.replace("show","hide")

}


const disableboxes = () =>{
    for(let bx of box){
        bx.disabled = true;
    }
}
const enableboxes = () =>{
    for(let bx of box){
        bx.disabled = false;
        bx.innerText = "";
    }
}


box.forEach((bx) => {
    bx.addEventListener("click", () =>{
        if(turnO==true){
            bx.textContent ="O";
            turnO = false;
        }else{
            bx.textContent = "X";
            turnO = true ;
        }
    bx.disabled = true ;
    iswinner();
    })
})

const iswinner = () => {
    for( let pattern of winPattern){
        let pot1val = box[pattern[0]].innerText
        let pot2val = box[pattern[1]].innerText
        let pot3val = box[pattern[2]].innerText

        if(pot1val != "" && pot2val != "" && pot3val != ""){
            if(pot1val === pot2val && pot1val === pot3val){
                showWinner(pot1val);
                disableboxes();
               
            }
            }
        }
}

const showWinner = (Winner) =>{
    won.classList.replace("hide","show");
}


            