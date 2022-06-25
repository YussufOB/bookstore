import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Book from './components/Book';
import Categories from './components/Categories';
import NoMatch from './components/NoMatch';
import './App.css';
import { getBook } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, []);

  return (
    <Router>
      <NavBar />
      <section className="content">
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;
