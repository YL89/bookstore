import { FC, memo, MouseEvent, useEffect, useRef } from 'react';
import { IBook } from '../store/models/IBook';
import { useAppDispatch } from '../store';
import { updateBookPopup, deleteBookPopup } from '../store/slices/popups';

const BookItem: FC<{ book: IBook; pClassName: string }> = ({ book, pClassName }) => {
  const dispatch = useAppDispatch();
  const { name, description, price, category } = book;
  const bookRef = useRef<IBook>(book);

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteBookPopup(book));
  };

  const onClick = () => {
    dispatch(updateBookPopup(book));
  };

  useEffect(() => {
    console.log(JSON.stringify(bookRef.current) === JSON.stringify(book)); //true
    bookRef.current = book;
  }, [JSON.stringify(book)]);

  return (
    <div
      className="flex flex-col border-1 hover:cursor-pointer hover:shadow-xl rounded-lg bg-slate-100 p-4 m-3 "
      onClick={onClick}
    >
      <p>Title:</p>
      <p className={pClassName}>{name}</p>
      <p>Description:</p>
      <p className={pClassName}>{description}</p>
      <p>Category:</p>
      <p className={pClassName}>{category}</p>
      <p>
        Price: <span className="text-rose-900">{price}</span>
      </p>
      <button onClick={onDelete} className="mt-auto mx-auto hover:text-red-800">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default memo(BookItem, (prev, next) => {
  if (JSON.stringify(prev.book) !== JSON.stringify(next.book)) {
    return false;
  }

  return true;
});
