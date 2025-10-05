// model

const model = {
	notes: [
		{
			id: 1,
			title: "Flexbox (CSS)",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			color: "#fcca78", // Желтый
			isFavorite: true,
		},
		{
			id: 2,
			title: "Объекты (JavaScript)",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			color: "#b2e597", // Зеленый
			isFavorite: false,
		},
	],
};

// view

const view = {



	// функция для создания элемента заметки
	createNoteElement(note) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("note");
		newDiv.dataset.color = note.color;
	},



	// функция для рендеринга всех заметок
	renderNotes(notes) {
		const root = document.getElementById("root");
		root.innerHTML = "";

		// создаем фрагмент для оптимизации
		const fragment = document.createDocumentFragment();

		// перебираем массив заметок и создаем для каждой заметки элемент
		notes.forEach((note) => {
			const noteElement = this.createNoteElement(note);
			fragment.append(noteElement);

		})

		// добавляем фрагмент в корневой элемент за 1 раз
		root.appendChild(fragment);

	},

};

// controller

const controller = {
	init() {
		view.renderNotes(model.notes);
	},
};

controller.init();