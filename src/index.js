import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import LoginComponent from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>Home Page</h1>,
      },
      {
        path: '/about',
        element: <h1>About Page</h1>,
      },
      {
        path: '/login',
        element: <LoginComponent />
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoutes>
            <h1>Dashboard</h1>
          </PrivateRoutes>
        )
      }
      , {
        path: '/products',
        element: (
          <PrivateRoutes>
            <h1>Products Page</h1>
          </PrivateRoutes>
        )
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

