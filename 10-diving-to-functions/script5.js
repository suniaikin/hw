// Callbacks
// Теперь напишем функцию, которая принимает массив книг
// и выводит в консоль цену и названия дешёвых книг (стоимостью меньше 30).
// Будем использовать синтаксис стрелочных функций.

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

const printCheapBooks  = (books) => {
	for (let i = 0; i < books.length; i++) {
		if (books[i]["price"] <= 30) {
			console.log(`Price of ${books[i]["title"]} is ${books[i]["price"]}`)
		}
	}
}



printCheapBooks(favoriteBooks)