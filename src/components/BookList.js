import React from 'react';
import BookShelf from './BookShelf';

const BookList = (props) => {
  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {(props.bookshelf || []).map(shelf => {
        return <BookShelf shelf={shelf} key={shelf.slugName} books={props.books} updateShelves={props.updateShelves} />
      })}
    </div>
    <div className="open-search">
      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>
  </div>);
};

export default BookList;
