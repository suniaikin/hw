const model = {
	courseData: {
		title: "Learn JavaScript",
		lessons: [
			{ "id": 1, "title": "Introduction to JavaScript", "isDone": true },
			{ "id": 2, "title": "Operators, comparison, branching", "isDone": true },
			{ "id": 3, "title": "Functions", "isDone": false },
			{ "id": 4, "title": "Arrays", "isDone": false },
			{ "id": 5, "title": "Objects", "isDone": false }
		]

	},
	render() {
		document.body.querySelector('div')?.remove();
		const view = courseView(this.courseData);

	},

	deleteLesson(id) {
		this.courseData.lessons = this.courseData.lessons.filter(lesson => lesson.id !== id);
		this.render();
	},

	markLesson(id) {
		const lesson = this.courseData.lessons.find(lesson => lesson.id === id);
		if (lesson) {
			lesson.isDone = !lesson.isDone;
			this.render();
		}
	},

	createLesson(title) {
		const newLesson = {
			id: Date.now(),
			title: title,
			isDone: false
		};
		this.courseData.lessons = [...this.courseData.lessons, newLesson];
		this.render();
	}

};

model.render();



function courseView(data) {
	// Wrapper for data representation
	const container = document.createElement('div');
	container.classList.add('container');
	// Title
	const listTitle = document.createElement('h1');
	listTitle.classList.add('title');

	listTitle.textContent = data.title;
	container.append(listTitle);
	// List
	const list = document.createElement('ol');
	list.classList.add('list');
	const lessons = data.lessons;
	// List items
	for (let i = 0; i < lessons.length; i++) {
		const lesson = document.createElement('li');
		lesson.classList.add('list-item');
		lesson.textContent = lessons[i].title;
		if (lessons[i].isDone) {
			lesson.classList.add('done');
		}
		// Delete button
		const deleteButton = document.createElement('button');
		deleteButton.classList.add('button', 'delete-button');
		deleteButton.textContent = '✖';
		// Toggle status on click
		// Append buttons
		lesson.append(deleteButton);
		list.append(lesson);
	}
	container.append(list);
	document.body.append(container);
	return container;
}	