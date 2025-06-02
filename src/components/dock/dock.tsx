// components/Dock.tsx
'use client';

import React from 'react';

interface MinimizedWindowInfo {
  id: string;
  title: string;
}

interface DockProps {
  minimizedWindows: MinimizedWindowInfo[];
  onOpenWindow: (id: string) => void;
}

const Dock: React.FC<DockProps> = ({ minimizedWindows, onOpenWindow }) => {
  return (
    <div className="
      fixed left-0 top-1/2 -translate-y-1/2
      flex flex-col items-center p-2 rounded-lg
      bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-60
      shadow-lg z-40
      md:w-16
      w-12 /* Tamanho menor para mobile */
      h-auto /* Altura ajustável ao conteúdo */
    ">
      {minimizedWindows.map(win => (
        <div
          key={win.id}
          className="
            flex flex-col items-center justify-center p-1 cursor-pointer
            text-white dark:text-gray-200
            hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200
            text-xs md:text-sm
            mb-2 /* Margem inferior para espaçar ícones */
          "
          onClick={() => onOpenWindow(win.id)}
          title={win.title} // Título ao passar o mouse
        >
          <span className="text-2xl md:text-3xl">
            {win.title.split(' ')[0] === '📁' ? '📁' : '📄'} {/* Exibe ícone de pasta ou documento */}
          </span>
          <span className="mt-1 hidden md:block">{win.title.split(' ')[1]}</span> {/* Mostra o nome só em desktop */}
        </div>
      ))}
    </div>
  );
};

export default Dock;