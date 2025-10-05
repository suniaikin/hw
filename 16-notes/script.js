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

	rootEl: document.getElementById("root"),


	// функция для создания элемента заметки
	createNoteElement(note) {

		const newDiv = document.createElement("div");
		newDiv.classList.add("note");
		newDiv.dataset.color = note.color;

		const titleEl = document.createElement("h3");
		titleEl.textContent = note.title;

		const textEl = document.createElement("p");
		textEl.textContent = note.text;

		newDiv.append(titleEl, textEl);

		return newDiv;
	},


	// функция для рендеринга всех заметок
	renderNotes(notes) {
		this.rootEl.innerHTML = "";

		// создаем фрагмент для оптимизации
		const fragment = document.createDocumentFragment();

		// перебираем массив заметок и создаем для каждой заметки элемент
		notes.forEach((note) => {
			const noteElement = this.createNoteElement(note);
			fragment.append(noteElement);

		})

		// добавляем фрагмент в корневой элемент за 1 раз
		this.rootEl.appendChild(fragment);

	},

};

// controller

const controller = {
	init() {
		view.renderNotes(model.notes);
	},
};

controller.init();