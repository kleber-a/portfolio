'use client';

import { useTheme } from '@/context/ThemeContext';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Maximize, Minimize } from 'lucide-react'; // Importe os novos ícones
import styles from './page.module.css'; // Importe o CSS Modules

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const { theme, toggleTheme } = useTheme(); // Obter o tema atual para o ícone
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false); // Estado para fullscreen
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Use 'pt-BR' para formato de data/hora mais familiar se for o caso
      const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false }; // 24h format
      setCurrentTime(now.toLocaleTimeString('pt-BR', timeOptions));

      const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString('pt-BR', dateOptions));
    };
    setMounted(true);

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Função para alternar tela cheia
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      }).catch(err => {
        console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  return (
    <header className={styles.header}>
      {/* Lado Esquerdo */}
      <div className={styles.leftSection}>
        <button className={`${styles.button} ${styles.activitiesButton}`}>
          Activities
        </button>
      </div>

      {/* Centro - Relógio */}
      <div className={styles.centerSection}>
        <span className={styles.dateTime}>
          {currentDate} {currentTime}
        </span>
      </div>

      {/* Lado Direito */}
      <div className={styles.rightSection}>
        {/* Botão de Modo Noturno/Claro */}
        {mounted && (

          <button onClick={toggleTheme} className={`${styles.button} ${styles.iconButton}`}>
            {theme === 'dark' ? (
              <Moon className={styles.themeIcon} />
            ) : (
              <Sun className={styles.themeIcon} />
            )}
          </button>
        )}

        {/* Botão de Fullscreen */}
        <button onClick={toggleFullScreen} className={`${styles.button} ${styles.iconButton}`}>
          {isFullScreen ? (
            <Minimize className={styles.fullscreenIcon} />
          ) : (
            <Maximize className={styles.fullscreenIcon} />
          )}
        </button>

        {/* Ícones existentes (Ajustados para usar as classes de estilo) */}
        <span className={`${styles.button} ${styles.iconButton}`}>
          📶
        </span>
        <span className={`${styles.button} ${styles.iconButton}`}>
          🔋
        </span>
        <span className={`${styles.button} ${styles.iconButton}`}>
          🔊
        </span>
        <span className={`${styles.button} ${styles.iconButton}`}>
          ▼
        </span>
      </div>
    </header>
  );
};

export default Header;