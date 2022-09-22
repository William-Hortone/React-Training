
import './App.css';
import Menu from './components/Menu';
import AddBook from './pages/AddBook';
import BooksList from './pages/BooksList';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import useLocalStorage from "./hooks/useLocalStorage";


export default  function App() {

  //==State==//

  const [books, setBooks] = useState([]);
  const localStorageKey = "books";
  const [storedBooks, setStoredBooks] = useLocalStorage(localStorageKey, []);

  // ===Comportment==//

  const handleAddBook = (book) =>{
    const idValue = new Date().getTime();
    setBooks([...books, {...book, id:idValue }]);
  }

  const handleDelete = (bookId) =>{
    setBooks(books.filter(book => book.id !== bookId))
  }

  useEffect(() => {
    setBooks(storedBooks)
  }, []);

  useEffect(() => {
    setStoredBooks(books)
  }, [books]);

  //==Return==//
  return (
    <div className="App">
      <Menu />
    
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Add'  element={<AddBook handleAddBook={handleAddBook}/>} />
        <Route path="/List" element={<BooksList books={books} handleDelete={handleDelete} />}/>
      </Routes>
  
      
    </div>
  );
}


