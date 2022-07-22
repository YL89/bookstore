import dynamic from 'next/dynamic';
import { useAppSelector } from '../../store';

const AddBookPopup = dynamic(() => import('./AddBook'), { ssr: false });
const UpdateBookPopup = dynamic(() => import('./AddBook'), { ssr: false });
const DeleteBookPopup = dynamic(() => import('./DeleteBook'), { ssr: false });

const Popups = () => {
  const popupEvent = useAppSelector((state) => state.popups.event);

  switch (popupEvent) {
    case 'ADD_BOOK':
      return <AddBookPopup />;
    case 'UPDATE_BOOK':
      return <UpdateBookPopup />;
    case 'DELETE_BOOK':
      return <DeleteBookPopup />;
    default:
      return null;
  }
};

export default Popups;
