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
      {
        title: 'Currently Reading',
        slugName: 'currentlyReading',
        books: []
      },
      {
        title: 'Want to Read',
        slugName: 'wantToRead',
        books: []
      },
      {
        title: 'Read',
        slugName: 'read',
        books: []
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ books })
    })
  }

  return (
    <div className="app">
      <Route exact path="/" render={() =>
        <BookList />
      } />

      <Route path="/search" render={() =>
        <BookSearch />
      } />
    </div>
  )

}

export default BooksApp
