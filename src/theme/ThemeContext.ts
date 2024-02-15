import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type TThemeContextData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<TThemeContextData | null>(null);
ThemeContext.displayName = 'ThemeContext';

export { ThemeContext };
export const LOCAL_STORAGE_THEME_KEY = 'theme';
