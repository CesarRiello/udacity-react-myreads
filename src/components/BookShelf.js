import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.shelf.books.map(book => {
          console.log(book)
          return (<li> <Book book={book} /></li>)
        })}
      </ol>
    </div>
  </div>)
};

export default BookShelf;
