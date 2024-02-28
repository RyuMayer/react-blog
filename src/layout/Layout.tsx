import { Outlet } from 'react-router-dom';

import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';

export function Layout() {
  const { toggleTheme } = useTheme();

  return (
    <div className="container mx-auto px-3">
      <Navbar />
      <button onClick={toggleTheme}>Сменить тему</button>
      <Outlet />
    </div>
  );
}
