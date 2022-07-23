import React from "react";
import {useState } from "react";

const Book=({book,onUpdateshelf})=>{
const [bookshelf,setBookshelf]=useState(book.shelf)
if (!book.imageLinks||!book.authors) {
  return null
  }

let url=''
if (book.imageLinks.thumbnail)
{
  url=book.imageLinks.thumbnail
}
const handelSellect=(bookshelf)=>{
  setBookshelf(bookshelf)
  onUpdateshelf(book,bookshelf)
}

  
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
              `url("${url}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={bookshelf} onChange={(event)=>{handelSellect(event.target.value)}}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join('-')}</div>
      </div>)
}
export default Book;