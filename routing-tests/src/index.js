import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestFile1 from './pages/testFile1';
import TestFile2 from './pages/testFile2';
import TestFile3 from './pages/testFile3';
import TestFile4 from './pages/en/testFile4';
import TestFile5 from './pages/en/testFile5';
import TestFile6 from './pages/en/testFile6';
import Errors from './errors/errors';


const frontRoutes = createBrowserRouter([

  {
    errorElement: <Errors />
  },
  {
    path: '/test',
    element: <TestFile1 />,
    children: [
      {
        path: '/parcours',
        element: <TestFile2 />
      },
      {
        path: '/projets',
        element: <TestFile3 />
      },
      {
        path: '/en/portfolio',
        element: <TestFile4 />
      },
      {
        path: '/en/education',
        element: <TestFile5 />
      },
      {
        path: '/en/projects',
        element: <TestFile6 />
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={frontRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

