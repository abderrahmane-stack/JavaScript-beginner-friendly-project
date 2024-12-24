const display= document.getElementById('display') ;
const startBtn = document.getElementById('startBtn') ;
const pauseBtn = document.getElementById('pauseBtn') ;
const resetBtn = document.getElementById('resetBtn') ;

let running = false;
let milliseconds=0;
let timer;
function timeFormat(milliseconds) {
  insecond=Math.floor(milliseconds/1000);
  min=Math.floor(insecond/60);
  seconds=insecond%60;
  milli=Math.floor((milliseconds%1000)/10);
  return `${min.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milli.toString().padStart(2, '0')}`;
}
startBtn.addEventListener('click', () =>{
  if(!running){
    running = true;
      timer = setInterval(() =>{
      milliseconds+=10;
      display.innerHTML=timeFormat(milliseconds);
      
    },10);

  }

});
pauseBtn.addEventListener('click', () =>{
    running=false;
    clearInterval(timer);

});

resetBtn.addEventListener('click', () =>{
  running=false;
  clearInterval(timer);
  display.innerHTML = '00.00.00';
});



