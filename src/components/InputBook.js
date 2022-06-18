import React from 'react';
import './InputBook.css';

const InputBook = () => (
  <div className="input-book-container">
    <h1>Add Book</h1>
    <div className="book-input">
      <input type="text" placeholder="Book Title" />
      <div className="form-wrapper">
        <select name="categories" id="categories">
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <button type="button" id="add-btn">ADD BOOK</button>
      </div>
    </div>
  </div>
);

export default InputBook;
