const model = {
    courseData: {
        title: "Содержание курса",
        lessons: [
            {id: 1, title: "Введение в JavaScript", isDone: true },
            {id: 2, title: "Операторы, сравнение, ветвление", isDone: true },
            {id: 3, title: "Функции", isDone: false },
            {id: 4, title: "Массивы", isDone: false },
            {id: 5, title: "Объекты", isDone: false }
        ]
    },

    display () {
        // 1. Remove previous view
        console.clear()
        // 2. Create new view
        console.log(this.courseData);
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
    }


    //updateLessonStatus(){}
    //deleteLesson(){}
}

model.display()