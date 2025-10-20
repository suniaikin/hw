const model = {
	courseData: {
		title: "Содержание курса",
		lessons: [
			{ id: 1, title: "Введение в JavaScript", isDone: false },
			{ id: 2, title: "Операторы, сравнение, ветвление", isDone: false },
			{ id: 3, title: "Функции", isDone: false },
			{ id: 4, title: "Массивы", isDone: false },
			{ id: 5, title: "Объекты", isDone: false }
		].map((lesson, index) => ({ ...lesson, originalIndex: index }))
	},

	display() {
		document.body.querySelector('.course-container')?.remove();
		const view = courseView(this.courseData, this);
		document.body.append(view);
	},

	deleteLesson(lessonId) {
		this.courseData.lessons = this.courseData.lessons.filter(lesson => lesson.id !== lessonId);
		this.display();
	},

	createLesson(lessonTitle) {
		const trimmedTitle = lessonTitle.trim();
		if (!trimmedTitle) return;
		const maxId = this.courseData.lessons.reduce((max, lesson) => Math.max(lesson.id, max), 0);

		const newLesson = {
			id: maxId + 1,
			title: trimmedTitle,
			isDone: false,
			originalIndex: this.courseData.lessons.length // 
		};

		this.courseData.lessons.unshift(newLesson);
		this.display();
	},

	updateLessonStatus(lessonId) {
		const lessons = this.courseData.lessons;
		const lesson = lessons.find(lesson => lesson.id === lessonId);

		if (lesson) {
			lesson.isDone = !lesson.isDone;
		}


		lessons.sort((a, b) => {
			if (a.isDone !== b.isDone) {
				return a.isDone - b.isDone;
			}
			return a.originalIndex - b.originalIndex;
		});

		this.display();
	}
};


function courseView(data, controller) {
	const container = document.createElement('div');
	container.classList.add('course-container');

	const listTitle = document.createElement('h1');
	listTitle.classList.add('list-title');
	listTitle.textContent = data.title;

	const list = document.createElement('ol');
	list.classList.add('list');

	data.lessons.forEach(lesson => {
		const listItem = document.createElement('li');
		listItem.classList.add('list-item');

		const lessonTitle = document.createElement('span');
		lessonTitle.classList.add('lesson-title');
		lessonTitle.textContent = lesson.title;
		if (lesson.isDone) {
			lessonTitle.classList.add('done');
		}

		const doneButton = document.createElement('button');
		doneButton.classList.add('button', 'done-button');
		doneButton.dataset.id = lesson.id;
		doneButton.textContent = lesson.isDone ? '✔' : '✔';
		if (lesson.isDone) {
			doneButton.classList.add('completed');
		}
		doneButton.addEventListener('click', (e) => {
			const lessonId = Number(e.target.dataset.id);
			controller.updateLessonStatus(lessonId);
		});

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('button', 'delete-button');
		deleteButton.dataset.id = lesson.id;
		deleteButton.textContent = '✖';
		deleteButton.addEventListener('click', (e) => {
			const lessonId = Number(e.target.dataset.id);
			controller.deleteLesson(lessonId);
		});

		const buttonGroup = document.createElement('div');
		buttonGroup.classList.add('button-group');
		buttonGroup.append(doneButton, deleteButton);
		listItem.append(lessonTitle, buttonGroup);
		list.append(listItem);
	});

	// Форма для добавления нового урока
	const addForm = document.createElement('form');
	addForm.classList.add('add-form');
	addForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const input = e.target.querySelector('input');
		controller.createLesson(input.value);
		input.value = '';
	});

	const input = document.createElement('input');
	input.classList.add('input');
	input.type = 'text';
	input.placeholder = 'Название нового урока';

	const addButton = document.createElement('button');
	addButton.classList.add('add-button');
	addButton.type = 'submit';
	addButton.textContent = 'Добавить урок';

	addForm.append(input, addButton);
	container.append(listTitle, addForm, list);
	return container;
}

// Первый вызов для отрисовки интерфейса
model.display();