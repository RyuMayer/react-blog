import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Layout } from '@/layout/Layout';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: Object.values(routeConfig),
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
