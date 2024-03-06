import { ReactNode } from 'react';

type TAppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: TAppLayoutProps) {
  return <div className="container mx-auto px-3">{children}</div>;
}
