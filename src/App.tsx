import { useState } from 'react'
import { Header } from './components/header'
import { SecaoMain } from './components/secao-main'
import { Projetos } from './components/projetos'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <SecaoMain />

      case 'projetos':
        return <Projetos />

      default:
        return <div>teste</div>
    }
  }

  const pageSelection = (page: string) => {
    setPage(page)
  }
  return (
    <div className="min-h-screen w-screen flex flex-col bg-zinc-950">
      <Header renderPage={pageSelection} />

      <div className="flex-1 flex w-full bg-zinc-900 h-full justify-center items-center">
        {renderPage()}
      </div>
    </div>
  )
}

export default App
