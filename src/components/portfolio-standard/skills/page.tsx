"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, FlaskConical, Hammer, Layout, Palette, Server, Smartphone, Star, Workflow, Zap } from "lucide-react"

export function Skills() {
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

  const skills = [
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Front-end",
      items: [
        { name: "Angular", isPrimary: true },
        { name: "Next", isPrimary: true },
        { name: "React", isPrimary: true },
        { name: "Vue.js", isPrimary: false },
        { name: "HTML5/CSS3", isPrimary: true },
        { name: "Tailwind CSS", isPrimary: true }
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Back-end",
      items: [
        { name: "Node.js", isPrimary: true },
        { name: "Express", isPrimary: true },
        { name: "Java", isPrimary: false }
      ],
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Testes",
      items: [
        { name: "Testes Unitários e de Integração (Jasmine, Jest, Vitest, Karma)", isPrimary: true },
        { name: "Testes Automatizados", isPrimary: true },
        { name: "Testes End-to-End (E2E)", isPrimary: false },
        { name: "Ferramentas: Cypress", isPrimary: true },
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Banco de Dados",
      items: [
        { name: "MongoDB", isPrimary: true },
        { name: "MySQL", isPrimary: false },
        { name: "Firebase", isPrimary: false },
        { name: "PostgreSQL", isPrimary: false },
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Linguagens",
      items: [
        { name: "TypeScript", isPrimary: true },
        { name: "JavaScript", isPrimary: false },
        { name: "PHP", isPrimary: false },
        { name: "Java", isPrimary: false },
        { name: "Python", isPrimary: false },
        { name: "C#", isPrimary: false },
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile",
      items: [
        { name: "React Native", isPrimary: true },
        { name: "Responsive Web", isPrimary: false },
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      items: [
        { name: "Figma", isPrimary: true },
        { name: "Design System", isPrimary: true },
        { name: "UI/UX Design", isPrimary: false },
        { name: "Responsive Design", isPrimary: true },
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI Frameworks",
      items: [
        { name: "Angular Material", isPrimary: true },
        { name: "Bootstrap", isPrimary: true },
        { name: "TailwindCSS", isPrimary: true },
        { name: "Styled Components", isPrimary: true },
      ],
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Metodologias",
      items: [
        { name: "Scrum", isPrimary: true },
        { name: "Kanban", isPrimary: true }
      ],
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Ferramentas",
      items: [
        { name: "Git/GitHub/GitLab", isPrimary: true },
        { name: "Docker", isPrimary: true },
        { name: "Postman", isPrimary: true },
        { name: "AWS", isPrimary: false },
      ],
    },
  ]

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Minhas Habilidades
          </h2>
          <p
            className={`max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Tecnologias e ferramentas que domino para criar soluções excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-[0_4px_10px_var(--shadow)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="mr-3 p-3 rounded-full">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skillCategory.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, i) => (
                    <div
                      key={i}
                      className={`relative px-3 py-2 rounded-lg transition-all duration-300`}
                      style={{ animationDelay: `${i * 100 + 300}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        {skill.isPrimary && (
                          <Star className="h-3 w-3" />
                        )}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>

                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3
              className={`text-2xl font-bold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ animationDelay: "300ms" }}
            >
              Principais Especialidades
            </h3>
            <p
              className={`mt-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ animationDelay: "400ms" }}
            >
              As tecnologias que mais domino e utilizo no dia a dia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills
              .flatMap((category) => category.items.filter((skill) => skill.isPrimary))
              .map((skill, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl shadow-[0_4px_10px_var(--shadow)] transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${500 + index * 100}ms`,
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center transition-colors">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-sm transition-colors">
                      {skill.name}
                    </h4>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
          </div>
        </div>

        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3
              className={`text-2xl font-bold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ animationDelay: "600ms" }}
            >
              Todas as Tecnologias
            </h3>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ animationDelay: "700ms" }}
          >
            {skills
              .flatMap((category) => category.items)
              .map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default`}
                >
                  {skill.isPrimary && (
                    <Star className="inline h-3 w-3 mr-1" />
                  )}
                  {skill.name}
                </span>
              ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
