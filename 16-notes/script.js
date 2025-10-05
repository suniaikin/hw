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
	  createNoteElement(note) {
		  const newDiv = document.createElement("div");
		  newDiv.classList.add("note");
		  newDiv.dataset.color = note.color;
   },

	renderNotes(notes) {
		const root = document.getElementById("root");
		root.innerHTML = "";

		//пустой черновик
		const fragment = document.createDocumentFragment();
		
		notes.forEach((note) => {
			const noteElement = this.createNoteElement(note);
			fragment.appendChild(noteElement);
			
		})

	},
};

// controller

const controller = {
	init() {
		view.renderNotes(model.notes);
	},
};

controller.init();
