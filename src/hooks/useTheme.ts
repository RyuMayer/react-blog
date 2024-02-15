import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../theme/ThemeContext';
import { useAppContext } from './useAppContext';

type TUseThemeResult = {
  toggleTheme: () => void;
  theme: Theme;
};

export function useTheme(): TUseThemeResult {
  const { theme, setTheme } = useAppContext({ context: ThemeContext });

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
