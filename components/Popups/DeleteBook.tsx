import { Dispatch, FC, SetStateAction } from 'react';
import { useAppSelector } from '../../store';

const Delete: FC = () => {
  const book = useAppSelector((state) => state.popups.entity);
  return <div></div>;
};

export default Delete;
