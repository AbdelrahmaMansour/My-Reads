import "./../css/App.css";
import { useEffect,useState } from "react";
import * as BooksAPI from "./../utils/BooksAPI";
import Home from "./Home";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
function App() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const hupdateSelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
    BooksAPI.getAll().then((books) => {
    setBooks(books)
    }
    )
  }
    )
  }

  return (
    <div className="app">
    <Routes>
    <Route exact path="/" element={<Home books={Books} updateSelf={hupdateSelf}/>}/>
    <Route exact path="/search" element={<Search books={Books} updateSelf={hupdateSelf} />}>
    </Route>
  </Routes>
  </div>
  );
}

export default App;