const model = {
	courseData: {
		title: "Содержание курса",
		lessons: [
			{ id: 1, title: "Введение в JavaScript", isDone: true },
			{ id: 2, title: "Операторы, сравнение, ветвление", isDone: true },
			{ id: 3, title: "Функции", isDone: false },
			{ id: 4, title: "Массивы", isDone: false },
			{ id: 5, title: "Объекты", isDone: false }
		]
	},

	display() {
		// 1. Remove previous view
		document.body.innerHTML = '';

		// 2. Create new view
		const view = courseView(this.courseData);

		// 3. Show new view
		document.body.append(view)

	},

	deleteLesson(lessonId) {
		// 1. Change data
		this.courseData.lessons = this.courseData.lessons.filter(lesson => lesson.id !== lessonId);
		// 2. Update view
		this.display()
	},

	createLesson(lessonTitle) {
		// 1. Change data
		const newLesson = {
			id: 6,
			title: lessonTitle,
			isDone: false
		}
		this.courseData.lessons = [...this.courseData.lessons, newLesson]
		// 2. Update view
		this.display()
	},

	updateLessonStatus(lessonId) {
		// 1. Change data
		// const lesson = this.courseData.lessons.find(lesson => lesson.id === lessonId);
		// lesson.isDone = !lesson.isDone;
		this.courseData.lessons = this.courseData.lessons.map(lesson => lesson.id === lessonId ? { ...lesson, isDone: !lesson.isDone } : lesson);

		// 2. Update view
		this.display()
	}

}

model.display()

function courseView(data) {
	// обертка для представления данных
	const container = document.createElement('div');

	// заголовок
	const listTitle = document.createElement('h1');
	listTitle.classList.add('title');
	listTitle.setAttribute('id', 'course-title');
	listTitle.textContent = data.title;

	// список 
	const list = document.createElement('ol');
	const lessons = data.lessons;

	// элементы списка
	for (let i = 0; i < lessons.length; i++) {
		const lesson = document.createElement('li');
		lesson.classList.add('item');
		lesson.textContent = lessons[i].title;
		if (lessons[i].isDone) {
			lesson.classList.add('done');
		}
		list.append(lesson);
	}



	container.append(listTitle);
	container.append(list);
	return container




}
