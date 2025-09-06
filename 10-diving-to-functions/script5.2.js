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

/*
const getAuthors = (books) => {
	let authorsArray = [];
	for (let book of books) {
		authorsArray.push(book.author);
	} return authorsArray
}

const authors = getAuthors(favoriteBooks);
console.log(authors);


const getTitles = (books) => {
  let titlesArray = []
  books.forEach((book) => {
    titlesArray.push(book.title)
  } )
	return titlesArray
}

const titles = getTitles(favoriteBooks);
console.log(titles);
*/


const getValuesFrom = (array, propertyName) => {
  const newArray = array.map((item) => {
    return item[propertyName];
  })
  return newArray
}

let out = getValuesFrom(favoriteBooks, 'author')

console.log(out);