// Model - storage
const model = {
	tasks: [
		{ id: 1, title: 'Изучить HTML', isDone: true },
		{ id: 2, title: 'Изучить CSS', isDone: true },
		{ id: 3, title: 'Изучить JavaScript', isDone: false }
	],

	deleteTask(id) {
		this.tasks = this.tasks.filter(task => task.id !== id);
	},

	addTask(title) {
		const newTask = {
			id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
			title,
			isDone: false
		};
		this.tasks.push(newTask);
	},

	toggleTaskStatus(id) {
		this.tasks = this.tasks.map(task => {
			// if (task.id === id) {
			// 	return { ...task, isDone: !task.isDone };
			// } else {
			// 	return task;
			// }
			return task.id === id ? { ...task, isDone: !task.isDone } : task;
		})
	}

};
// View
const view = {

	list: document.querySelector('.list'),
	addForm: document.querySelector('.add-form'),
	input: document.querySelector('.add-form input'),

	renderTasks(tasks) {

		this.list.innerHTML = '';

		for (const task of tasks) {

			const li = document.createElement('li');

			li.dataset.id = task.id;

			const titleElement = document.createElement('span');
			titleElement.textContent = task.title;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Удалить';

			deleteButton.addEventListener('click', (event) => {
				const li = event.target.closest('li');
				const idToDelete = Number(li.dataset.id);
				controller.handleDeleteTask(idToDelete);
			});

			li.addEventListener('click', () => {
				controller.handleToggleTask(task.id);
			});

			if (task.isDone) {
				li.classList.add('done');
			}

			li.append(titleElement, deleteButton);
			this.list.append(li);
		}
	}
};

// Controller

const controller = {
	init() {
		view.renderTasks(model.tasks);
		view.addForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const newTitle = view.input.value.trim();
			if (newTitle) {
				controller.handleAddTask(newTitle);
			}

		});

	},

	handleDeleteTask(id) {
		model.deleteTask(id);
		view.renderTasks(model.tasks);
	},

	handleAddTask(title) {
		model.addTask(title);
		view.input.value = '';
		view.renderTasks(model.tasks);
	},

	handleToggleTask(id) {
		model.toggleTaskStatus(id);
		view.renderTasks(model.tasks);
	}


};

controller.init();