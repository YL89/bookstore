import { FC, MouseEvent } from 'react';

const DangerButton: FC<{
  name: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  css?: {};
}> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-700 px-10 py-2 m-3 cursor-pointer rounded-md text-white text-lg"
    >
      {name}
    </button>
  );
};

export default DangerButton;
