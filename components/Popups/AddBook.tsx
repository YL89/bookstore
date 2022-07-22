import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { addBook } from '../../store/slices/books';
import { closePopup } from '../../store/slices/popups';
import { IBook } from '../../store/models/IBook';
import Button from '../Common/Button';

const AddBook: FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [added, setAdded] = useState<Boolean>(false);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        dispatch(closePopup());
      }, 1000);
    }
  }, [added]);

  const onAddBook = () => {
    dispatch(
      addBook({
        name: title,
        category,
        description,
        price,
      } as IBook)
    );
    setAdded(true);
  };

  if (added) {
    return <div>Book {title} added!</div>;
  }

  return (
    <div className={`z-100 max-w-500 w-500 max-h-800 h-500 border-2`}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label htmlFor="title">Category</label>
      <br />
      <input
        type="text"
        id="category"
        name="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <br />
      <label htmlFor="title">Description</label>
      <br />
      <input
        type="text"
        id="description"
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label htmlFor="title">Price</label>
      <br />
      <input
        type="number"
        step="0.01"
        id="price"
        name="price"
        onChange={(e) => {
          setPrice(+e.target.value);
        }}
      />
      <br />
      <Button name="Add" onClick={onAddBook} />
    </div>
  );
};

export default AddBook;
