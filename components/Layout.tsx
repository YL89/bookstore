import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="bg-black w-full">
      <h1 className="text-white text-4xl font-bold p-5">
        <Link href="/book">My Book Store</Link>
      </h1>
    </header>
  );
};

const Footer: FC = () => {
  return (
    <footer className="bg-black w-full bottom-0 absolute">
      <p className="m-auto text-white text-center text-2xl font-bold p-5">by Yuhao Lu, 2022</p>
    </footer>
  );
};

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="container mx-auto h-full relative">
      <Header />
      <div className="flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
