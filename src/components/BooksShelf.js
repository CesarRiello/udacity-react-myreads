import React from 'react'
import Book from './Book'

const BooksShelf = (shelf) => {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {shelf.books.maps(book => {
        return (<li> <Book book={book} /></li>)
      })}
      </ol>
    </div>
  </div>)
};

export default BooksShelf;
