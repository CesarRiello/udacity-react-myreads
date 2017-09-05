import React from 'react'
import BookActions from './BookActions'

const Book = (props) => {

  return (<li className="book">
    <div className="book-top">

      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + props.book.imageLinks.smallThumbnail + ')' }}></div>
      <div className="book-shelf-changer">
        <BookActions shelf={props.book.shelf} book={props.book} updateShelves={props.updateShelves} />
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>

  </li>);
};

export default Book;
