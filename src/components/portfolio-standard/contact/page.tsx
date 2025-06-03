"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("subject", formState.subject)
      formData.append("message", formState.message)

      const res = await fetch("https://getform.io/f/pagxnjob", {
        method: "POST",
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      alert("Erro de conexão. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background transition-colors duration-300 relative"
    >
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl bg-[#7B5EFF]/30 dark:bg-[#A28EFF]/15"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 gradient-text text-glow transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Entre em Contato
          </h2>
          <p
            className={`max-w-2xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`p-8 rounded-xl shadow-md dark:shadow-black/30 transform transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p>Obrigado pelo contato! Retornarei o mais breve possível.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-[var(--text-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-[var(--text-primary)]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-[var(--text-primary)]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-colors placeholder-[var(--text-primary)]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 font-medium rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div
            className={`flex flex-col justify-center space-y-8 transform transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
          >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
              <p>
                Estou disponível para freelance, projetos de longo prazo ou oportunidades de emprego.
              </p>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Localização</h3>
                <p>Recife, PE, Brasil</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl shadow-md dark:shadow-black/30 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>kleberandrade1998@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl shadow-md dark:shadow-black/30 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Telefone</h3>
                <p>(81) 99909-4851</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
