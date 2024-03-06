import { createContext } from 'react';

import { Theme } from '@/shared/config/theme';

export type TThemeContextData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<TThemeContextData | null>(null);
ThemeContext.displayName = 'ThemeContext';

export { ThemeContext };
