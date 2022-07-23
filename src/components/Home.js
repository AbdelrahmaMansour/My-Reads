import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
const Home=({books,updateSelf})=>{
if(!books)
{
    return <></>
    }

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(book => book.shelf === 'currentlyReading').map((booksend) => (
                    <li key={booksend.id}>
                      <Book  book={booksend} onUpdateshelf={updateSelf}/>
                    </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === 'wantToRead').map((booksend) => (
                    <li key={booksend.id}>
                      <Book  book={booksend} onUpdateshelf={updateSelf}/>
                    </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === 'read').map((booksend) => (
                    <li key={booksend.id}>
                      <Book  book={booksend} onUpdateshelf={updateSelf}/>
                    </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}
export default Home;