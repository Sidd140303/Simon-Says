let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 200);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx) {
    // console.log("Curr level :", level);
    if (userseq[idx] === gameseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(() => {
                levelup();
            }, 1000);
        }
    } else {
        h2.innerHTML = `Game over...Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "rgb(133, 221, 255)";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    console.log("button was pressed");
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}