var randNum;
var scoreValue = 0;
function createBubble() {
   let createBubble = "";
   for (let i = 0; i <= 108; i++) {
      let randNum = Number(Math.floor((0 + (10 - 0)) * Math.random()));
      createBubble += `<div class="bubble">${randNum}</div>`;
   }
   document.querySelector("#bottomPanel").innerHTML = createBubble;
}

function hitNumberGenerator() {
   randNum = Number(Math.floor((0 + (10 - 0)) * Math.random()));
   document.querySelector("#hitNumber").innerHTML = randNum;
}

function timer(num) {
    
   let timer = setInterval(() => {
      if (num > 0) {
         num--;
         document.getElementById("timer").innerHTML = num;
      }
      else {
         clearInterval(timer);
         gameOver();
      }
   }, 2000)
}
function increaseScore(){
   scoreValue++;
   document.getElementById("scoreBox").innerHTML = scoreValue;
}
function gameOver(){
   // document.querySelector("#bottomPanel").innerHTML = `<button>Restart<button>`;
   document.querySelector("#bottomPanel").innerHTML = `<h2> Game Over <h>`;
}
 
   let bubble = document.getElementById("bottomPanel");
   bubble.addEventListener("click", (e) => {
      // console.log(e);
      let uValue = Number(e.target.innerText);
      let isSameValue = randNum === uValue;
      if (isSameValue) {
         increaseScore();
         hitNumberGenerator();
         createBubble();
         
      }
   });

createBubble();
hitNumberGenerator();
timer(10);
 
