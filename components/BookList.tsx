import { FC, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../store';
import BookItem from './BookItem';
import { MyBookStorage } from '../storage/indexDb';
import { IBook } from '../store/models/IBook';
import { useAppDispatch } from '../store';
import { getHistoryBooks } from '../store/slices/books';

const db = new MyBookStorage();

const BookList: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, entities: books, error } = useAppSelector((state) => state.books);
  const booksRef = useRef<IBook[]>(books);

  useEffect(() => {
    booksRef.current = books;
  }, [books]);

  useEffect(() => {
    dispatch(getHistoryBooks());
    return () => {
      db.saveAll(booksRef.current);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full">
        <h2 className="m-auto">Loading</h2>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
