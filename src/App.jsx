import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import ProductsScreen from './components/ProductsScreen';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <ProductsScreen />
    </CartProvider>
  );
}

export default App;

