
const MOCK_TASKS = [
	{ id: 1, title: 'Learn MVC Pattern', isDone: false },
	{ id: 2, title: 'Prepare mocking data', isDone: true }
]

const model = {
	tasks: MOCK_TASKS,

	addTask(title) {
		const task = {
			id: new Date().getTime(),
			title: title,
			isDone: false
		}
		this.tasks.push(task)
		view.renderTasks(this.tasks)
	},

	toggleTask(taskId) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === taskId) {
				task.isDone = !task.isDone
			}
			return task
		})
		view.renderTasks(this.tasks)
	},

	deleteTask(taskId) {
		this.tasks = this.tasks.filter((task) => task.id !== taskId)
		view.renderTasks(this.tasks)
	},

	deleteDoneTask() {
		this.tasks = this.tasks.filter((task) => task.isDone !== true)
		view.renderTasks(this.tasks)
	}
}

const view = {
	init() {
		this.renderTasks(model.tasks)

		const form = document.querySelector('.form')
		const input = document.querySelector('.input')
		const ul = document.querySelector('.list')
		const deleteDone = document.querySelector('.clean-button')

		form.addEventListener('submit', function (event) {
			event.preventDefault()
			const title = input.value
			controller.addTask(title)
			input.value = ''
		})

		deleteDone.addEventListener('click', function () {
			controller.deleteDoneTask()
		}


		)


		ul.addEventListener('click', function (event) {
			if (event.target.classList.contains('task-title')) {
				const taskId = +event.target.parentElement.id
				controller.toggleTask(taskId)
			}

			if (event.target.classList.contains('delete-button')) {
				const taskId = +event.target.parentElement.id
				controller.deleteTask(taskId)
			}
		})
	},

	renderTasks(tasks) {
		let tasksHTML = ''

		if (tasks.length === 0) {
			tasksHTML = '<div class="empty-state">No task. Add a new one!</div>'
		} else {
			for (let i = 0; i < tasks.length; i++) {
				const task = tasks[i]

				tasksHTML += `
        <li id="${task.id}" class="${task.isDone ? 'done' : ''}">
          <b class="task-title">${task.title}</b>
          <button class="delete-button" type="button">Delete 🗑</button>
	     </li>
                `
			}
		}

		const ul = document.querySelector('.list')
		ul.innerHTML = tasksHTML
	}
}

const controller = {
	addTask(title) {
		if (title && title.trim() !== '') {
			model.addTask(title)
		}
	},

	toggleTask(taskId) {
		model.toggleTask(taskId)
	},

	deleteTask(taskId) {
		model.deleteTask(taskId)
	},

	deleteDoneTask() {
		model.deleteDoneTask()
	}
}


view.init()