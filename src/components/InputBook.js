import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { sentBook } from '../redux/books/books';
import './InputBook.css';

const InputBook = () => {
  const initialInputState = {
    title: '',
    author: '',
    category: '',
  };

  const [inputState, setInputState] = useState(initialInputState);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: inputState.title[0],
      author: inputState.author[0],
      category: inputState.category,
    };

    dispatch(sentBook(newBook));
  };

  const categoriesList = [
    'Fantasy',
    'Anime',
    'Adult Movie',
    'Education',
    'Entertainment',
    'Sport',
    'Sci-Fi',
    'Indigeneous',
  ];

  return (
    <form onSubmit={submitBookToStore} className="input-book-container">
      <h1>Add New Book</h1>
      <div className="book-input">
        <input type="text" placeholder="Book Title" name="title" onChange={handleChange} required />
        <input type="text" placeholder="Book Author" name="author" onChange={handleChange} required />
        <div className="form-wrapper">
          <select name="category" id="categories" onChange={handleChange} required>
            <option value="null">Select a category</option>
            {
              categoriesList.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <button type="submit" id="add-btn">ADD BOOK</button>
        </div>
      </div>
    </form>
  );
};

export default InputBook;
