'use client';

import { useTheme } from '@/context/ThemeContext';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Maximize, Minimize, ToggleLeft, ToggleRight, Computer, ClipboardList } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './page.module.css';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const { theme, toggleTheme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isInteractive = pathname.includes('portfolio-interactive');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
      setCurrentTime(now.toLocaleTimeString('pt-BR', timeOptions));

      const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString('pt-BR', dateOptions));
    };
    setMounted(true);

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

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

  const handleSwitch = () => {
    if (isInteractive) {
      router.push('/portfolio-standard');
    } else {
      router.push('/portfolio-interactive');
    }
  };

  return (
    <header className={styles.header}>

      <div className={styles.leftSection}>
        <button className={`${styles.button} ${styles.activitiesButton}`}>
          Activities
        </button>
      </div>

      <div className={styles.centerSection}>
        <span className={styles.dateTime}>
          {currentDate} {currentTime}
        </span>
      </div>

      <div className={styles.rightSection}>
        {mounted && (
          <button onClick={toggleTheme} className={`${styles.button} ${styles.iconButton}`}>
            {theme === 'dark' ? (
              <Moon className={styles.themeIcon} />
            ) : (
              <Sun className={styles.themeIcon} />
            )}
          </button>
        )}

        <button onClick={toggleFullScreen} className={`${styles.button} ${styles.iconButton}`}>
          {isFullScreen ? (
            <Minimize className={styles.fullscreenIcon} />
          ) : (
            <Maximize className={styles.fullscreenIcon} />
          )}
        </button>

        <div className='flex items-center justify-center rounded-md border-1 px-4'>
          <button onClick={handleSwitch} className={`${styles.button} ${styles.iconButton}`}>
            <ClipboardList className="h-5 w-5" />
          </button>
          <span className="text-[12px]">Portfólio clássico</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
