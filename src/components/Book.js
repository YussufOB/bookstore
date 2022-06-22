import React from 'react';
import { useSelector } from 'react-redux';
import './Book.css';
import BookItem from './BookItem';
import InputBook from './InputBook';

const Book = () => {
  const bookList = useSelector((state) => state.booksReducer);

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
