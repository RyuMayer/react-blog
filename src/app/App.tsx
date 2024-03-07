import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { AppRoutes } from '@/shared/constants/route';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { AppLayout } from '@/app/app-layout';
import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { UiPageLoader } from '@/shared/ui/ui-page-loader';

export function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: AppRoutes.MAIN,
          element: (
            <Suspense fallback={<UiPageLoader />}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: AppRoutes.ABOUT,
          element: (
            <Suspense fallback={<UiPageLoader />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: AppRoutes.NOT_FOUND,
          element: <NotFoundPage />,
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
