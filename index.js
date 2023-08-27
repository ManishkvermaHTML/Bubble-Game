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

function timer() {
   var time = 60;
   let timer = setInterval(() => {
      if (time > 0) {
         time--;
         document.getElementById("timer").innerHTML = time;
      }
      else {
         clearInterval(timer);
         console.log("end intervel");
      }
   }, 1000)
}

function score(cValue) {
   let bubble = document.getElementById("bottomPanel");
   bubble.addEventListener("click", (e) => {
      // console.log(e);
      let uValue = Number(e.target.innerText);
      let isSameValue = cValue == uValue;
      if (isSameValue) {
         scoreValue++;
         document.getElementById("scoreBox").innerHTML = scoreValue;
         hitNumberGenerator();
         createBubble();
         score(randNum);
         // timer();
         // console.log("inside if",scoreValue);
      }
      // else{
      //    // console.log("wrong number",e);
      //    e.target.style.color = "red";
      // }

   });
}
createBubble();
hitNumberGenerator();
timer();
score(randNum);
