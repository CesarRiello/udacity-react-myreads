import React from 'react'
import BookActions from './BookActions'

const Book = (props) => {
  return (<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{props.book.imageLinks.thumbnail}")' }}></div>
      <div className="book-shelf-changer">
        <BookActions />
      </div>
    </div>
    <div className="book-title">{pros.book.title}</div>
    <div className="book-authors">{pros.book.authors}</div>
  </div>);
};

export default Book;
