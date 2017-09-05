import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
//import BooksShelf from './components/BooksShelf';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';

class BooksApp extends React.Component {
  state = {
    bookshelfs: [
      { title: 'Currently Reading',
        slugName: 'currentlyReading',
        books: [] },
      { title: 'Want to Read',
        slugName: 'wantToRead',
        books: [] },
      { title: 'Read',
        slugName: 'read',
        books: [] }
    ],
    books: [],
    booksResult: [],
    search: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  };

  updateBooks = (books, book) => {
    return books.map(_book => {
      return _book.id === book.id ? book : _book;
    });
  };

  updateShelves = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf)
    .then((result) => {
      //useless api result
      book.shelf = shelf;
      let _books = this.updateBooks(this.state.books, book);
      this.setState({_books});
    }).catch((e)=> {
      console.error(e);
    })
  };

  search = (query) => {
    if (query.length > 3) {
      BooksAPI.search(query)
        .then(booksResult => {
          if (booksResult.error) {
            console.error(booksResult.error);
            return;
          }
          this.setState({booksResult});
      }).catch((e)=> {
        console.error(e);
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <BookList bookshelf={this.state.bookshelfs} books={this.state.books} updateShelves={this.updateShelves}/>
        } />

        <Route path="/search" render={() =>
          <BookSearch search={this.search} booksResult={this.state.booksResult} updateShelves={this.updateShelves} />
        } />
      </div>
    )
  };

}

export default BooksApp
