import { useState } from 'react'
import { Github, House, Laptop, Linkedin, SquareUserRound } from 'lucide-react'
import photo from '../assets/personal-image.jpeg'

type HeaderProps = {
  renderPage: (page: string) => void
}

export const Header: React.FC<HeaderProps> = ({ renderPage }) => {
  // Estado para controlar o menu de navegação
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="border-b-2 container mx-auto border-zinc-800 h-24 py-4 flex justify-between items-center w-full relative">
      <div className="w-max h-12 gap-4 pl-1 pr-4 rounded-md md:flex justify-center items-center bg-zinc-800 text-white hidden ">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <img src={photo} alt="foto pessoal" />
        </div>
        <p className="flex font-semibold">Dionísio Benevides</p>
      </div>

      {/* Botão para abrir/fechar o menu em telas menores */}
      <button
        type="button"
        className="md:hidden text-white absolute right-10 text-lg bg-zinc-800 rounded-md p-2 px-2 w-10"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {/* Ícone de menu ou fechar baseado no estado */}
        {isNavOpen ? '✖️' : '☰'}
      </button>

      {/* Navegação */}
      <nav
        className={`${
          isNavOpen ? 'block' : 'hidden'
        } md:block text-white w-max font-dosis absolute right-10 top-[70px] bg-zinc-950 p-5 rounded-md md:static z-50`}
      >
        <ul className="flex flex-col md:flex-row gap-8 items-center w-full justify-center h-full">
          <li className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm border-b-2 border-zinc-950 hover:border-zinc-50"
              onClick={() => {
                renderPage('home')
                setIsNavOpen(false) // Fecha o menu ao clicar no item
              }}
            >
              <House size={20} />
              Home
            </button>
          </li>
          <li className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm border-b-2 border-zinc-950 hover:border-zinc-50"
              onClick={() => {
                renderPage('projetos')
                setIsNavOpen(false)
              }}
            >
              <Laptop size={20} />
              Projetos
            </button>
          </li>
          <li className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm border-b-2 border-zinc-950 hover:border-zinc-50"
              onClick={() => {
                renderPage('contato')
                setIsNavOpen(false)
              }}
            >
              <SquareUserRound size={20} />
              Contate-me
            </button>
          </li>
          <li className="flex gap-2">
            <a
              href="https://github.com/dbnvides"
              target="_blank"
              className="flex items-center gap-2 rounded-sm border-b-2 border-zinc-950 hover:border-zinc-50"
              rel="noreferrer"
              onClick={() => setIsNavOpen(false)}
            >
              <Github size={20} />
              Github
            </a>
          </li>
          <li className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/dionisiosantos/"
              target="_blank"
              className="flex items-center gap-2 rounded-sm border-b-2 border-zinc-950 hover:border-zinc-50"
              rel="noreferrer"
              onClick={() => setIsNavOpen(false)}
            >
              <Linkedin size={20} />
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
