// src/App.jsx
import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/preview/Cart';
import ProductsScreen from './components/preview/ProductsScreen';
import { ProductProvider } from './components/preview/CartContext';
import {AuthProvider} from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';




function App() {

  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin ] = useState(true);

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  const switchAuthMode = () => {
    setIsLogin (!isLogin)
   };

  return (
<AuthProvider>
      <ProductProvider>
        <Router>
          <Header onUserIconClick={toggleAuth} />
          {showAuth ? (
            isLogin ? (
              <Login onSwitchToRegister={switchAuthMode} />
            ) :  (
              <Register onSwitchToLogin={switchAuthMode} />
            )
          ) : (
            <>
              <ProductsScreen />
              <Cart />
            </>
          )}
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;


// // src/App.jsx
// import React, {useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header/Header';
// import Cart from './components/preview/Cart';
// import ProductsScreen from './components/preview/ProductsScreen';
// import { ProductProvider } from './components/preview/CartContext';
// import Register from './components/Register';




// function App() {

//   const [showRegister, setShowRegister] = useState(false);

//   const toggleRegister = () => {
//     setShowRegister(!showRegister);
//   };

//   return (
//     <ProductProvider>
//       <Router>
//         <Header />
//         <Register />
//         {/* <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/products" element={<ProductsScreen />} />
//           <Route path="/" element={<ProductsScreen />} />
//         </Routes> */}
//         <ProductsScreen/>
//         <Cart /> 
//       </Router>
//     </ProductProvider>
//   );
// }

// export default App;




