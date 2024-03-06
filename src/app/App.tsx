import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { AppRoutes } from '@/shared/config/route';
import { AppLayout } from '@/shared/ui/AppLayout/AppLayout';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div className="flex">
          <Sidebar />
          <div className="max-w-[50%] grow p-5">
            <Navbar />
            <Outlet />
          </div>
        </div>
      ),
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
