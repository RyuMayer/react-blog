import { Outlet } from 'react-router-dom';

import { Menu } from '../components/Menu/Menu';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Menu />
      <Outlet />
    </div>
  );
}
