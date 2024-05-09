import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Index from '@/components/index.tsx';
import { type Model } from '@/types.ts';
import rawModels from '@/assets/models.json?raw';
import Root from '@/routes/root.tsx';

import './globals.css';

const router = createBrowserRouter([{
  children: [{
    element: <Index />,
    index: true,
    loader: async () => ({ models: JSON.parse(rawModels) as Model[] }),
  }],

  element: <Root />,
  path: '/',
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
