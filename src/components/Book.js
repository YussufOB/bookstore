import React from 'react';
import './Book.css';
import BookItem from './BookItem';
import InputBook from './InputBook';

const Book = () => (
  <main className="book-list-container">
    <section className="book-list">
      <BookItem
        title="The Hunger Games"
        author="Suzane Colins"
        categories="Action"
      />
      <BookItem
        title="Dune"
        author="Frank Herbert"
        categories="Science Fiction"
      />
      <BookItem
        title="Lady in Red"
        author="Phil Colins"
        categories="Entertainment"
      />
    </section>
    <InputBook />
  </main>
);

export default Book;
