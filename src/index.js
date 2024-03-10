import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
const App = React.lazy(() => import('./App'));
const P404 = React.lazy(() => import('./pages/404'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const Github = React.lazy(() => import('./pages/github'));
const HappyGifter = React.lazy(() => import('./pages/happyGifter'));
const Allkka = React.lazy(() => import('./pages/allkka'));
const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/github',
    element: <Github/>,
  },
  {
    path: '/happygifter',
    element: <HappyGifter/>,
  },
  {
    path: '/allkka',
    element: <Allkka/>,
  },
  {
    path: '*',
    element: <P404/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div style={{minHeight:"100vh" ,backgroundColor:"black",color:"white"}}>Loading...</div>}>
    <RouterProvider router={BrowserRouter}/>
    </Suspense>
  </React.StrictMode>
);


reportWebVitals();
