import { FC, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateBook } from '../../store/slices/books';
import { closePopup } from '../../store/slices/popups';
import { IBook } from '../../store/models/IBook';
import useFadeIn from '../../hooks/useFadeIn';

const UpdateBook: FC = () => {
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.popups.entity);
  const [title, setTitle] = useState<string>(book!.name);
  const [category, setCategory] = useState<string>(book!.category);
  const [description, setDescription] = useState<string>(book!.description);
  const [price, setPrice] = useState<number>(book!.price);
  const FadeInWrapper = useFadeIn();

  const onUpdateBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateBook({
        id: book?.id,
        name: title,
        category,
        description,
        price,
      } as IBook)
    );
    dispatch(closePopup());
  };

  return (
    <FadeInWrapper
      className={`flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-700/50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative m-auto bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="authentication-modal"
            onClick={() => {
              dispatch(closePopup());
            }}
          >
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
          <div className="py-6 px-6">
            <h3 className="mb-4 text-xl font-medium text-gray-900">Update Book Information</h3>
            <form onSubmit={onUpdateBook}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border hover:border-slate-500 focus:border-slate-500 focus:ring-sky-500 block rounded-lg pl-2"
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />

              <label htmlFor="title">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                className="w-full border hover:border-slate-500 focus:border-slate-500 focus:ring-sky-500 block rounded-lg pl-2"
                defaultValue={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              />

              <label htmlFor="title">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                className="w-full border hover:border-slate-500 focus:border-slate-500 focus:ring-sky-500 block rounded-lg pl-2"
                defaultValue={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
              />

              <label htmlFor="title">Price</label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                className="w-full border hover:border-slate-500 focus:border-slate-500 focus:ring-sky-500 block rounded-lg pl-2 text-rose-900"
                defaultValue={price}
                onChange={(e) => {
                  setPrice(+e.target.value);
                }}
                required
              />

              <div className="m-auto flex">
                <button
                  type="submit"
                  className="bg-slate-500 hover:bg-slate-700 px-10 py-2 my-5 cursor-pointer rounded-md text-white text-lg w-full"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default UpdateBook;
