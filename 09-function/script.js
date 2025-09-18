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

function logBooksAuthors (books) {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        console.log(book.author)
    }
}

logBooksAuthors(favoriteBooks)

const logBookAuth = (books) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        console.log(book.author)
    }
}

logBookAuth(favoriteBooks)

function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => a + b;


const cheapBooks = (books) => {
    for(let i = 0; i < books.length; i++) {
        const book = books[i]
        if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`)
    }}
}

cheapBooks(favoriteBooks)
