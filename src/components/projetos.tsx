import { useState } from 'react'
import motorshop from '../assets/motorshop.png'
import inOrbit from '../assets/InOrbit.png'
import hamburgueria from '../assets/hamburgueria.png'
import juniorjobs from '../assets/juniorJobs.png'
import kenzieHub from '../assets/KenzieHub.png'

export const Projetos = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: motorshop,
      name: 'MotorShop',
      descricao:
        'A aplicação consiste em um e-commerce voltado a compra e venda de automoveis, onde é possivel cadastrar dois tipos de usúarios, anunciante e comprador.',
    },
    {
      id: 2,
      image: juniorjobs,
      name: 'Junior Jobs',
      descricao:
        'A aplicação acima tem como objetivo facilitar essa busca, tanto para novos desenvolvedores quanto para empresas buscando novos colaboradores.',
    },
    {
      id: 3,
      image: inOrbit,
      name: 'InOrbit',
      descricao:
        'A aplicação desenvolvida ajuda os usuários a monitorar suas metas semanais, promovendo uma execução mais eficiente e um controle melhor sobre suas atividades.',
    },
    {
      id: 4,
      image: hamburgueria,
      name: 'Hamburgeria',
      descricao:
        'Aplicação voltada para compras de lanches e acompanhamentos, com sistemas de login e registro, sistema de carrinho e filtro para buscar os lanches, totalmente responsivo.',
    },
    {
      id: 5,
      image: kenzieHub,
      name: 'KenzieHub',
      descricao:
        'Aplicação voltada para desenvolvedores cujo o principal objetivo é anotar quais tecnologias voce tem conhecimento e colocar qual o grau de conhecimento.',
    },
  ]

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
            className="min-w-full text-center flex gap-4 justify-around"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-max h-[70vh] object-contain border-2 rounded-md"
            />
            <div className="flex flex-col gap-10 justify-center">
              <div className="border-2 h-max p-4 w-[300px] rounded-lg self-center shadow-xl">
                <h2 className="text-2xl font-bold mt-4">{slide.name}</h2>
                <p className="mt-2">{slide.descricao}</p>
              </div>
              <div className="flex justify-between p-2">
                <button
                  type="button"
                  className="border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis text-xl"
                >
                  Aplicação
                </button>
                <button
                  type="button"
                  className="border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis text-xl"
                >
                  Código Fonte
                </button>
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

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            type="button"
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  )
}
