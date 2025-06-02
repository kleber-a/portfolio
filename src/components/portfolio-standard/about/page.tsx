"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code, Cpu, Database, Globe, Layout, Server } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const technologies = [
    { icon: <Image width={48} height={48} alt="angular" src="/angular-icon.svg" />, name: "Angular" },
    { icon: <Image width={48} height={48} alt="react" src="/react-icon.svg" />, name: "React" },
    { icon: <Image width={48} height={48} className="bg-white rounded-full" alt="next" src="/next-icon.svg" />, name: "Next Js" },
    { icon: <Image width={48} height={48} alt="node" src="/node-icon.svg" />, name: "Node Js" }
  ]

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 transition-colors duration-300 relative"
    >
 
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 text-glow transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Sobre Mim
          </h2>
          <p
            className={`max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Conheça um pouco da minha história e paixões
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className={`md:w-2/5 flex justify-center transform transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
          >
            <div className="relative">

              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br via-transparent z-10"></div>
                <Image
                  src="/perfil.jpeg?height=320&width=320"
                  alt="Sua foto"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 flex gap-2" style={{ animationDelay: "1s" }}>
                <div className="px-3 py-1.5 rounded-full flex items-center gap-2 border">
                  <Layout className="h-4 w-4" />
                  <span className="text-sm font-medium">Angular</span>
                </div>
                  <div className="px-3 py-1.5 rounded-full flex items-center gap-2 border">
                  <Layout className="h-4 w-4" />
                  <span className="text-sm font-medium">Next</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 space-y-6">
            <div
              className={`transform transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="text-2xl font-bold mb-4">Minha Jornada</h3>
              <p>
                Olá! Sou um desenvolvedor Full Stack, apaixonado por criar soluções digitais que sejam funcionais, escaláveis e fáceis de usar.
                Minha especialidade é o front-end, mas também tenho experiência no back-end, o que me permite enxergar o projeto como um todo e colaborar em todas as etapas: do design da interface à lógica do servidor.
                Comecei minha trajetória na programação ainda na faculdade e, desde então, venho participando de diversos projetos, desenvolvendo interfaces modernas, performáticas e APIs robustas.
              </p>
            </div>

            <div
              className={`transform transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <p>
                Tenho como principais tecnologias Angular, React, Next.js e Node.js. Gosto de enfrentar desafios, resolver problemas complexos e entregar experiências de usuário de alta qualidade.
                Atualmente, estou em busca de novos desafios e oportunidades que me permitam continuar crescendo profissionalmente e contribuir com soluções de alto impacto.
              </p>
            </div>

            <div
              className={`transform transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="text-2xl font-bold mb-4">Tecnologias Favoritas</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                  >
                    <div>{tech.icon}</div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div
              className={`transform transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="text-2xl font-bold mb-4">Além do Código</h3>
              <p>
                Quando não estou codificando, gosto de . Acredito que essas atividades me
                ajudam a manter uma perspectiva equilibrada e criativa, o que se reflete no meu trabalho.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
