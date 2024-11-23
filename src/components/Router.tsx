import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router';
import { Home } from '../pages/Home/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
