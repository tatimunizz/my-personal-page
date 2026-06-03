import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'about-me', element: <AboutMe/>}
      // { path: 'about', element: <About /> },
    ],
  },
]);