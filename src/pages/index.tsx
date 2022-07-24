import type { NextPage } from 'next';
import BookList from '../components/BookList';
import { useAppDispatch } from '../store';
import { addBookPopup } from '../store/slices/popups';
import Popups from '../components/Popups';

const MainPage: NextPage = () => {
  const dispatch = useAppDispatch();

  const onAddBook = () => {
    dispatch(addBookPopup());
  };

  return (
    <>
      <div className="px-5 pt-5">
        <button
          name="add-book"
          className="bg-slate-500 hover:bg-slate-700 px-10 py-2 ml-3 cursor-pointer rounded-md text-white text-lg"
          onClick={onAddBook}
        >
          + Add Book
        </button>
      </div>
      <div className="overflow-y-auto grow flex">
        <BookList />
      </div>
      <Popups />
    </>
  );
};

export default MainPage;
