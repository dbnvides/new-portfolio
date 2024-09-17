import {
  BriefcaseBusiness,
  Download,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'
import profile from '../assets/personal-image.jpeg'
import curriculo from '../assets/Dionísio Benevides dos Santos.pdf'

export const SecaoMain = () => {
  return (
    <section className="container w-screen h-[80vh]">
      <div className=" w-full h-full flex justify-center items-center gap-10">
        <div className="w-[325px] border-2 shadow-zinc-400 shadow-inner h-[450px] rounded-tl-[110px] rounded-br-[110px]">
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <div className="w-14 h-14 rounded-full  border-zinc-400 border-2 overflow-hidden">
              <img src={profile} alt="foto de perfil" />
            </div>
            <h1 className="font-dosis text-2xl text-white ">Dionísio</h1>
            <span className="font-dosis text-zinc-300">
              Full-Stack Developer
            </span>
            <div className="flex flex-col mt-2 gap-4">
              <span className="flex gap-2 items-center justify-center font-dosis">
                <Mail />
                contatodionisiobenevides@gmail.com
              </span>
              <span className="flex gap-2 items-center font-dosis">
                <MapPin />
                Brazil
              </span>
              <span className="flex gap-2 items-center font-dosis">
                <BriefcaseBusiness />
                Full-time / Freelancer
              </span>
              <ul className="flex gap-2 flex-wrap">
                <li className="bg-zinc-900 w-max p-1 rounded-lg font-dosis font-semibold">
                  HTML
                </li>
                <li className="bg-zinc-900 w-max p-1 rounded-lg font-dosis font-semibold">
                  CSS3
                </li>
                <li className="bg-zinc-900 w-max p-1 rounded-lg font-dosis font-semibold">
                  Typescript
                </li>
                <li className="bg-zinc-900 w-max p-1 rounded-lg font-dosis font-semibold">
                  ReactJs
                </li>
              </ul>

              <a
                href={curriculo}
                download="Dionisio Benevides dos Santos.pdf"
                className="flex mt-10 bg-white text-black font-dosis justify-between w-32 font-bold rounded-md p-2 self-center text-center"
              >
                Download CV <Download />
              </a>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex-col flex h-[450px] gap-10">
          <h1 className="text-5xl font-dosis leading-tight">
            Olá, <br />
            Me chamo <b>Dionísio</b>,
            <br /> Full-Stack Developer
          </h1>
          <p className="font-dosis text-lg">
            {' '}
            Sinta-se à vontade para navegar e conhecer meu trabalho. Estou
            ansioso para compartilhar minhas habilidades e experiências com
            você. Puxe uma cadeira e aproveite!
          </p>
          <a
            href="https://www.linkedin.com/in/dionisiosantos/"
            target="_blank"
            className="flex hover:bg-zinc-900 w-max p-2 rounded-md gap-4 mt-8 text-4xl font-dosis items-center"
            rel="noreferrer"
          >
            Vamos conversar{' '}
            <span className="bg-blue-500 p-2 rounded-lg">
              <Linkedin size={40} />
            </span>{' '}
          </a>
        </div>
      </div>
    </section>
  )
}
