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
    let _books = books.filter(_book => _book.id !== book.id);
    if(book.shelf !== 'none')
      _books.push(book);

    return _books;
  };

  updateShelves = (book, shelf) => {
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


  populateShelves = (results, books) => {
    return results.map(result => 
      (books.find(book => book.id === result.id) || result)
    )
  };

  search = (query) => {
    if (query.length > 3) {
      BooksAPI.search(query)
        .then(result => {
          if (result.error) {
            console.error(result.error);
            return;
          }
          let booksResult = this.populateShelves(result, this.state.books);
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
