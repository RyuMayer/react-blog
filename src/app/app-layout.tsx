import { Outlet } from 'react-router-dom';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

export function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex max-w-[50%] grow flex-col p-5">
        <Navbar />
        <div className="flex grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
