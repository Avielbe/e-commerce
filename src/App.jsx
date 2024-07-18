// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/preview/Cart';
import ProductsScreen from './components/preview/ProductsScreen';
import { ProductProvider } from './components/preview/CartContext';
import Register from './components/Register';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Register />
        {/* <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/" element={<ProductsScreen />} />
        </Routes>
        <Cart /> */}
      </Router>
    </ProductProvider>
  );
}

export default App;





// //App.jsx
// import './App.css';
// import Header from './components/Header/Header';
// import Cart from './components/preview/Cart';
// import CardScreen from './components/preview/CardScreen';
// import { ProductProvider } from './components/preview/CartContext';

// function App() {
//   return (
//     <ProductProvider>
//       <Header />
//       <Cart />
//       <CardScreen />
//     </ProductProvider>
//   );
// }

// export default App;

