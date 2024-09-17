import { Header } from './components/header'
import { SecaoMain } from './components/secao-main'

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-zinc-950">
      <Header />

      <div className="flex-1 flex w-full bg-zinc-700 h-full justify-center items-center">
        <SecaoMain />
      </div>
    </div>
  )
}

export default App
