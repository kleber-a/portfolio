import Link from "next/link"
import { Github, Linkedin, Twitter, Heart, Code } from "lucide-react"

export function Footer({ onSectionChange }: { onSectionChange: (section: string) => void }) {

  const handleClick = (value: string) => {
    onSectionChange(value);
  };


  return (
    <footer className="border-t py-12 transition-colors duration-300 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="font-bold text-xl mb-4 inline-flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Code className="h-5 w-5" />
              </div>
              Kleber Andrade
            </Link>
            <p className="mb-4">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/kleber-a"
                target="_blank"
                className="p-2 rounded-full transition-colors transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kleber-andrade"
                target="_blank"
                className="p-2 rounded-full transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleClick('sobre')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 group-hover:w-2 transition-all"></span>
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('experience')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 group-hover:w-2 transition-all"></span>
                  Experiência
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('education')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 group-hover:w-2 transition-all"></span>
                  Educação
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('habilidades')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 group-hover:w-2 transition-all"></span>
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('projetos')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 group-hover:w-2 transition-all"></span>
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('contato')}
                  className="transition-colors flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all"></span>
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Email:</span> kleberandrade1998@hotmail.com
              </li>
              <li>
                <span className="font-medium">Telefone:</span> (81) 99909-4851
              </li>
              <li>
                <span className="font-medium">Localização:</span> Recife,
                PE, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm md:text-left">
            &copy; {new Date().getFullYear()} Kleber Andrade. Todos os direitos reservados.
          </p>

          <p className="text-sm flex items-center gap-1">
            Feito com
            <Heart className="h-4 w-4" />
            usando Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
