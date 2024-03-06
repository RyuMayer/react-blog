import { useTheme } from '@/app/providers/ThemeProvider';

type TThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: TThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <button className={className} onClick={toggleTheme}>
      Toggle
    </button>
  );
}
