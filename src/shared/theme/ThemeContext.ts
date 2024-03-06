import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

type TThemeContextData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<TThemeContextData | null>(null);
ThemeContext.displayName = 'ThemeContext';

export { ThemeContext };
