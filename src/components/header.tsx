import { type ReactElement } from 'react';

import { Link } from 'react-router-dom';

function Header(): ReactElement {
  return (
    <header className='bg-gradient-to-b from-slate-50 to-white text-center font-times text-2xl text-slate-800 dark:from-slate-600 dark:to-slate-800 dark:text-slate-300'>
      <Link to='/'>catwalk.chat</Link>
    </header>
  );
}

export default Header;
