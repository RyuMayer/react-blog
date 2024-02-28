import { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: (
      <Suspense fallback={<>Загрузка...</>}>
        <MainPage />
      </Suspense>
    ),
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: (
      <Suspense fallback={<>Загрузка...</>}>
        <AboutPage />
      </Suspense>
    ),
  },
};
