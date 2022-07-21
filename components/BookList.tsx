import { FC } from 'react';
import { useAppSelector } from '../store';
import { Book } from '../store/models/Book';
import BookItem from './BookItem';

const BookList: FC = () => {
  const books = useAppSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
