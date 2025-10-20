
// const MOCK_TASKS = [
// 	{ id: 1, title: 'Learn MVC Pattern', isDone: false, rowNumber: 0 },
// 	{ id: 2, title: 'Prepare mocking data', isDone: true, rowNumber: 1 }
// ]

const model = {
	tasks: [],
	rowNumber: 1,

	addTask(title) {
		const task = {
			id: new Date().getTime(),
			title: title,
			isDone: false,
			rowNumber: this.rowNumber++
		}
		const targetIndex = this.tasks.findIndex(task => task.isDone)
		if (targetIndex < 0) {
			this.tasks.push(task)
		} else {
			this.tasks.splice(targetIndex, 0, task)
		}
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
		view.showNotification('Задача добавлена')
	},

	toggleTask(taskId) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === taskId) {
				task.isDone = !task.isDone
			}
			return task
		})
		this.sortTasks()
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
	},

	sortTasks() {
		this.tasks.sort((a, b) => {
			if (a.isDone !== b.isDone) {
				return a.isDone - b.isDone
			}
			return a.rowNumber - b.rowNumber
		})
	},

	deleteTask(taskId) {
		this.tasks = this.tasks.filter((task) => task.id !== taskId)
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
	},

	deleteDoneTasks() {
		this.tasks = this.tasks.filter((task) => !task.isDone)
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
	},

	deletePendingTasks() {
		this.tasks = this.tasks.filter((task) => task.isDone)
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
	},

	deleteAllTasks() {
		this.tasks = []
		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
	},

}


const view = {
	init() {

		this.allValue = document.querySelector('.all-value')
		this.doneValue = document.querySelector('.done-value')
		this.pendingValue = document.querySelector('.pending-value')

		this.ul = document.querySelector('.list')

		this.renderTasks(model.tasks)
		this.renderCounts(model.tasks)

		const form = document.querySelector('.form')
		const input = document.querySelector('.input')
		const counters = document.querySelector('.counters')


		form.addEventListener('submit', function (event) {
			event.preventDefault()
			const title = input.value
			controller.addTask(title)
			input.value = ''
		})


		this.ul.addEventListener('click', function (event) {
			if (event.target.closest('.doneMark, .pendingMark')) {
				const taskId = +event.target.closest('.task').id;
				controller.toggleTask(taskId);
			}

			if (event.target.closest('.delete-button')) {
				const taskId = +event.target.closest('.task').id
				controller.deleteTask(taskId)
			}
		})

		counters.addEventListener('click', function (event) {
			if (event.target.closest('.allCount')) {
				controller.deleteAllTasks()
			}

			if (event.target.closest('.doneCount')) {
				controller.deleteDoneTasks()
			}

			if (event.target.closest('.pendingCount')) {
				controller.deletePendingTasks()
			}

		})

	},

	renderCounts(tasks) {

		if (tasks.length === 0) {
			this.allValue.innerHTML = '0'
			this.doneValue.innerHTML = '0'
			this.pendingValue.innerHTML = '0'
		} else {
			this.allValue.innerHTML = `${tasks.length}`
			this.doneValue.innerHTML = `${tasks.filter((task) => task.isDone).length}`
			this.pendingValue.innerHTML = `${tasks.filter((task) => !task.isDone).length}`
		}

	},


	renderTasks(tasks) {

		let tasksHTML = ''

		if (tasks.length === 0) {
			tasksHTML = '<div class="empty-state">No tasks. Add a new one!<br>🚀'

		} else {
			for (let i = 0; i < tasks.length; i++) {
				const task = tasks[i]

				tasksHTML += `
     <div class="task" id="${task.id}">
        <div class="box">
          <div class="${task.isDone ? 'doneMark' : 'pendingMark'}">
            ${task.isDone ? '☑️' : '🔲'}
          </div >
          <div class="${task.isDone ? 'done' : ''}">
            <b class="task-title">${task.title}</b>
          </div>
        </div >    
        <button class="delete-button" type="button">
          ✖
        </button>     
    </div >
	`
			}
		}

		this.ul.innerHTML = tasksHTML
	},

	showNotification(message) {
		const container = document.querySelector('#notifications')
		const notification = document.createElement('div')
		notification.className = 'notification'
		notification.textContent = message

		container.append(notification)

		setTimeout(() => {
			notification.remove()
		}, 2000)
	}
}

const controller = {
	waiting: document.querySelector('.waiting'),
	addTask(title) {
		if (title && title.trim() !== '') {
			this.waiting.textContent = '✍️Updating...'
			setTimeout(() => {
				this.waiting.textContent = ''
				model.addTask(title)
			}, 500)
		}
	},

	toggleTask(taskId) {
		model.toggleTask(taskId)
	},

	deleteTask(taskId) {
		model.deleteTask(taskId)
	},

	deleteDoneTasks() {
		model.deleteDoneTasks()
	},

	deleteAllTasks() {
		model.deleteAllTasks()
	},

	deletePendingTasks() {
		model.deletePendingTasks()
	},

	updateAllValue() {
		model.updateAllValue()
	},

	updateDoneValue() {
		model.updateDoneValue()

	},

	updatePendingValue() {
		model.updatePendingValue()
	},



}


view.init()
