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
    <footer className="bg-black w-full justify-end">
      <p className="m-auto text-white text-center text-2xl font-bold p-5">by Yuhao Lu, 2022</p>
    </footer>
  );
};

// eslint-disable-next-line no-undef
const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="w-full flex h-full">
      <div className="mx-auto relative flex flex-col  max-w-1920 ">
        <Header />
        <div className="grow flex flex-col max-h-full overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
