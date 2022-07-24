import { FC, useEffect, useMemo } from 'react';
import { useAppSelector } from '../store';
import BookItem from './BookItem';
import { useAppDispatch } from '../store';
import { getHistoryBooks } from '../store/slices/books';

const pClassName = 'text-ellipsis text-sky-800 overflow-hidden';

const BookList: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, entities: books } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(getHistoryBooks());
  }, []);

  return useMemo(() => {
    if (loading) {
      return (
        <div className="w-full h-full">
          <h2 className="m-auto">Loading</h2>
        </div>
      );
    }
    return (
      <div className="w-full justify-center grow overflow-y-auto grid md:grid-cols-book-4 xs:grid-cols-book-1 sm:grid-cols-book-2 xl:grid-cols-book-8 gap-4 p-5 auto-rows-book ">
        {books.map((book) => (
          <BookItem key={book.id} book={book} pClassName={pClassName} />
        ))}
      </div>
    );
  }, [books]);
};

export default BookList;
