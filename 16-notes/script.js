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
	rootEl: document.getElementById("root"),


	// Создание элементов заметки
	// _функция для создания элемента заметки
	createNoteElement(note) {








		// __html элементы заметки
		const noteEl = document.createElement("div")
		const titleEl = document.createElement("h3")
		const textEl = document.createElement("p")
		const controlsEl = document.createElement("div")
		const favoriteBtn = document.createElement("button")
		const deleteBtn = document.createElement("button")

		// __css классы для стилизации отрисовки
		noteEl.classList.add("note")
		noteEl.classList.add(`note--${note.color}`);
		controlsEl.classList.add("note-controls");
		favoriteBtn.classList.add("note-favorite");
		deleteBtn.classList.add("note-delete");

		// __attributes установка атрибутов
		noteEl.dataset.id = note.id;

		// __content заполнение элементов контентом из объекта заметки
		titleEl.textContent = note.title;
		textEl.textContent = note.text;
		favoriteBtn.textContent = note.isFavorite ? "★" : "☆";
		deleteBtn.textContent = "🗑";

		// __append добавление элементов в DOM
		controlsEl.append(favoriteBtn, deleteBtn);
		noteEl.append(titleEl, controlsEl, textEl);

		return noteEl;
	},

	// Функция для рендеринга всех заметок
	renderNotes(notes) {

		// _очистка корневого элемента перед рендерингом
		this.rootEl.innerHTML = "";

		// _фрагмент для временного хранения элементов заметок
		const fragment = document.createDocumentFragment();

		// _перебор массива заметок
		notes.forEach((note) => {
			const noteElement = this.createNoteElement(note);
			fragment.append(noteElement);

		})

		// _добавление фрагмента с заметками в корневой элемент
		this.rootEl.append(fragment);

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
		// view.rootEl.addEventListener("click", (event) => {
		// 	const target = event.target
		// 	const noteEl = event.target.closest(".note");
		// 	if (!noteEl) return;
		// 	if (target.closest(".note-delete")) {
		// 		const idToDelete = noteEl.dataset.id;
		// 		this.handleDeleteNote(Number(idToDelete));
		// 	}

		// })
		view.rootEl.addEventListener("click", (event) => {
			const clickedElement = event.target;
			if (clickedElement.classList.contains('note-delete')) {
				const noteElement = clickedElement.closest('.note');
				const noteId = Number(noteElement.dataset.id);
				this.handleDeleteNote(noteId);
			}
		})
	},

	handleDeleteNote(id) {
		model.deleteNote(id);
		view.renderNotes(model.notes);
	}
};











// Инициализация приложения
controller.init();