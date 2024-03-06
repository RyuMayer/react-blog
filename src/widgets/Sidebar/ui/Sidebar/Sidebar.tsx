import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import HomeIcon from '../../assets/home.svg?react';

import { AppRoutes } from '@/shared/config/route';

const links = [
  {
    title: 'Главная',
    route: AppRoutes.MAIN,
  },
  {
    title: 'Обо мне',
    route: AppRoutes.ABOUT,
  },
];

export function Sidebar() {
  return (
    <div className="h-screen w-full max-w-64 bg-white px-[26px] pt-5">
      <div className="mb-5 text-center text-2xl font-bold	">
        RYU<span className="font-thin">.DEV</span>
      </div>
      {links.map(({ title, route }) => (
        <NavLink key={route} to={route}>
          {({ isActive }) => (
            <span
              className={clsx(
                'flex gap-2 rounded-md px-[25px] py-[10px] text-light-grey-200 transition hover:bg-[#f8f8f8]',
                {
                  'pointer-events-none bg-light-black font-medium text-white':
                    isActive,
                },
              )}
            >
              <HomeIcon
                className={clsx('fill-light-grey-200', {
                  'fill-white': isActive,
                })}
              />
              {title}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
}
