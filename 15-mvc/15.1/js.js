tasksHTML += `
     <div class="task" id="${task.id}">
        <div class="box">
          <div class="${task.isDone ? 'doneMark' : 'pendingMark'}">
	        ${task.isDone ? '☑️' : '🔳'}
          </div >
	      <li class="${task.isDone ? 'done' : ''}">
	        <b class="task-title">${task.title}</b>
	      </li>
        </div >    
        <button class="delete-button" type="button">
          ✖
        </button>     
    </div>