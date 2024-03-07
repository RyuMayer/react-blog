import { withDelay } from '@/shared/utils';
import { ComponentType, lazy } from 'react';

//TODO: Задержка для теста, убрать!
export const MainPageAsync = lazy(() =>
  withDelay<{ default: ComponentType<any> }>(import('./main-page'), 1000),
);
