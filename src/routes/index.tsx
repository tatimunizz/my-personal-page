import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import Images from '../pages/Images/Images';
import Lists from '../pages/Lists/Lists';
import Projects from '../pages/Projects/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'about-me', element: <AboutMe/>},
      {path: 'images', element: <Images/>},
      {path: 'my-lists', element: <Lists/>},
      {path: 'projects', element: <Projects/>},
    ],
  },
]);