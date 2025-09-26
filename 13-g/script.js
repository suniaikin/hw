// Model - storage
const model = {
	tasks: [
		{ id: 1, title: 'Изучить HTML', isDone: true },
		{ id: 2, title: 'Изучить CSS', isDone: true },
		{ id: 3, title: 'Изучить JavaScript', isDone: false }
	]
};

deleteTask(id) {
	// Мы создаём новый массив, в который попадают все задачи,
	// КРОМЕ той, у которой id совпадает с тем, что мы хотим удалить.
	this.tasks = this.tasks.filter(task => task.id !== id);
}

// View
const view = {
	list: document.querySelector('.list'),
	renderTasks(tasks) {
		this.list.innerHTML = '';
		for (const task of tasks) {
			const li = document.createElement('li');
			li.id = task.id;
			li.textContent = task.title;
			if (task.isDone) {
				li.classList.add('done');
			}
			this.list.append(li);
		}
	}
};

// Controller

const controller = {
	init() {
		view.renderTasks(model.tasks);
	}
};

controller.init();