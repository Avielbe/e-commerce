import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Cart from './components/Cart'
import ProductsScreen from './components/ProductsScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Cart/>
    <ProductsScreen />
      {/* <ProductCard /> */}
      {/* <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div> */}

      {/* <h1>Vite + React + Tailwind</h1>

      tailwind add:
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Protofolio</h1>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="text-xl">Contact</a>
      </nav> 
    </div>*/}
    

    </>
  )
}

export default App
