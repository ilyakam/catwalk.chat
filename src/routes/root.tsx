import { Outlet } from 'react-router-dom';
import { type ReactElement } from 'react';

import Footer from '@/components/footer.tsx';
import Header from '@/components/header.tsx';

function Root(): ReactElement {
  return (
    <div className='flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
