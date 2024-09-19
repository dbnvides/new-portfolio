import { Github, House, Laptop, Linkedin } from 'lucide-react'
import photo from '../assets/personal-image.jpeg'

type HeaderProps = {
  renderPage: (page: string) => void
}

export const Header: React.FC<HeaderProps> = ({ renderPage }) => {
  return (
    <header className="border-b-2 container mx-auto border-zinc-800 h-24 py-4 flex justify-between items-center ">
      <div className="w-max h-12 gap-4 pl-1 pr-4 rounded-md flex justify-center items-center bg-zinc-800 text-white">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <img src={photo} alt="foto pessoal" />
        </div>
        <p className="flex font-semibold">Dionísio Benevides</p>
      </div>
      <nav className="text-white w-max font-dosis">
        <ul className="flex gap-4 items-center w-full justify-center h-full">
          <li className="flex gap-2">
            <button
              type="button"
              className="flex gap-2 p-1 rounded-sm hover:bg-zinc-700"
              onClick={() => renderPage('home')}
            >
              <House size={20} />
              Home
            </button>
          </li>
          <li className="flex gap-2">
            <button
              type="button"
              className="flex gap-2 p-1 rounded-sm hover:bg-zinc-700"
              onClick={() => renderPage('projetos')}
            >
              <Laptop size={20} />
              Projetos
            </button>
          </li>{' '}
          <li className="flex gap-2">
            <a
              href="https://github.com/dbnvides"
              target="_blank"
              className="flex gap-2 p-1 rounded-sm hover:bg-zinc-700"
              rel="noreferrer"
            >
              <Github size={20} />
              Github
            </a>
          </li>{' '}
          <li className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/dionisiosantos/"
              target="_blank"
              className="flex gap-2 p-1 rounded-sm hover:bg-zinc-700"
              rel="noreferrer"
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
