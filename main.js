const user = document.querySelector(".user").querySelectorAll("div");
const result = document.querySelector(".result");
const pc = document.querySelector(".pc").querySelector("img");
const allPcSelection = ['rock','paper','scissor']
let userSelect = "";
let pcSelect = "";

user.forEach(function (item) {
    item.addEventListener("click",selectForUser)
})

function selectForUser (event) {
    userSelect=event.target.className;
    selectForPc();
    if (pcSelect===userSelect) {
        result.innerHTML=`<span style="color:#F0FFF0">Equal!</span> <img src="asset/equal.png">`;
    } else if (pcSelect==="rock" && userSelect==="paper") {
        result.innerHTML=`<span style="color:#32CD32">You Win!</span> <img src="asset/win.png">`;
    } else if (pcSelect==="scissor" && userSelect==="rock") {
        result.innerHTML=`<span style="color:#32CD32">You Win!</span> <img src="asset/win.png">`;
    } else if (pcSelect==="paper" && userSelect==="scissor") {
        result.innerHTML=`<span style="color:#32CD32">You Win!</span> <img src="asset/win.png">`;
    } else if (pcSelect==="rock" && userSelect==="scissor") {
        result.innerHTML=`<span style="color:#DC143C">You Lose!</span> <img src="asset/lose.png">`;
    } else if (pcSelect==="paper" && userSelect==="rock") {
        result.innerHTML=`<span style="color:#DC143C">You Lose!</span> <img src="asset/lose.png">`;
    } else if (pcSelect==="scissor" && userSelect==="paper") {
        result.innerHTML=`<span style="color:#DC143C">You Lose!</span> <img src="asset/lose.png">`;
    }
}

function selectForPc () {
    pcSelect = allPcSelection[Math.floor(Math.random()*3)]
    pc.src=`asset/${pcSelect}.png`
}