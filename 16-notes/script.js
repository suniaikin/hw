// данные приложения
const model = {
	notes: [
		{ id: 1, title: 'Flexbox (CSS)', text: 'Lorem ipsum dolor sit amet...', color: '#F8D775', isFavorite: true },
	],
}

// находим контейнер для приложения
const app = document.getElementById('app');


// render function
function render() {
	app.innerHTML = ''; // очищаем содержимое контейнера
	const notesToRender = model.notes; // получаем заметки из модели
	const notesContainer =

}

function createNotesContainer(notes) {
	const container = document.createElement('div');
	return container;
}