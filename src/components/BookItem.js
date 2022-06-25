import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';
import './BookItem.css';
import progress from '../assets/images/progress.png';

const BookItem = ({
  id, title, author, categories,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="block-l">
        <div className="info">
          <span className="categories grey_text">{categories}</span>
          <h2 className="bold_tex">{title}</h2>
          <h3 className="blue_text bold_text author">{author}</h3>
        </div>
        <div className="btns">
          <button type="button" className="nb blue_text">Comments</button>
          <button type="button" className="border_left blue_text" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="border_left blue_text">Edit</button>
        </div>
      </div>
      <div className="block-r">
        <div className="stats">
          <figure className="border_right">
            <img className="progress-circle" alt="progress-circle" src={progress} />
          </figure>
          <div className="progress-text">
            <span className="stat-number">64%</span>
            <span className="stat-text">Completed</span>
          </div>
        </div>
      </div>
      <div className="progress-info">
        <span className="chapter-title grey_text">CURRENT CHAPTER</span>
        <span className="chapter-number grey_text">Chapter 3</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default BookItem;
