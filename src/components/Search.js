import React from "react";
import {useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./../utils/BooksAPI";

const Search=({books,updateSelf})=>{

const [query,setQuery]=useState('')
const [searchedbooks,setSearchedbooks]=useState([])

 const handelsearch=(query)=>{
 setQuery(query)
 SearchBooks(query)
 }
 const SearchBooks = (query) => {
    if (query.length !==0) {
        BooksAPI.search(query).then((searchedbooks) => {
            if (searchedbooks.error) {
                setSearchedbooks([])
            } else {
                setSearchedbooks(searchedbooks)
                setSearchedbooks(validatedBooks)
                setSearchedbooks(searchedbooks)
            }
        }
        )
    } else {
        setSearchedbooks([])
    }

}
const validatedBooks = searchedbooks.map((searchedBook) => {
  const myBook = books.filter((myBook) => (myBook.id === searchedBook.id))[0]
  if(myBook){
    searchedBook.shelf =myBook.shelf
  }
  else{
    searchedBook.shelf ="none"
  }
  return searchedBook
}
  )

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
             to="/"
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event)=>handelsearch(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {searchedbooks.map((booksend) => (
                    <li key={booksend.id}>
                      <Book  book={booksend} onUpdateshelf={updateSelf}/>
                    </li>
                    ))}
            </ol>
          </div>
        </div>
    )
}
export default Search;