"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("todos")

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

  const projects = [
    {
      id: 1,
      title: "Fin Wallet",
      description: "Uma aplicação de carteira financeira desenvolvida com Next.js e TypeScript, onde usuários podem realizar operações como depósito, transferência e reversão de transações. O projeto foi desenvolvido como parte de um desafio técnico, focando em boas práticas, arquitetura escalável e segurança.",
      image: "/projects/finWallet.gif?height=400&width=600",
      tags: ["Next", "React", "TypeScript"],
      categories: ["angular", "fullstack", "frontend", "backend"],
      liveUrl: "#",
      githubUrl: "https://github.com/kleber-a/fin-wallet",
      featured: true,
    },
    {
      id: 2,
      title: "Computer Store",
      description: "Computer-Store é uma aplicação web desenvolvida com Angular que simula uma loja de informática. Acesse o projeto online para visualizar o resultado final.",
      image: "/projects/computerStore.png?height=400&width=600",
      tags: ["Angular", "TypeScript"],
      categories: ["next", "frontend"],
      liveUrl: "https://kleber-a.github.io/computer-store/produtos",
      githubUrl: "https://github.com/kleber-a/computer-store",
      featured: false,
    },
    {
      id: 3,
      title: "Game Daily",
      description: "GameDaily é uma aplicação web desenvolvida com Next.js para registrar os jogos que você joga no dia a dia e manter um histórico simples e rápido, funcionando como um diário gamer pessoal.",
      image: "/projects/gameDaily.png?height=400&width=600",
      tags: ["Next", "React", "TypeScript"],
      categories: ["next", "frontend"],
      liveUrl: "https://game-daily.vercel.app/",
      githubUrl: "https://github.com/kleber-a/gameDaily",
      featured: false,
    },
    {
      id: 4,
      title: "Calling System",
      description: "Projeto desenvolido em React para gerenciar solicitações de chamados de uma empresa.",
      image: "/projects/system.gif?height=400&width=600",
      tags: ["React", "Firebase", "JavaScript"],
      categories: ["react", "fullstack", "frontend", "backend"],
      liveUrl: "https://calling-system-gilt.vercel.app/",
      githubUrl: "https://github.com/kleber-a/calling-system",
      featured: false,
    },
    {
      id: 5,
      title: "PokeDex",
      description: "Uma aplicação que simula uma pokedex onde é possivel procurar os pokemons pelo nome e acessar suas informações.",
      image: "/projects/pokeDex.png?height=400&width=600",
      tags: ["Angular", "TypeScript"],
      categories: ["angular", "frontend"],
      liveUrl: "https://pokedex-angular-eight-delta.vercel.app/",
      githubUrl: "https://github.com/kleber-a/pokedex-angular",
      featured: false,
    },
     {
      id: 6,
      title: "Compass Flix",
      description: "O aplicativo compass flix foi feito para consultar os dados dos seus filmes preferidos. Este projeto foi criado para aplicação em grupo do programa de estágio na Compass",
      image: "/projects/compassFlix.gif?height=400&width=600",
      tags: ["React Native", "React", "JavaScript"],
      categories: ["reactnative", "react", "frontend", "mobile"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filters = [
    { id: "todos", label: "Todos" },
    { id: "angular", label: "Angular" },
    { id: "next", label: "Next" },
    { id: "react", label: "React" },
    { id: "reactnative", label: "React Native" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Fullstack" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects =
    activeFilter === "todos" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured || activeFilter !== "todos")

  const [allProjects, setAllProjects] = useState(false)

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="py-20 transition-colors duration-300 relative"
    >
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Meus Projetos
          </h2>
          <p
            className={`max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Confira alguns dos meus trabalhos recentes
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transform transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredProject && activeFilter === "todos" && (
          <div
            className={`mb-20 transform transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border">
                Projeto em Destaque
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br via-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="flex gap-4">
                    <Link
                      href={featuredProject.githubUrl}
                      className="p-3 rounded-full transition-colors"
                      target="_blank"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link
                      href={featuredProject.liveUrl}
                      className="p-3 rounded-full backdrop-blur-sm transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                <p className="text-lg">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href={featuredProject.githubUrl}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border transition-colors"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </Link>
                  <Link
                    href={featuredProject.liveUrl}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full transition-colors"
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.slice(0, allProjects ? undefined : 3).map((project, index) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-500 transform hover:-translate-y-2 subtle-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${300 + 150 * index}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br via-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-bold">{project.title}</h4>
                      <div className="flex gap-2">
                        <Link
                          href={project.githubUrl}
                          className="text-white transition-colors"
                          target="_blank"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                        <Link
                          href={project.liveUrl}
                          className="text-white transition-colors"
                          target="_blank"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Link
                    href={project.githubUrl}
                    className="transition-colors flex items-center gap-1"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="transition-colors flex items-center gap-1"
                    target="_blank"
                  >
                    Ver Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 rounded-xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Nenhum projeto encontrado</h3>
            <p>Não há projetos na categoria selecionada.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => setAllProjects(!allProjects)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:shadow-lg hover:-translate-y-1"
          >
             {allProjects ? 'Ver Menos' : 'Ver Todos os Projetos'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
