const model = {
	courseData: {
		title: "Course Title",
		lessons: [
			{ id: 1, title: "Introduce to JavaScript", isDone: false },
			{ id: 2, title: "JavaScript Data Structure", isDone: false },
			{ id: 3, title: "JavaScript Functions", isDone: false },
			{ id: 4, title: "JavaScript Object", isDone: false },
			{ id: 5, title: "JavaScript Array", isDone: false },
			{ id: 6, title: "JavaScript DOM", isDone: false }
		]
	},

	render() {
		document.body.innerHTML = '';
		console.log(this.courseData);
	},

	createLesson(lessonTitle) {
		const newLesson = {
			id: this.courseData.lessons.length + 1,
			title: lessonTitle,
			isDone: false
		};
		this.courseData.lessons.push(newLesson);
		this.render();
	},

	updateLessonStatus(lessonId) {
		// const lesson = this.courseData.lessons.map(lesson => lesson.id === lessonId ? { ...lesson, isDone: !lesson.isDone } : lesson);

		// const lesson = this.courseData.lessons.map(lesson => {
		// 	if (lesson.id === lessonId) {
		// 		return { ...lesson, isDone: !lesson.isDone };
		// 	} return lesson;
		// });

		const lesson = this.courseData.lessons.find(lesson => lesson.id === lessonId);
		if (lesson) {
			lesson.isDone = !lesson.isDone;
		}
		this.courseData.lessons = lesson;
		this.render();
	},

	deleteLesson(lessonId) {
		this.courseData.lessons = this.courseData.lessons.filter(lesson => lesson.id !== lessonId);
		this.render();
	}
}

function init() {
	model.render();
}

init();