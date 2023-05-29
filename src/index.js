import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import FeedList from './Feed';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/feed',
    element: <FeedList />
  },
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='row'>
    <div className='col-2 bg-warning border-end border-dark'>
        <Navbar />
    </div>
    <div className='col-10 bg-warning'>
      <RouterProvider router={router} />
    </div>
  </div>
);

