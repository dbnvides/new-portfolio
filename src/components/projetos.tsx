import { useContext } from 'react'
import { slides } from '../dataSlide.ts'
import { Card } from './card.tsx'
import { ModalContext } from '../context/ModalContext.tsx'
import { ModalViewProjects } from './modal.tsx'

export const Projetos = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <>
      <ModalViewProjects />
      <section className="w-full min-h-auto p-2 flex flex-col gap-10 items-center overflow-hidden">
        <h1 className="text-center font-dosis text-5xl">Projetos</h1>
        <ul className="flex flex-wrap gap-4 p-2 justify-center max-w-[70%]">
          {slides.map(item => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              modal={() => openModal(item)}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
