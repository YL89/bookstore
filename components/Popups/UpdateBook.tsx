import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addBook } from '../../store/slices/books';
import { closePopup } from '../../store/slices/popups';
import { IBook } from '../../store/models/IBook';
import Button from '../Common/Button';

const AddBook: FC = () => {
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.popups.entity);
  const [title, setTitle] = useState<string>(book!.name);
  const [category, setCategory] = useState<string>(book!.category);
  const [description, setDescription] = useState<string>(book!.description);
  const [price, setPrice] = useState<number>(book!.price);
  const [updated, setUpdated] = useState<Boolean>(false);

  useEffect(() => {
    if (updated) {
      setTimeout(() => {
        dispatch(closePopup());
      }, 1000);
    }
  }, [updated]);

  const onUpdateBook = () => {
    dispatch(
      addBook({
        name: title,
        category,
        description,
        price,
      } as IBook)
    );
    setUpdated(true);
  };

  if (updated) {
    return <div>Book updated!</div>;
  }

  return (
    <div className={`z-100 max-w-500 w-500 max-h-800 h-500 border-2`}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        defaultValue={title}
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
        defaultValue={category}
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
        defaultValue={description}
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
        defaultValue={price}
        onChange={(e) => {
          setPrice(+e.target.value);
        }}
      />
      <br />
      <Button name="Update" onClick={onUpdateBook} />
    </div>
  );
};

export default AddBook;
