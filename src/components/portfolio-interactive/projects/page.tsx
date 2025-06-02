"use client";

import { Folder, FileText, Globe, UndoDot, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

import { project } from './mock';

type FileProps = {
  name: string;
  type: "text" | "link";
  content?: string;
  url?: string;
};

type FolderProps = {
  title: string;
  files: FileProps[];
};

export default function Projects() {

  const [folders, setFolders] = useState(project)
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openFile, setOpenFile] = useState<FileProps | null>(null);

  const handleOpenFolder = (title: string) => {
    setActiveTab(title);
    setOpenFile(null);
  };

  const handleGoBack = () => {
    setActiveTab(null);
    setOpenFile(null);
  };

  const currentFolder = folders.find((folder) => folder.title === activeTab);

  return (
    <div className="border min-h-[200px] h-full w-full bg-[var(--surface)] shadow-lg flex flex-col rounded-xl overflow-hidden">
      {activeTab ? (
        <div className="flex flex-col h-full w-full">
          {/* Top Bar */}
          <div
            className="flex gap-4 border-b px-4 py-1 h-[40px] items-center"
            style={{ backgroundColor: 'var(--window-header-bg)', borderBottomColor: 'var(--window-border)' }}
          >
            <button
              onClick={handleGoBack}
              className="p-1 rounded-md transition"
              style={{
                backgroundColor: 'var(--button-hover-bg)', // Using hover for the actual button bg to match button-hover-bg effect
              }}
            >
              <UndoDot className="w-6 h-6" style={{ color: 'var(--window-header-text)' }} />
            </button>
            <span className="font-semibold text-lg" style={{ color: 'var(--window-header-text)' }}>
              {currentFolder?.title}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-wrap gap-6 px-2 py-6 overflow-auto" style={{ backgroundColor: 'var(--window-bg)', color: 'var(--window-content-text)' }}>
            {currentFolder?.files.map((file) =>
              file.type === "text" ? (
                <button
                  key={file.name}
                  onClick={() => setOpenFile(file)}
                  className="flex flex-col items-center gap-2 rounded-lg p-4 w-fit transition"
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <FileText className="w-8 h-8" style={{ color: 'var(--text-secondary)' }} />
                  <span className="text-sm font-medium">
                    {file.name}
                  </span>
                </button>
              ) : (
                <Link
                  key={file.name}
                  href={file.url!}
                  target="_blank"
                  className="flex flex-col items-center gap-2 rounded-lg p-4 w-32 transition"
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Globe className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-medium">
                    {file.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="flex gap-8 p-8 justify-center w-fit h-fit" >
          {folders.map((folder) => (
            <button
              key={folder.title}
              onClick={() => handleOpenFolder(folder.title)}
              className="flex flex-col items-center gap-1 rounded-lg p-2 w-fit transition"
              style={{
                // backgroundColor: 'var(--surface)',
                border: '1px solid var(--surface-border)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15 text-amber-400">
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {folder.title}1
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Modal de Leitura do Arquivo de Texto */}
      {openFile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="rounded-lg shadow-lg w-[90%] max-w-md" style={{ backgroundColor: 'var(--window-bg)' }}>
            <div
              className="flex items-center justify-between border-b px-4 py-2 rounded-t-lg"
              style={{ backgroundColor: 'var(--window-header-bg)', borderBottomColor: 'var(--window-border)' }}
            >
              <span className="font-semibold" style={{ color: 'var(--window-header-text)' }}>
                {openFile.name}
              </span>
              <button
                onClick={() => setOpenFile(null)}
                className="p-1 rounded-md transition"
                style={{
                  backgroundColor: 'var(--button-hover-bg)', // Using hover for the actual button bg to match button-hover-bg effect
                }}
              >
                <X className="w-5 h-5" style={{ color: 'var(--window-header-text)' }} />
              </button>
            </div>
            <div className="p-4 prose max-w-none overflow-auto h-[400px]" style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)' }}>
              <ReactMarkdown>{openFile.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}