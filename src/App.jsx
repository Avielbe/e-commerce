import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1>Vite + React + Tailwind</h1>

      {/* tailwind add: */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Protofolio</h1>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="text-xl">Contact</a>
      </nav>
    </div>
    

    </>
  )
}

export default App
