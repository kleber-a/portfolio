'use client'; // Marca como Client Component

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado inicial do tema, verifica o localStorage para persistência
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') { // Verifica se está no navegador
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'dark'; // Padrão 'dark' para simular Linux
    }
    return 'dark'; // Padrão 'dark' no lado do servidor/build
  });

  // Aplica a classe 'dark-mode' ao body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = useCallback(() => {
    setThemeState(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  // Função para definir o tema diretamente
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook customizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};