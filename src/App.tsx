import { useState } from 'react'
import { Header } from './components/header'
import { SecaoMain } from './components/secao-main'
import { Projetos } from './components/projetos'
import { Contato } from './components/contato'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <SecaoMain />

      case 'projetos':
        return <Projetos />

      case 'contato':
        return <Contato />

      default:
        return <SecaoMain />
    }
  }

  const pageSelection = (page: string) => {
    setPage(page)
  }

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="min-h-screen w-screen flex flex-col bg-zinc-950">
      <Header renderPage={pageSelection} />

      <div className="flex-1 flex w-full bg-zinc-900 h-full justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
