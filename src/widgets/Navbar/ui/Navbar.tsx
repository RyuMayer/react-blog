import clsx from 'clsx';

import { ThemeSwitcher } from '@/features/theme';

type TNavbarProps = {
  className?: string;
};

export function Navbar({ className }: TNavbarProps) {
  return (
    <div className={clsx([className])}>
      <ThemeSwitcher />
    </div>
  );
}
