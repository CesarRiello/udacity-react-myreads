import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './components/BooksShelf'

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
    ],
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {this.state.bookshelf.maps(shelf => {
                <BooksShelf shelf={shelf} />
              })}
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
