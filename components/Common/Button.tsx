import { FC } from 'react';

const Button: FC<{ name: string; onClick: () => void; css?: {} }> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-500 hover:bg-slate-700 px-10 py-2 m-3 cursor-pointer rounded-md text-white text-lg"
    >
      {name}
    </button>
  );
};

export default Button;
