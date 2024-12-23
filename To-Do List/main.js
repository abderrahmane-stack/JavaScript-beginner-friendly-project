const taskInput =document.getElementById('taskInput');
const addTaskBtn= document.getElementById('addTaskBtn');
const taskList= document.getElementById('taskList');


addTaskBtn.onclick = function(){
  if (taskInput.value){
    let newTask =document.createElement('li');
    let deletebtn = document.createElement('button');
    deletebtn.innerHTML='Delete';
    deletebtn.classList.add('delete-btn');
    
    deletebtn.addEventListener('click',
      function() {
        taskList.removeChild(newTask);
        });
    
    newTask.innerHTML=taskInput.value
    newTask.appendChild(deletebtn);
    
    taskList.appendChild(newTask);
    


    taskInput.value='';
    
  }
  
}



