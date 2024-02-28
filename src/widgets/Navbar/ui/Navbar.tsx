import clsx from 'clsx';

import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

type TNavbarProps = {
  className?: string;
};

export function Navbar({ className }: TNavbarProps) {
  return (
    <div className={clsx('py-5', [className])}>
      <AppLink to={RoutePath.main}>Главная</AppLink>
      <AppLink to={RoutePath.about}>Обо мне</AppLink>
    </div>
  );
}
