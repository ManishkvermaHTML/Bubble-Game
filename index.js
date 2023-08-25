function createBubble(){
let createBubble = "";
for(let i = 0; i<=108; i++){
   let randNum = Number(Math.floor((0 + (10-0))*Math.random()));
   createBubble += `<div class="bubble">${randNum}</div>`;
}
document.querySelector("#bottomPanel").innerHTML = createBubble;    
}

function hitNumber(){
   let randNum = Number(Math.floor((0 + (10-0))*Math.random()));
   document.querySelector("#hitNumber").innerHTML = randNum;
}

function timer(){
   var time = 60;
   let timer = setInterval(()=>{
      if(time > 0){
         time--;
         document.getElementById("timer").innerHTML = time;
      }
      else{
         clearInterval(timer);
         console.log("end intervel");
      }
   },1000)
}

createBubble();
hitNumber();
timer();