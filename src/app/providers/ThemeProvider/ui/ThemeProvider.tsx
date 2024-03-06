import { ReactElement, useEffect, useState } from 'react';

import { ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/config/theme';

type TThemeProviderProps = {
  children: ReactElement;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function ThemeProvider({ children }: TThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.body.dataset['theme'] = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
