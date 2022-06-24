import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/books/books';
import store from '../redux/ConfigureStore';
import './Book.css';
import BookItem from './BookItem';
import InputBook from './InputBook';

store.dispatch(getBook);

const Book = () => {
  const bookList = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <main className="book-list-container">
      <section className="book-list">
        {
          bookList.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.category}
            />
          ))
        }
      </section>
      <InputBook />
    </main>
  );
};

export default Book;
