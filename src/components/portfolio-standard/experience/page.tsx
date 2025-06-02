"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react"

export function Experience() {
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

  const experiences = [
    {
      id: 1,
      position: "Desenvolvedor Front End",
      company: "Enacom Group",
      location: "Remoto",
      period: "Mar 2023 - Jan 2025",
      type: "Tempo Integral",
      description:
        "Atuei como Front-End Developer no desenvolvimento de grandes projetos para empresas de grande porte. Fui responsável pela criação de um Design System e atuei apoiando e mentorando desenvolvedores juniores.",
      achievements: [
        "Desenvolvi soluções modernas e eficientes utilizando Angular com foco em alta performance e usabilidade.",
        "Atuei em projetos estratégicos para grandes empresas dos setores de siderurgia, financeiro e energia, como Gerdau e Cemig, contribuindo para a transformação digital de seus negócios.",
        "Criei Design System uma biblioteca de componentes padronizados para unificar e otimizar a experiência em projetos internos.",
        "Implementei testes unitários utilizando Jasmine e Karma, garantindo a qualidade e a confiabilidade do código, com cobertura de testes para componentes, serviços e funções em Angular.",
        "Trabalhei em ambiente ágil, aplicando a metodologia Scrum e utilizando ferramentas como Azure DevOps para gestão de projetos e integração contínua.",
        "Entreguei interfaces responsivas, intuitivas e alinhadas às melhores práticas de desenvolvimento.",
        "Trabalhei com bibliotecas gráficas como Chart.js, Plotly.js, e ApexCharts para criar visualizações de dados interativas e dinâmicas.",
        "Utilizei Git, GitLab e NVM (Node Version Manager) para controle de versão, garantindo integração contínua e colaboração eficiente nos projetos."  
      ],
      technologies: ["Angular", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "Devops", "Figma", "Git/GitHub/GitLab"],
      companyUrl: "#",
      current: false,
    },
    {
      id: 2,
      position: "Desenvolvedor Front End / Trilha React Native no Scholarship Program",
      company: "Compass. UOL",
      location: "Remoto",
      period: "Jan 2022 - Abr 2022",
      type: "Meio Período",
      description:
        "Desenvolvi aplicativos mobile com JavaScript, React e React Native, priorizando entregas ágeis e eficientes.",
      achievements: [
        "Desenvolvi projetos Mobile utilizando React Native.",
        "Atuei em ambiente colaborativo com designers através do Figma, garantindo uma experiência de usuário consistente.",
        "Realizei testes de API utilizando Postman e trabalhei com metodologias ágeis como Scrum, Jira, e Kanban para gerenciamento de projetos."
      ],
      technologies: ["React Native", "React", "JavaScript", "TypeScript", "Jira", "Figma", "Git/GitHub/GitLab"],
      companyUrl: "#",
      current: false,
    }
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 transition-colors duration-300 relative"
    >
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Experiência Profissional
          </h2>
          <p
            className={`max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Minha trajetória profissional e principais conquistas ao longo dos anos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--desktop-bg-reverse)]"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative mb-12 transform transition-all duration-700 bg-[var(--desktop-bg)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 border-[var(--desktop-bg-reverse)] bg-[var(--desktop-bg)] rounded-full border-4 shadow-lg z-10">
                  {experience.current && (
                    <div className="absolute inset-0 rounded-full animate-ping"></div>
                  )}
                </div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-8" : "md:ml-1/2 md:pl-8"}`}>
                  <div className="p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-500 transform hover:-translate-y-2">

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-5 w-5" />
                          <h3 className="text-xl font-bold">{experience.position}</h3>
                          {experience.current && (
                            <span className="px-2 py-1 text-xs rounded-full border">
                              Atual
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm mb-2">
                          <div className="flex items-center gap-1">
                            <span className="font-medium">
                              {experience.company}
                            </span>
                            <ExternalLink className="h-3 w-3 opacity-50" />
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{experience.period}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span className="px-2 py-0.5 rounded text-xs">{experience.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed">{experience.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ChevronRight className="h-4 w-4" />
                        Principais Conquistas
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Tecnologias Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
