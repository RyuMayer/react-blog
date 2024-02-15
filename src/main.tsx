import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import './styles/index.scss';

import { Layout } from './layout/Layout';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { ThemeProvider } from './theme/ThemeProvider';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <MainPageAsync />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <AboutPageAsync />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
