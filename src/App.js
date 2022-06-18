import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Book from './components/Book';
import Categories from './components/Categories';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <section className="content">
      <Routes>
        <Route path="/bookstore" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </section>
  </Router>
);

export default App;
