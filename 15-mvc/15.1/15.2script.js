// constants
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

// model
const model = {
	tasks: [],
	rowNumber: 1,
	currentFilter: 'all', // 'all', 'done', 'pending'

	//filters
	getFilteredTasks() {
		if (this.currentFilter === 'done') {
			return this.tasks.filter(task => task.isDone)
		}
		if (this.currentFilter === 'pending') {
			return this.tasks.filter(task => !task.isDone)
		}
		return this.tasks
	},

	setFilter(filter) {
		this.currentFilter = filter
	},



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
	},

	toggleTask(taskId) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === taskId) {
				task.isDone = !task.isDone
			}
			return task
		})
		this.sortTasks()
		// Возвращаем задачу для уведомления
		return this.tasks.find(task => task.id === taskId)
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
	},

	deleteDoneTasks() {
		this.tasks = this.tasks.filter((task) => !task.isDone)
	},

	deletePendingTasks() {
		this.tasks = this.tasks.filter((task) => task.isDone)
	},

	deleteAllTasks() {
		this.tasks = []
	}
}

// ==================== VIEW ====================
// View ТОЛЬКО отображает данные, НЕ обращается к Model напрямую
const view = {
	init() {
		this.allValue = document.querySelector('.all-value')
		this.doneValue = document.querySelector('.done-value')
		this.pendingValue = document.querySelector('.pending-value')
		this.ul = document.querySelector('.list')
		this.waiting = document.querySelector('.waiting')

		const form = document.querySelector('.form')
		const input = document.querySelector('.input')
		const counters = document.querySelector('.counters')

		// Обработчик формы - передаем в Controller
		form.addEventListener('submit', function (event) {
			event.preventDefault()
			const title = input.value
			controller.addTask(title)
			input.value = ''
		})

		// Обработчик списка задач - передаем в Controller
		this.ul.addEventListener('click', function (event) {
			if (event.target.closest('.doneMark, .pendingMark')) {
				const taskId = +event.target.closest('.task').id
				controller.toggleTask(taskId)
			}

			if (event.target.closest('.delete-button')) {
				const taskId = +event.target.closest('.task').id
				controller.deleteTask(taskId)
			}
		})

		// Обработчик счетчиков - передаем в Controller
		counters.addEventListener('click', function (event) {
			// Удаление
			if (event.target.closest('.allCount')) {
				controller.deleteAllTasks()
				return
			}
			if (event.target.closest('.doneCount')) {
				controller.deleteDoneTasks()
				return
			}
			if (event.target.closest('.pendingCount')) {
				controller.deletePendingTasks()
				return
			}

			// Фильтрация
			if (event.target.closest('.counters-all')) {
				controller.setFilter('all')
			}
			if (event.target.closest('.counters-done')) {
				controller.setFilter('done')
			}
			if (event.target.closest('.counters-pending')) {
				controller.setFilter('pending')
			}
		})
	},

	// View принимает готовые данные и рисует
	renderCounts(allTasks) {
		if (allTasks.length === 0) {
			this.allValue.innerHTML = '0'
			this.doneValue.innerHTML = '0'
			this.pendingValue.innerHTML = '0'
		} else {
			this.allValue.innerHTML = `${allTasks.length}`
			this.doneValue.innerHTML = `${allTasks.filter((task) => task.isDone).length}`
			this.pendingValue.innerHTML = `${allTasks.filter((task) => !task.isDone).length}`
		}
	},

	// View принимает готовые отфильтрованные задачи и рисует
	renderTasks(filteredTasks) {
		let tasksHTML = ''

		if (filteredTasks.length === 0) {
			tasksHTML = `<div class="empty-state">${NOTIFICATION_TEXT.NO_TASKS}🚀</div>`
		} else {
			for (let i = 0; i < filteredTasks.length; i++) {
				const task = filteredTasks[i]
				tasksHTML += `
					<div class="task" id="${task.id}">
						<div class="box">
							<div class="${task.isDone ? 'doneMark' : 'pendingMark'}">
								${task.isDone ? '☑️' : '🔲'}
							</div>
							<div class="${task.isDone ? 'done' : ''}">
								<b class="task-title">${task.title}</b>
							</div>
						</div>    
						<button class="delete-button" type="button">✖</button>     
					</div>
				`
			}
		}

		this.ul.innerHTML = tasksHTML
	},

	// Подсвечиваем активный фильтр
	renderActiveFilter(filter) {
		document.querySelectorAll('.counters > div').forEach(el => {
			el.classList.remove('active-filter')
		})

		if (filter === 'all') {
			document.querySelector('.counters-all').classList.add('active-filter')
		} else if (filter === 'done') {
			document.querySelector('.counters-done').classList.add('active-filter')
		} else if (filter === 'pending') {
			document.querySelector('.counters-pending').classList.add('active-filter')
		}
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
	},

	showWaiting(isWaiting) {
		this.waiting.textContent = isWaiting ? '✍️Updating...' : ''
	}
}

// ==================== CONTROLLER ====================
// Controller - посредник между Model и View
const controller = {
	addTask(title) {
		if (title && title.trim() !== '') {
			view.showWaiting(true)

			setTimeout(() => {
				// 1. Изменяем данные в Model
				model.addTask(title)

				// 2. Обновляем View с данными из Model
				view.renderTasks(model.getFilteredTasks())
				view.renderCounts(model.tasks)
				view.showNotification(NOTIFICATION_TEXT.ADD_MESSAGE)
				view.showWaiting(false)
			}, 500)
		}
	},

	toggleTask(taskId) {
		// 1. Изменяем данные в Model
		const changedTask = model.toggleTask(taskId)

		// 2. Обновляем View с данными из Model
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)

		if (changedTask.isDone) {
			view.showNotification(NOTIFICATION_TEXT.TASK_DONE)
		} else {
			view.showNotification(NOTIFICATION_TEXT.TASK_RESTORED)
		}
	},

	deleteTask(taskId) {
		// 1. Изменяем данные в Model
		model.deleteTask(taskId)

		// 2. Обновляем View с данными из Model
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)
		view.showNotification(NOTIFICATION_TEXT.REMOVE_MESSAGE)
	},

	deleteDoneTasks() {
		// 1. Изменяем данные в Model
		model.deleteDoneTasks()

		// 2. Обновляем View с данными из Model
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)
		view.showNotification(NOTIFICATION_TEXT.DONE_DELETED)
	},

	deleteAllTasks() {
		// 1. Изменяем данные в Model
		model.deleteAllTasks()

		// 2. Обновляем View с данными из Model
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)
		view.showNotification(NOTIFICATION_TEXT.ALL_DELETED)
	},

	deletePendingTasks() {
		// 1. Изменяем данные в Model
		model.deletePendingTasks()

		// 2. Обновляем View с данными из Model
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)
		view.showNotification(NOTIFICATION_TEXT.PENDING_DELETED)
	},

	setFilter(filter) {
		// 1. Изменяем фильтр в Model
		model.setFilter(filter)

		// 2. Обновляем View с новыми отфильтрованными данными
		view.renderTasks(model.getFilteredTasks())
		view.renderActiveFilter(filter)
	},

	// Инициализация приложения
	init() {
		view.init()
		view.renderTasks(model.getFilteredTasks())
		view.renderCounts(model.tasks)
		view.renderActiveFilter(model.currentFilter)
	}
}

// ==================== ЗАПУСК ====================
controller.init()