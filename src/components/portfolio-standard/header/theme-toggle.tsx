"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full bg-muted dark:bg-muted flex items-center justify-center">
                <span className="sr-only">Alternar tema</span>
            </button>
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-muted dark:bg-muted flex items-center justify-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:scale-110"
            aria-label="Alternar tema"
        >
            {/* Sol */}
            <Sun
                className={`absolute h-5 w-5 text-foreground transition-transform duration-500 
                    ${theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}
                `}
            />
            {/* Lua */}
            <Moon
                className={`absolute h-5 w-5 text-primary transition-transform duration-500 
                    ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}
                `}
            />
        </button>
    )
}
