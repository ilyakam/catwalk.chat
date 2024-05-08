import { type ReactElement } from 'react';

import { Link } from 'react-router-dom';

function Header(): ReactElement {
  return (
    <header className='bg-slate-50 text-center font-times text-2xl text-slate-800 dark:bg-slate-600 dark:text-slate-300'>
      <Link to='/'>catwalk.chat</Link>
    </header>
  );
}

export default Header;
