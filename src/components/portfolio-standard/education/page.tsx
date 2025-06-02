"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink } from "lucide-react"

export function Education() {
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

  const education = [
    {
      id: 1,
      degree: "Bacharelado em Ciência da Computação",
      institution: "Centro Universitário Maurício de Nassau",
      location: "Recife, PE",
      period: "2019 - 2022",
      status: "Concluído",
      description:
        "Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software.",
      // highlights: [
      //   "TCC: Sistema de Gerenciamento de Projetos com Angular",
      //   "Participação em projetos de extensão universitária",
      //   "Monitor da disciplina de Programação Web",
      //   "Membro do grupo de estudos em Inteligência Artificial",
      // ],
      // gpa: "8.5/10",
      type: "graduation",
    }
  ]

  //Melhoria

  // const certifications = [
  //   {
  //     id: 1,
  //     name: "teste",
  //     issuer: "test",
  //     date: "2023",
  //     credentialId: "test",
  //     url: "#",
  //     status: "test",
  //   },
  // ]

  // const courses = [
  //   {
  //     name: "test",
  //     platform: "test",
  //     duration: "40h",
  //     year: "test",
  //   },
  // ]

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background transition-colors duration-300 relative"
    >
      {/* Efeitos de fundo */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 gradient-text text-glow transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Educação & Certificações
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Formação acadêmica, certificações e cursos que fundamentam minha expertise técnica
          </p>
        </div> */}

        <div className="mb-20">
          <h3
            className={`text-2xl font-bold gradient-text mb-8 text-center transform transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Formação Acadêmica
          </h3>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-card dark:bg-card/80 p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-500 transform hover:-translate-y-2 subtle-border ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full text-primary dark:text-primary animate-pulse-slow">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold gradient-text mb-2">{edu.degree}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground dark:text-foreground">{edu.institution}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{edu.period}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span className="px-2 py-0.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded text-xs">
                            {edu.status}
                          </span>
                          {/* {edu.gpa && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <span className="px-2 py-0.5 bg-muted dark:bg-muted rounded text-xs">CRA: {edu.gpa}</span>
                            </>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                    <div>

                      {/* Melhoria*/}
                      {/* <h5 className="font-semibold text-foreground dark:text-foreground mb-2 text-sm">
                        Principais Destaques
                      </h5> */}
                      {/* <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary dark:bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Melhoria*/}
        {/* <div className="mb-20">
          <h3
            className={`text-2xl font-bold gradient-text mb-8 text-center transform transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Certificações Profissionais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`bg-card dark:bg-card/80 p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-500 transform hover:-translate-y-2 subtle-border group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full text-primary dark:text-primary group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground dark:text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-3">
                      <span>Obtido em: {cert.date}</span>
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-primary dark:text-primary">{cert.status}</span>
                    </div>
                    <a
                      href={cert.url}
                      className="inline-flex items-center gap-1 text-xs text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Verificar Credencial
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Cursos Complementares */}
        {/* <div>
          <h3
            className={`text-2xl font-bold gradient-text mb-8 text-center transform transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Cursos Complementares
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`bg-card dark:bg-card/80 p-4 rounded-xl shadow-md hover:shadow-lg dark:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1 subtle-border group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${700 + index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary dark:text-primary mx-auto mb-3 w-fit group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground dark:text-foreground mb-2">{course.name}</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>{course.platform}</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-2 py-0.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded">
                        {course.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-muted dark:bg-muted rounded">{course.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
