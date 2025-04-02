import { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../context/ModalContext'
import { SquareX } from 'lucide-react'

Modal.setAppElement('#root')

export const ModalViewProjects = () => {
  const { closeModal, modalIsOpen, itemOpen } = useContext(ModalContext)
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Adding new subscribe"
      className="relative m-auto p-12 w-[95%] max-w-[700px] bg-zinc-950 max-h-[90%] overflow-y-auto rounded-md border-2"
      overlayClassName="modal-overlay"
    >
      {itemOpen && (
        <>
        <div className="flex flex-col items-center gap-4 font-dosis lg:flex-row">
          {itemOpen.name !== "Portfólio" ? (
            <div className="flex flex-col items-center gap-4 font-dosis w-[300px] md:w-[400px] lg:w-[1000px]">
            <img
              src={itemOpen.image}
              alt={itemOpen.name}
              className="object-contain w-[100%] h-full border-2 rounded-md "
            />
          </div>
          ):
          (
            <div className="flex flex-col items-center gap-4 font-dosis w-[300px] md:w-[400px] lg:w-[600px]">
            <img
              src={itemOpen.image}
              alt={itemOpen.name}
              className="object-contain w-[100%] h-full border-2 rounded-md "
            />
          </div>
          )}

            <main className='flex flex-col items-center justify-between'>
              <h1 className="text-2xl mb-10">{itemOpen.name}</h1>
              <p className="text-center">{itemOpen.descricao}</p>
              <div className="mt-4 text-center">
                <h2 className='underline'>Tecnologias utilizadas</h2>
                  <ul className="flex gap-2 flex-wrap justify-center mt-4">
                    {itemOpen.tecnologias.map((value, index) => (
                      <li
                        key={index}
                        className="bg-zinc-800 w-max p-1 rounded-lg font-dosis font-semibold"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
              </div>
            </main>
           
            <button
              type="button"
              onClick={closeModal}
              className="text-zinc-50 absolute right-5 top-3 md:top-5"
            >
              <SquareX size={32} />
            </button>
        </div>
        <div className="flex w-full justify-between mt-4">
          <a
            href={itemOpen.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[45%] text-center border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis md:text-xl"
          >
            Repositório
          </a>
          <a
            href={itemOpen.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[45%]  text-center border-2 p-2 rounded-lg hover:bg-white hover:text-black font-dosis md:text-xl"
          >
            Aplicação
          </a>
      </div>
      </>
      )}
    </Modal>
  )
}
