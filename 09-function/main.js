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


// function logBooksAuthors(books) {
//     for (let i = 0; i < books.length; i++) {
//         const book = books[i];
//         //
//         console.log(book.author);
//     }
// }

// logBooksAuthors(favoriteBooks)



const logBooksAuthors = (books) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        //
        console.log(book.author);
    }
}

logBooksAuthors(favoriteBooks)



const logCheapBooks = (books) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        //
        if (book.price < 30) {
            console.log(`${book.title} - ${book.price}`);
        }
    }
}

logCheapBooks(favoriteBooks)

const processBooks = (books, callback) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        //
        callback(book)
    }
}

const logBookAuthor = b => console.log(b.author)

const logCheapBook = book => {
    if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`);
    }
}


// processBooks(favoriteBooks, b => console.log(b.author))
// processBooks(favoriteBooks, logCheapBook)


//forEach

favoriteBooks.forEach(b => console.log(b.author))
favoriteBooks.forEach(logCheapBook)

// filter (returns a new array) должен возвращать true или false
const cheapBooks = favoriteBooks.filter(b => b.price < 30)
console.log(cheapBooks);

//map (возвращает новый массив) - трансформирует элементы массива
const bookTitles = favoriteBooks.map(b => b.title)
// console.log(bookTitles);

const description = favoriteBooks.map(b => `${b.title} by ${b.author} - ${b.price}` )
// console.log(description);

// sell 

const cheapBooksSell = favoriteBooks.map(b => {
    if (b.price < 30) {
    }
    return b.price
})
// console.log(cheapBooksSell);

// reduce (сводит массив к одному значению)

const totalPrice = favoriteBooks.reduce((acc, book) => acc + book.price, 0)

console.log(totalPrice);


const number = [1, 2, 3, 4, 5]
const total = number.reduce((acc, n) => acc + n, 0)
console.log(total);

const cheapBooksReduce = favoriteBooks.reduce((acc, book) => {
    if (book.price < 30) {
        acc.push(book.author)
    }   
    return acc
}, [])
console.log(cheapBooksReduce);




// const booksByGenre = favoriteBooks.reduce((acc, book) =>    {

//     "programming": [{}, {}, {}],
//     "fantasy": [{}, {}]

// }
// ), {})

// console.log(booksByGenre);


// const gender = favoriteBooks.reduce((acc, book) => {
//     if (!acc[book.genre]) {
//         acc[book.genre] = []
//     }       

//     acc[book.genre].push(book)
//     return acc
// }, {})

// reduce

const genres = favoriteBooks.reduce((acc, b) => {
    const keys = Object.keys(acc)
    if (keys.includes(b.genre)) {
        acc[b.genre].push(b)
    } else {
        acc[b.genre] = []
        acc[b.genre].push(b)
    }
    return acc
}, {})

console.log(genres);
