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
};

// VIEW

const view = {

	// Корневой элемент для рендеринга заметок
	rootEl: document.getElementById("root"),


	// Создание элементов заметки
	// _функция для создания элемента заметки
	createNoteElement(note) {

		// __html элементы заметки
		const noteEl = document.createElement("div") // контейнер заметки
		const titleEl = document.createElement("h3") // заголовок заметки
		const textEl = document.createElement("p") // текст заметки
		const controlsEl = document.createElement("div") // контейнер для кнопок
		const favoriteBtn = document.createElement("button") // кнопка "Избранное"
		const deleteBtn = document.createElement("button") // кнопка "Удалить"

		// __css классы для стилизации отрисовки заметки
		noteEl.classList.add("note")
		noteEl.classList.add(`note--${note.color}`); // класс для цвета заметки, чтобы задавать и менять цвет через CSS
		controlsEl.classList.add("note-controls");
		favoriteBtn.classList.add("note-favorite");
		deleteBtn.classList.add("note-delete");

		// __attributes установка атрибутов
		noteEl.dataset.id = note.id; // атрибут data-id для управления заметками

		// __content заполнение элементов контентом из объекта заметки
		titleEl.textContent = note.title;
		textEl.textContent = note.text;
		favoriteBtn.textContent = note.isFavorite ? "★" : "☆"; // заполнение кнопки "Избранное" в зависимости от состояния
		deleteBtn.textContent = "🗑"; // иконка мусорной корзины для кнопки "Удалить"

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

// controller

const controller = {
	init() {
		view.renderNotes(model.notes);
	},
};

controller.init();