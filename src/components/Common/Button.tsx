import { FC } from 'react';
import { FormEventHandler } from 'react';

const Button: FC<{
  name: string;
  onClick: FormEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}> = ({ name, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-slate-500 hover:bg-slate-700 px-10 py-2 my-5 cursor-pointer rounded-md text-white text-lg w-full"
    >
      {name}
    </button>
  );
};

export default Button;
