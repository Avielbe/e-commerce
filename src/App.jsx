import './App.css';
import Header from './components/Header/Header';
import Cart from './components/preview/Cart';
import CardScreen from './components/preview/CardScreen';
import { ProductProvider } from './components/preview/CartContext';

function App() {
  return (
    <ProductProvider>
      <Header />
      <Cart />
      <CardScreen />
    </ProductProvider>
  );
}

export default App;

