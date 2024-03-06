import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { AppRoutes } from '@/shared/constants/route';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { AppLayout } from '@/app/app-layout';

export function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: AppRoutes.MAIN,
          element: (
            <Suspense fallback={<>Загрузка...</>}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: AppRoutes.ABOUT,
          element: (
            <Suspense fallback={<>Загрузка...</>}>
              <AboutPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
