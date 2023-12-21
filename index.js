
let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random() * 3);
let user = document.querySelector(".user"); // Assuming user is a single element
let pc = document.querySelector(".pc"); // Assuming pc is a single element
let winCon = document.querySelector(".win-container");
let winner = document.querySelector(".winner");
let play= document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("score"));
let scoreElem= document.getElementById("score");
if(score){
    scoreElem.innerText=score;
}
let count=0;

let PCscore=JSON.parse(localStorage.getItem("Cscore"));
let compScore=document.getElementById("Cscore");
if(PCscore){
    compScore.innerText=PCscore;
}
let compCount=0;

let ruleBtn= document.querySelector(".btn");
let ruleCon= document.querySelector(".rule-con");

let close= document.querySelector(".close");


con.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");

        // setTimeout used to set a time to happen an event after a defined time
        setTimeout(() => {
            pc.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(()=>{
        if(random==index){
            winCon.style.display="flex";
            winner.innerText="TIE UP";
        }    
            //sci      ppr           rock         sci          ppr        rock
        else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
             winCon.style.display="flex";
             winner.innerText="You Win";
             count=score;
             count++;
             scoreElem.innerText=count;
             localStorage.setItem("score", JSON.stringify(count));
        }
        else{
            winCon.style.display="flex";
            winner.innerText="You Loose";
            compCount++;
            PCscore.innerText=compCount;
            localStorage.setItem("Cscore", JSON.stringify(compCount));
        }
    }, 1500);
    });
});

play.addEventListener("click", ()=>{
    window.location.reload();
})

ruleBtn.addEventListener("click", ()=>{
       ruleCon.style.display="block";
})

close.addEventListener("click",()=>{
    ruleCon.style.display="none";
})