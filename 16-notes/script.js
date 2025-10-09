// MODEL

// Константы

// _цвета заметок
const NOTE_COLORS = { // цвета заметок
	YELLOW: "yellow",
	GREEN: "green",
	BLUE: "blue",
	PINK: "pink",
	VIOLET: "violet",
}

// Модель данных

const model = {
	notes: [
		{
			id: 1,
			title: "Flexbox (CSS)",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			color: NOTE_COLORS.YELLOW,
			isFavorite: true,
		},
		{
			id: 2,
			title: "Объекты (JavaScript)",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			color: NOTE_COLORS.GREEN,
			isFavorite: false,
		},
	],

	deleteNote(id) {
		this.notes = this.notes.filter(note => note.id !== id);
	},
};

// VIEW

const view = {

	// Корневой элемент для рендеринга заметок
	rootElement: document.getElementById("root"),

	// Создание элементов заметки
	createNoteElement(note) {

		// базовый контейне
		const noteElement = document.createElement("div")
		noteElement.classList.add("noteElement")
		noteElement.classList.add(`noteElement--${note.color}`);
		noteElement.dataset.id = note.id;

		// заголовок
		const titleElement = document.createElement("h3")
		titleElement.textContent = note.title;

		//текст
		const textElement = document.createElement("p")
		textElement.textContent = note.text;

		// кнопочный контейнер 
		const controlsElement = document.createElement("div")
		controlsElement.classList.add("noteElement-controls");

		// кнопка Удаления
		const deleteButton = document.createElement("button")
		deleteButton.classList.add("noteElement-delete");
		deleteButton.textContent = "🗑";

		// кнопка в Избранное
		const favoriteButton = document.createElement("button")
		favoriteButton.classList.add("noteElement-favorite");
		favoriteButton.textContent = note.isFavorite ? "★" : "☆";

		// закинуть в DOM
		noteElement.append(titleElement, controlsElement, textElement);
		controlsElement.append(favoriteButton, deleteButton);

		return noteElement;
	},

	// Функция для рендеринга всех заметок
	renderNotes(notes) {

		// _очистка корневого элемента перед рендерингом
		this.rootElement.innerHTML = "";

		// _фрагмент для временного хранения элементов заметок
		const fragment = document.createDocumentFragment();

		// _перебор массива заметок
		notes.forEach((note) => {
			const noteElement = this.createNoteElement(note);
			fragment.append(noteElement);

		})

		// _добавление фрагмента с заметками в корневой элемент
		this.rootElement.append(fragment);

	},

};

// CONTROLLER

const controller = {
	// Инициализация приложения
	init() {
		view.renderNotes(model.notes);
		this.setupEventListeners();
	},

	// Прослушка событий
	setupEventListeners() {

		view.rootElement.addEventListener("click", (event) => {
			const clickedElement = event.target;
			const noteElement = clickedElement.closest('.noteElement');
			if (!noteElement) return;
			if (clickedElement.closest('.noteElement-delete')) {
				const noteId = Number(noteElement.dataset.id);
				this.handleDeleteNote(noteId);
			}
		});
	},

	handleDeleteNote(id) {
		model.deleteNote(id);
		view.renderNotes(model.notes);
	}
};











// Инициализация приложения
controller.init();