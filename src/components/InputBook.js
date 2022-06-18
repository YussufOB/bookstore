import React from 'react';
import './InputBook.css';

const InputBook = () => (
  <div className="input-book-container">
    <h1>Add Book</h1>
    <div className="book-input">
      <input type="text" placeholder="Book Title" />
      <div className="form-wrapper">
        <select name="categories" id="categories">
          <option value="author">Author</option>
          <option value="author">Suzane Colins</option>
          <option value="author">Frank Herbert</option>
          <option value="author">Pil Colins</option>
        </select>
        <button type="button" id="add-btn">ADD BOOK</button>
      </div>
    </div>
  </div>
);

export default InputBook;
