import { FC } from 'react';
import { Book } from '../store/models/Book';

const BookItem: FC<{ book: Book }> = ({ book }) => {
  return <div>{book.name}</div>;
};

export default BookItem;
