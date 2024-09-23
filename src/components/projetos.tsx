import { useState } from 'react'
import { slides } from '../dataSlide.ts'
import { Github } from 'lucide-react'

export const Projetos = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className="relative w-[80vw]  mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(slide => (
          <div
            key={slide.id}
            className="min-w-full text-center flex gap-10 justify-center"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-max h-[70vh] object-contain border-2 rounded-md"
            />
            <div className="flex flex-col gap-10 justify-center">
              <div className="flex flex-col gap-4">
                <div className="border-2 h-max p-4 w-[300px] rounded-lg self-center shadow-xl">
                  <h2 className="text-2xl font-bold mt-4">{slide.name}</h2>
                  <p className="mt-2">{slide.descricao}</p>
                </div>
                <div className="border-2 h-max p-4 w-[300px] rounded-lg self-center shadow-xl gap-5 flex flex-col">
                  <h2 className="text-2xl font-bold mt-4">
                    Principais Tecnolgias
                  </h2>
                  <ul className="flex gap-2 flex-wrap">
                    {slide.tecnologias.map((value, index) => (
                      <li
                        key={index}
                        className="bg-zinc-800 w-max p-1 rounded-lg font-dosis font-semibold"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>{' '}
                <div className="flex justify-between">
                  {slide.deploy && (
                    <a
                      href={slide.deploy}
                      target="_blank"
                      className="border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis text-xl"
                      rel="noreferrer"
                    >
                      Aplicação
                    </a>
                  )}

                  <a
                    href={slide.repositorio}
                    target="_blank"
                    className="border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis text-xl flex items-center gap-2"
                    rel="noreferrer"
                  >
                    <Github />
                    Código Fonte
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        type="button"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  )
}
