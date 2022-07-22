import { FC, memo } from 'react';
import { IBook } from '../store/models/IBook';
import { useAppDispatch } from '../store';
import { updateBookPopup, deleteBookPopup } from '../store/slices/popups';
import Button from './Common/Button';

const BookItem: FC<{ book: IBook }> = ({ book }) => {
  const dispatch = useAppDispatch();
  const { name, description, price, category } = book;

  const onDelete = () => {
    dispatch(deleteBookPopup(book));
  };

  const onClick = () => {
    dispatch(updateBookPopup(book));
  };

  return (
    <div className="w-300 h-400 border-2" onClick={onClick}>
      <p>Title: {name}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <Button name="Delete" onClick={onDelete} />
    </div>
  );
};

export default memo(BookItem, (prev, next) => {
  if (JSON.stringify(prev.book) !== JSON.stringify(next.book)) {
    return false;
  }
  return true;
});
