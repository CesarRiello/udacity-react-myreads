import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">

        {(props.books || []).map((book, index) => {
          if(book.shelf === props.shelf.slugName) {
            return (<Book book={book} key={book.id} updateShelves={props.updateShelves} />)

          }
        })}

      </ol>
    </div>
  </div>)
};

export default BookShelf;
