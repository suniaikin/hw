const favoriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming',
  },
  {
    id: 2,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 39.99,
    genre: 'Programming',
  },
  {
    id: 3,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    price: 19.99,
    genre: 'Fantasy',
  },
]

// Function expression
const printBookAuthors = function(books) {
	for (let i = 0; i < books.length; i++) {
		const book = books[i];
		console.log(book.author);
	}
}

printBookAuthors(favoriteBooks)

//Функциональное выражение создается в момент исполнения кода.
// Это означает, что функция будет объявлена и доступна только после того,
// как интерпретатор дойдет до этой строки кода.

// В отличие от объявления функций (function declaration),
// всплытие (hoisting) здесь не происходит.
// Попытка вызвать printBookAuthors до объявления приведёт к ошибке.