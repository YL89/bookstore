import type { NextPage } from 'next';
import BookList from '../components/BookList';
import Button from '../components/Common/Button';
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
      <div>
        <Button name="+" onClick={onAddBook} />
      </div>
      <div>
        <BookList />
      </div>
      <Popups />
    </>
  );
};

export default MainPage;
