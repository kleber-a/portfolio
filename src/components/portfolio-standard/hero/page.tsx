"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown, Code } from "lucide-react"

export function Hero({ onSectionChange }: { onSectionChange: (section: string) => void }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = (value: string) => {
    onSectionChange(value);
  };


  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`inline-block mb-4 px-4 py-1.5 rounded-full border text-sm font-medium transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 animate-spin-slow" />
            <span>Desenvolvedor Full Stack</span>
          </div>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transform transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Olá, eu sou{" "}
          <span className="relative">
            Kleber Andrade
            <span className="absolute -inset-1 rounded-lg blur-sm -z-10"></span>
          </span>
        </h1>

        <p
          className={`text-xl max-w-2xl mx-auto mb-10 transform transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Transformando ideias em experiências digitais incríveis com código e criatividade
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <button
            onClick={() => handleClick('projetos')}
            className="px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <span className="relative z-10">Ver Projetos</span>
          </button>

          <button
            onClick={() => handleClick('contato')}
            className="px-8 py-3 rounded-full border font-medium transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <span className="relative z-10">Entre em Contato</span>
          </button>
        </div>

        <div
          className={`mt-16 animate-bounce hidden md:block transform transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => handleClick('sobre')}
            className="inline-flex flex-col items-center transition-colors"
          >
            <span className="text-sm mb-2">Rolar para baixo</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"></div>
      <div
        className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}