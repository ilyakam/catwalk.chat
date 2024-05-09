import { type ReactElement } from 'react';

import { Link } from 'react-router-dom';

function Footer(): ReactElement {
  return (
    <footer className='bg-slate-600 text-center text-slate-300 dark:bg-slate-50 dark:text-slate-800'>
      <span className='whitespace-nowrap'>&copy; {new Date().getFullYear()} <Link to='/'>catwalk.chat</Link></span>
    </footer>
  );
}

export default Footer;
