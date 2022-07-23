import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeBook } from '../../store/slices/books';
import { closePopup } from '../../store/slices/popups';

const DeleteBook: FC = () => {
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.popups.entity);

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(removeBook(book!.id!));
    dispatch(closePopup());
  };

  return (
    <div
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
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="py-6 px-6">
            <h3 className="mb-4 text-xl font-medium text-gray-900">Delete Book</h3>
            <p className="text-lg">
              Are you sure to delete book <span className="font-bold">{book?.name}</span> ?
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 px-10 py-2 my-5 cursor-pointer rounded-md text-white text-lg w-full"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
