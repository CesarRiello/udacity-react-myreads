import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';

const BookSearch = (props) => {
  return (<div className="search-books">
    <div className="search-books-bar">
        <Link className="close-search" to="">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={e => props.search(e.target.value)} />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {(props.booksResult || []).map(book => {
            return (<Book book={book} key={book.id} updateShelves={props.updateShelves} />)
          })}
        </ol>
      </div>
    </div>);
};

export default BookSearch;
