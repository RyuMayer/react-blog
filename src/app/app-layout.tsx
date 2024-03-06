import { Outlet } from 'react-router-dom';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

export function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-[50%] grow p-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
