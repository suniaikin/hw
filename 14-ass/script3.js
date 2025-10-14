document.body.innerHTML = `
  <form id="add-book-form">
    <input type="text" id="book-title" placeholder="Название книги">
    <input type="text" id="book-author" placeholder="Автор">
    <button type="submit">Добавить книгу</button>
  </form>
  <ul id="books-list"></ul>
`
const model = {
	books: [],
	addBook(title, author) {
		this.books.push({ title, author, id: Math.random() })
		view.render(this.books)
	},
	deleteBook(id) {
		this.books = this.books.filter((book) => book.id !== id)
		view.render(this.books)
	},
}
const view = {
	init() {
		const form = document.getElementById('add-book-form')
		form.addEventListener('submit', function (event) {
			event.preventDefault()
			const titleInputElement = document.getElementById('book-title')
			const authorInputElement = document.getElementById('book-author')
			const titleText = titleInputElement.value.trim()
			const authorText = authorInputElement.value.trim()
			controller.addBook(titleText, authorText)
			titleInputElement.value = ''
			authorInputElement.value = ''
		})
		const booksList = document.getElementById('books-list')
		booksList.addEventListener('click', function (event) {
			if (event.target.className === 'delete-book') {
				const bookId = parseFloat(event.target.parentNode.id)
				controller.deleteBook(bookId)
			}
		})
		this.render(model.books)
	},
	render(books) {
		let booksHTML = ''
		books.forEach((book) => {
			booksHTML += `<li id="${book.id}">
      "${book.title}" by ${book.author}
      <button class="delete-book">Delete</button>
    </li>`
		})
		document.getElementById('books-list').innerHTML = booksHTML
	},
}
const controller = {
	addBook(title, author) {
		if (title && author) {
			// XXX

		}
	},
	deleteBook(id) {
		model.deleteBook(id)
	},
}
document.addEventListener('DOMContentLoaded', () => view.init())