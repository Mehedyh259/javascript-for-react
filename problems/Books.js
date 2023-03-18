/* 
Given an array of objects representing books, write a function that returns a new array containing only the books that are in stock and have a rating of at least 4.0
*/

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4.0,
    inStock: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.5,
    inStock: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 3.9,
    inStock: false,
  },
  { title: "1984", author: "George Orwell", rating: 4.3, inStock: true },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.9,
    inStock: false,
  },
];

// const authors = books.map(book => book.title)
// console.log(authors)

// const book = books.find(b => b.rating === 3.9)
// console.log(book)

const myBooks = books.filter(b => b.rating >=4.0 && b.inStock === true)
console.log(myBooks)

