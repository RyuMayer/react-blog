import { Outlet } from 'react-router-dom';

import { Menu } from '../components/Menu/Menu';
import { useTheme } from '../hooks/useTheme';
import { classNames } from '../helpers/classNames/classNames';

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Menu />
      <Outlet />
    </div>
  );
}
