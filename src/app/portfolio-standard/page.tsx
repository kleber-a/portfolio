"use client"

import { About } from "@/components/portfolio-standard/about/page"
import { Contact } from "@/components/portfolio-standard/contact/page"
import { Education } from "@/components/portfolio-standard/education/page"
import { Experience } from "@/components/portfolio-standard/experience/page"
import { Footer } from "@/components/portfolio-standard/footer/page"
import { Header } from "@/components/portfolio-standard/header/page"
import { Hero } from "@/components/portfolio-standard/hero/page"
import { Projects } from "@/components/portfolio-standard/projects/page"
import { Skills } from "@/components/portfolio-standard/skills/page"
import { useEffect, useRef, useState } from "react"

export default function PortfolioPadrao() {
  const mainRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const handleSectionChange = (section: string) => {
    const element = document.getElementById(section)
    if (element && mainRef.current) {
      mainRef.current.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const handleScroll = () => {
      const scrollTop = main.scrollTop
      setScrolled(scrollTop > 20)

      const sections = ["home", "sobre", "experience", "education", "habilidades", "projetos", "contato"]
      const scrollPosition = scrollTop + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    main.addEventListener("scroll", handleScroll)
    return () => main.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <main ref={mainRef} className="flex-1 overflow-auto">
        <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
        <Hero onSectionChange={handleSectionChange} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer onSectionChange={handleSectionChange} />
      </main>
    </div>
  )
}
