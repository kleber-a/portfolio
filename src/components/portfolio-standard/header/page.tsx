"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code, ToggleLeft, ToggleRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useRouter } from "next/navigation"


export function Header({ onSectionChange, activeSection }: { onSectionChange: (section: string) => void, activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSwitched, setIsSwitched] = useState(false)
  const router = useRouter();

  const handleClick = (value: string) => {
    onSectionChange(value);
  };

  const handleSwitch = () => {
    router.push('/portfolio-interactive')
    setIsSwitched(!isSwitched)
  }

  const routes = [
    { id: "sobre", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "education", label: "Educação" },
    { id: "habilidades", label: "Habilidades" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" },
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-500 bg-transparent dark:bg-transparent backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <button
          onClick={() => handleClick('hero')}
          className="font-bold text-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
            <Code className="h-5 w-5" />
          </div>
          <span>Kleber Andrade</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {routes.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`pb-1 transition-all ${activeSection === id
                  ? "font-bold border-b-2 border-[var(--text-primary)]"
                  : "font-normal border-b-2 border-transparent hover:border-[var(--text-primary)]"
                }`}
            >
              {label}
            </button>
          ))}

          {/* <button
            onClick={handleSwitch}
            className="flex items-center gap-2 border rounded-full px-4 py-2 hover:shadow-lg transition-all"
          >
            {isSwitched ? <ToggleRight className="h-5 w-5" /> : <ToggleLeft className="h-5 w-5" />}
            <span>{isSwitched ? "Página 2" : "Página 1"}</span>
          </button> */}

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          {/* <button
            className="p-2 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#sobre" onClick={() => setIsMenuOpen(false)} isActive={activeSection === "sobre"}>
              Sobre
            </MobileNavLink>
            <MobileNavLink
              href="#habilidades"
              onClick={() => setIsMenuOpen(false)}
              isActive={activeSection === "habilidades"}
            >
              Habilidades
            </MobileNavLink>
            <MobileNavLink
              href="#projetos"
              onClick={() => setIsMenuOpen(false)}
              isActive={activeSection === "projetos"}
            >
              Projetos
            </MobileNavLink>
            <MobileNavLink href="#contato" onClick={() => setIsMenuOpen(false)} isActive={activeSection === "contato"}>
              Contato
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
    >
      {children}
      {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5"></span>}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  isActive,
  children,
}: {
  href: string
  onClick: () => void
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
