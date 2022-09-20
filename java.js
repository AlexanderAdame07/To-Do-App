
//Alert message if there is no input into text box, to put info in text box.

document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
    alert("Please enter Task!")
  }

//Buttons within tasks

  else{
    document.querySelector('#tasks').innerHTML += `
      <div class="task">
        <span id="taskname">
          ${document.querySelector('#newtask input').value}
        </span>
      <button class="delete" style="font-size:10px">X<i class="fa fa-remove">
      </i></button>

      <input type="checkbox" class ="finished" style="font-size:12px"><i class="fa fa-toggle-off">
      </i></checkbox>
      </div>`;
      
  var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
      this.parentElement.remove();
      }
    }

  var strike_tasks = document.querySelectorAll(".finished");
    for(var i=0; i<strike_tasks.length; i++){
      strike_tasks[i].onclick = function(){
      this.parentElement.style.setProperty("text-decoration", "line-through");
      }
    }
  }
}