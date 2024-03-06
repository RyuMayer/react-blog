import clsx from 'clsx';

import HomeIcon from '../../assets/home.svg?react';
import About from '../../assets/about.svg?react';

import { AppRoutes } from '@/shared/constants/route';
import { UiRouteLink } from '@/shared/ui/ui-route-link';

const links = [
  {
    title: 'Главная',
    route: AppRoutes.MAIN,
    icon: HomeIcon,
  },
  {
    title: 'О сайте',
    route: AppRoutes.ABOUT,
    icon: About,
  },
];

export function Sidebar() {
  return (
    <div className="h-screen w-full max-w-64 bg-white px-[26px] pt-5">
      <div className="mb-5 text-center text-2xl font-bold	">
        RYU<span className="font-thin">.DEV</span>
      </div>
      {links.map(({ title, route, icon: Icon }) => (
        <UiRouteLink
          key={route}
          to={route}
          renderIcon={(isActive) =>
            Icon && (
              <Icon
                className={clsx('fill-light-grey-200', {
                  'fill-white': isActive,
                })}
              />
            )
          }
        >
          {title}
        </UiRouteLink>
      ))}
    </div>
  );
}
