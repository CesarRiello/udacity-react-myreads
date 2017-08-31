import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">

        {(props.books || []).map(book => {
          // return book.shelf == props.shelf.slugName;
          // {console.log(book, book.shelf, props.shelf.slugName, book.shelf == props.shelf.slugName)}
          if(book.shelf == props.shelf.slugName) {
            return (<li> <Book book={book} key={book.id} /></li>)
          }
        })}

      </ol>
    </div>
  </div>)
};

export default BookShelf;
