// src/theme/ThemeContext.tsx
import React, { createContext, ReactNode, useContext } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme as getTheme } from './colorConfig';

interface ThemeContextProps {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    buttonBackground: string;
    buttonBorder: string;
    black: string;
    // Adicione outras cores conforme necessário
  };
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = getTheme();

  // Configuração personalizada para o Ant Design
  const antdCustomTheme = {
    token: {
      colorPrimary: theme.colors.primary,
      colorText: theme.colors.text,
      colorBgBase: theme.colors.background,
      // Adicione outras personalizações conforme necessário
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ConfigProvider theme={antdCustomTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
