"use client";

import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { Folder, Globe, LoaderIcon, Maximize, Minimize2, X } from "lucide-react";

type MyWindowProps = {
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
  title: string;
  children: React.ReactNode;
  type?: "folder" | "browser" | "contact" | undefined;
  url?: string;
};

let globalZIndex = 1; // variável fora do componente para controlar z-index globalmente

export default function MyWindow({
  defaultPosition,
  defaultSize,
  title,
  children,
  type = "folder",
  url = "https://example.com",
}: MyWindowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [folderPosition, setFolderPosition] = useState(defaultPosition);
  const [windowPosition, setWindowPosition] = useState({ x: 200, y: 200 });
  const [windowSize, setWindowSize] = useState(defaultSize);

  const [zIndex, setZIndex] = useState(1);

  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
    setIsSelected(true);
  };

  const handleDeselect = () => {
    setIsSelected(false);
  };

  useEffect(() => {
    if (isOpen && type === "browser") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, type]);


  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  // Estado para maximizar
  const [isMaximized, setIsMaximized] = useState(false);
  const prevSize = useRef(defaultSize);
  const prevPosition = useRef(defaultPosition);

  const handleMaximize = () => {
    const workspace = document.getElementById("workspace");
    if (!workspace) return;

    if (!isMaximized) {
      prevSize.current = windowSize;
      prevPosition.current = windowPosition;

      const bounds = workspace.getBoundingClientRect();
      setWindowPosition({ x: 0, y: 0 });
      setWindowSize({ width: bounds.width, height: bounds.height });
      setIsMaximized(true);
    } else {
      setWindowPosition(prevPosition.current);
      setWindowSize(prevSize.current);
      setIsMaximized(false);
    }
    bringToFront();
  };

  return (
    <>
      {/* Ícone da Pasta ou Navegador */}
      <Rnd
        size={{ width: 80, height: 80 }}
        position={folderPosition}
        enableResizing={false}
        bounds="#workspace"
        style={{ zIndex: 1 }}
        onDragStart={bringToFront}
        onDragStop={(e, d) => setFolderPosition({ x: d.x, y: d.y })}
      >
        <div
          onClick={bringToFront}
          onDoubleClick={() => {
            setIsOpen(true);
            bringToFront();
          }}
          onBlur={handleDeselect}
          tabIndex={0}
          className={`flex flex-col items-center justify-center cursor-pointer w-full h-full p-2 rounded-lg hover:bg-[var(--button-hover-bg)]
            ${isSelected ? "bg-[var(--button-hover-bg)]" : null} transition`}

        >
          {type === "folder" ? (
            <>
              {/* <Folder size={40} className="text-amber-400" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15 text-amber-400">
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
              </svg>
            </>

          ) : type == 'browser' ? (
            // <Globe size={40} className="text-blue-400" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15 text-blue-400">
              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
            </svg>

          )
            :
            (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15 text-blue-400">
                <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>

            )
          }
          <span className="text-xs mt-1 font-bold"
            style={{
              color: 'var(--window-header-text)'
            }}>{title}</span>
          {/* <div className="text-xs text-white mt-1">zIndex: {zIndex}</div> */}
        </div>
      </Rnd>

      {/* Janela */}
      {isOpen && (
        <Rnd
          size={windowSize}
          position={windowPosition}
          bounds="#workspace"
          dragHandleClassName="window-header"
          minWidth={300}
          minHeight={200}
          style={{ zIndex }}
          onDragStart={bringToFront}
          onDragStop={(e, d) => setWindowPosition({ x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => {
            setWindowSize({
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
            });
            setWindowPosition(position);
          }}
          enableResizing={!isMaximized}
          disableDragging={isMaximized}
        >
          <div className="border bg-[var(--background)] border-neutral-600 rounded-lg shadow-lg flex flex-col h-full">
            {/* Header da Janela */}
            <div className="window-header bg-neutral-700 px-4 py-2 rounded-t-lg cursor-move text-white flex justify-between items-center">
              <span>{title}</span>
              <div className="flex space-x-2">
                <button
                  onClick={handleMaximize}
                  title={isMaximized ? 'Restaurar' : 'Maximizar'}
                  className="text-sm px-2 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {isMaximized ? (
                    <Minimize2 size={16} />
                  ) : (
                    <Maximize size={16} />
                  )}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Fechar"
                  className="text-sm px-2 py-1 border rounded hover:bg-red-500 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Se for Navegador, mostra a barra de URL */}
            {type === "browser" && (
              <div className="bg-neutral-600 px-3 py-1 flex items-center gap-2 border-b border-neutral-500">
                {/* Botões de controle */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Campo de URL */}
                <input
                  type="text"
                  value={"https://kleber-a.com"}
                  readOnly
                  className="flex-1 bg-neutral-700 text-white px-2 py-1 rounded-md border border-neutral-500 outline-none text-xs"
                />

                {/* Botão de tema (troca apenas o ícone) */}
                <button
                  onClick={handleToggle}
                  className="p-1 rounded-md bg-neutral-700 hover:bg-neutral-500 text-yellow-300"
                  title="Alternar tema"
                >
                  {isDark ? (
                    // Ícone de sol
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m8.66-12.34l-.7.7m-13.92 0l-.7-.7m16.62 6.64h-1m-16 0H3m12.34 8.66l-.7-.7m-6.64 0l-.7.7M12 5a7 7 0 100 14 7 7 0 000-14z"
                      />
                    </svg>
                  ) : (
                    // Ícone de lua
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {/* Conteúdo da janela */}
            <div className="flex-1 overflow-auto p-4 text-[var(--text)] bg-[var(--background)]">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <LoaderIcon className="animate-spin text-neutral-400" />
                </div>
              ) : (
                children
              )}
            </div>
          </div>
        </Rnd>
      )}
    </>
  );
}
