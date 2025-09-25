const MOCK_TASKS = [
	{ id: 1, title: 'Изучить паттерн MVC', isDone: false },
	{ id: 2, title: 'Подготовить моковые данные', isDone: true },
];

// Model  хранение данных, бизнес-логика
const model = {
	tasks: [...MOCK_TASKS],

	addTask(title) {
		const newTask = {
			id: Date.now(),
			title: title,
			isDone: false,
		};
		this.tasks.push(newTask);
	},

	deleteTask(id) {
		this.tasks = this.tasks.filter(task => task.id !== id);
	},

	toggleTask(id) {
		const task = this.tasks.find(task => task.id === id);
		if (task) {
			task.isDone = !task.isDone;
		}
	},
};

// View - отображение данных, размещение обработчиков событий
const view = {
	list: document.querySelector('.list'),
	addForm: document.querySelector('.add-form'),
	input: document.querySelector('.add-form input'),

	renderTasks(tasks) {
		this.list.innerHTML = ''; // Очищаем старый список

		for (const task of tasks) {
			const li = document.createElement('li');
			const title = document.createElement('b');
			const deleteButton = document.createElement('button');

			li.id = task.id;
			if (task.isDone) {
				li.classList.add('done');
			}
			title.className = 'task-title';
			title.textContent = task.title;

			deleteButton.className = 'delete-button';
			deleteButton.type = 'button';
			deleteButton.textContent = 'Удалить 🗑';

			// --- Обработчики событий ---
			deleteButton.addEventListener('click', (event) => {
				event.stopPropagation();
				controller.handleDeleteTask(task.id);
			});

			li.addEventListener('click', () => {
				controller.handleToggleTask(task.id);
			});

			li.append(title, deleteButton);
			this.list.append(li);
		}
	},
};

// Controller - обработка действий пользователя, обновление модели
const controller = {
	init() {
		view.renderTasks(model.tasks);

		view.addForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const newTitle = view.input.value.trim();
			if (newTitle) {
				this.handleAddTask(newTitle);
				view.input.value = '';
			}
		});
	},

	handleAddTask(title) {
		model.addTask(title);
		view.renderTasks(model.tasks);
	},

	handleDeleteTask(id) {
		model.deleteTask(id);
		view.renderTasks(model.tasks);
	},

	handleToggleTask(id) {
		model.toggleTask(id);
		view.renderTasks(model.tasks);
	},
};

controller.init();