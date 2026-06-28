import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from '@/providers/ThemeProvider';
import '@fontsource/ubuntu-mono';
import { ClickPositionProvider } from '@contexts/ClickPositionContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <ClickPositionProvider>
        <RouterProvider router={router} />
      </ClickPositionProvider>
    </ThemeProvider>
  </React.StrictMode>
);