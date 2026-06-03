import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes, type Theme, type ThemeName} from '@styles/theme';
import { type ReactNode, useState, createContext, useContext, useCallback } from 'react';

type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  nextTheme: () => void;
  prevTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>('orange');

  const nextTheme = useCallback(() => {
    const themeList = Object.keys(themes) as ThemeName[];
    const currentIndex = themeList.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeList.length;
    setThemeName(themeList[nextIndex]);
  }, [themeName]);

  const prevTheme = useCallback(() => {
    const themeList = Object.keys(themes) as ThemeName[];
    const currentIndex = themeList.indexOf(themeName);
    const prevIndex = (currentIndex - 1 + themeList.length) % themeList.length;
    setThemeName(themeList[prevIndex]);
  }, [themeName]);

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, nextTheme, prevTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};