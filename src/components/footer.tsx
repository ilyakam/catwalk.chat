import { type ReactElement } from 'react';

import { Link } from 'react-router-dom';

function Footer(): ReactElement {
  return (
    <footer className='text-center text-slate-300'>
      <span className='whitespace-nowrap'>&copy; {new Date().getFullYear()} <Link to='/'>catwalk.chat</Link></span>
    </footer>
  );
}

export default Footer;
