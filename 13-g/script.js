// Model - storage
const model = {
	tasks: [
		{ id: 1, title: 'Изучить HTML', isDone: true },
		{ id: 2, title: 'Изучить CSS', isDone: true },
		{ id: 3, title: 'Изучить JavaScript', isDone: false }
	],

	deleteTask(id) {
		this.tasks = this.tasks.filter(task => task.id !== id);
	}
};



// View
const view = {

	list: document.querySelector('.list'),

	renderTasks(tasks) {

		this.list.innerHTML = '';

		for (const task of tasks) {

			const li = document.createElement('li');

			li.id = task.id;

			const titleElement = document.createElement('span');
			titleElement.textContent = task.title;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Удалить';

			deleteButton.addEventListener('click', () => {
				controller.handleDeleteTask(task.id);
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
	},

	handleDeleteTask(id) {
		model.deleteTask(id);
		view.renderTasks(model.tasks);
	}


};

controller.init();