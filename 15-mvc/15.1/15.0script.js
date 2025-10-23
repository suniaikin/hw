// const MOCK_TASKS = [
// 	{ id: 1, title: 'Learn MVC Pattern', isDone: false, rowNumber: 0 },
// 	{ id: 2, title: 'Prepare mocking data', isDone: true, rowNumber: 1 }
// ]

const NOTIFICATION_TEXT = {
	ADD_MESSAGE: 'Task added',
	REMOVE_MESSAGE: 'Task deleted',
	TASK_DONE: 'Task completed!',
	TASK_RESTORED: 'Task restored',
	ALL_DELETED: 'All tasks deleted',
	DONE_DELETED: 'All completed tasks deleted',
	PENDING_DELETED: 'All pending tasks deleted',
	NO_TASKS: 'No tasks yet. Add one!'
}

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
		view.showNotification(NOTIFICATION_TEXT.ADD_MESSAGE)
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
		const changedTask = this.tasks.find(task => task.id === taskId)
		if (changedTask.isDone) {
			view.showNotification(NOTIFICATION_TEXT.TASK_DONE)
		} else {
			view.showNotification(NOTIFICATION_TEXT.TASK_RESTORED)
		}
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
		view.showNotification(NOTIFICATION_TEXT.REMOVE_MESSAGE)
	},

	deleteDoneTasks() {
		this.tasks = this.tasks.filter((task) => !task.isDone)

		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
		view.showNotification(NOTIFICATION_TEXT.DONE_DELETED)
	},

	deletePendingTasks() {
		this.tasks = this.tasks.filter((task) => task.isDone)

		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
		view.showNotification(NOTIFICATION_TEXT.PENDING_DELETED)
	},

	deleteAllTasks() {
		this.tasks = []

		view.renderTasks(this.tasks)
		view.renderCounts(this.tasks)
		view.showNotification(NOTIFICATION_TEXT.ALL_DELETED)

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
			tasksHTML = `<div class="empty-state">${NOTIFICATION_TEXT.NO_TASKS}🚀`

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
		if (message === NOTIFICATION_TEXT.ADD_MESSAGE) {
			notification.className = 'notification'
		} else if (message === NOTIFICATION_TEXT.REMOVE_MESSAGE) {
			notification.className = 'notification-delete'
		} else if (message === NOTIFICATION_TEXT.TASK_DONE) {
			notification.className = 'notification-done'
		} else if (message === NOTIFICATION_TEXT.TASK_RESTORED) {
			notification.className = 'notification-restored'
		} else if (message === NOTIFICATION_TEXT.ALL_DELETED) {
			notification.className = 'notification-delete-all'
		} else if (message === NOTIFICATION_TEXT.DONE_DELETED) {
			notification.className = 'notification-delete-done'
		} else if (message === NOTIFICATION_TEXT.PENDING_DELETED) {
			notification.className = 'notification-delete-pending'
		}
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
}


view.init()
