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
    search: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  updateShelves = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf)
    .then((result) => {
      console.log(result);
    }).catch((e)=> {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <BookList bookshelf={this.state.bookshelfs} books={this.state.books} updateShelves={this.updateShelves}/>
        } />

        <Route path="/search" render={() =>
          <BookSearch />
        } />
      </div>
    )

  }
}

export default BooksApp
