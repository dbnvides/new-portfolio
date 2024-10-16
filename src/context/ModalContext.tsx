import { createContext, useState } from 'react'
import type { Slide } from '../dataSlide'

export interface ModalContextValue {
  modalIsOpen: boolean
  openModal: (project: Slide) => void
  closeModal: () => void
  itemOpen: Slide | null
  setItemOpen: React.Dispatch<React.SetStateAction<Slide | null>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextValue>(
  {} as ModalContextValue
)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [itemOpen, setItemOpen] = useState<Slide | null>(null)

  const openModal = (project: Slide) => {
    setItemOpen(project)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setItemOpen(null)
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        itemOpen,
        setItemOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
