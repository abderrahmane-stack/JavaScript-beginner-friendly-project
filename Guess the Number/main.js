let guessnumber = Math.floor((Math.random() * 100) + 1);

const guessInput =document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuessBtn');
const attempts =document.getElementById('attempts');
const feedback=document.getElementById('feedback');
const restartBtn=document.getElementById('restartBtn');
counter = 0;
submitGuessBtn.addEventListener('click',function() {
   counter+=1;
   if (guessInput.value>guessnumber) {feedback.innerHTML='low'}
   if (guessInput.value<guessnumber) {feedback.innerHTML='high'}
   if (guessInput.value==guessnumber) {
    feedback.innerHTML='correct guess';
    restartBtn.style.display='block';
    submitGuessBtn.style.display='none';


  }
   
   attempts.innerHTML =counter;
   guessInput.value='';
   

});
restartBtn.addEventListener('click',function(){
  location.reload();
});
