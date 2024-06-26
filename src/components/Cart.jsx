// src/components/Cart.jsx
import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart, FaPlus, FaMinus, FaTrashAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const [deliveryPrice, setDeliveryPrice] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
      setDeliveryPrice(0);
    } else if (totalItems > 0 && totalItems <= 750) {
      setDeliveryPrice(30);
    } else if (totalItems > 750) {
      setDeliveryPrice(10);
    }
  }, [cartItems]);

  const totalItems = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPrice = totalItems + deliveryPrice;
  const savings = 10; // Dummy savings value

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  const [isCartExpanded, setIsCartExpanded] = useState(true);
  const toggleCartExpansion = () => {
    setIsCartExpanded(!isCartExpanded);
  };

  return (
    <div className="fixed left-0 top-28 h-screen w-1/4 bg-white shadow-xl shadow-gray-600 overflow-y-auto flex flex-col">
      <div className="flex justify-between mb-4 px-4 pt-4" aria-label="Clear Cart Button">
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-right px-4 pt-4">הסל שלי:</h2>
        <span
          className="flex flex-col items-center text-gray-500 hover:text-red-500 cursor-pointer mr-2"
          onClick={clearCart}
          aria-label="Clear Cart"
        >
          <FaTrashAlt className='mb-1'/>
          <span className='text-sm'> רוקן סל</span>
        </span>
      </div>
      {isCartExpanded && (
        <div className="px-4 flex-grow overflow-y-auto">
          {/* Cart items */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-2 bg-gray-100  hover:text-gray-800 rounded-lg">
              <div className="text-right">
                <p className="font-semibold text-gray-700">{item.name}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-100  hover:bg-gray-300 hover:text-gray-800 rounded-full w-6 h-6 flex items-center justify-center  transition-colors duration-300"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <p className="text-gray-500">כמות: {item.quantity}</p>
                  <button
                    className="bg-gray-100  hover:bg-gray-300 hover:text-gray-800 rounded-full w-6 h-6 flex items-center justify-center  transition-colors duration-300"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold text-green-600">₪{item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
      {/* Cart footer */}
      <div className="mt-4 border-t-2 border-gray-300 pt-4 px-4 mb-32">
        <div className="flex justify-between mb-2">
          <p className="font-bold text-right text-gray-700">סה"כ</p>
          <p className="font-bold text-green-600">₪{(totalPrice - deliveryPrice).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-right text-gray-500">דמי משלוח</p>
          <p className="text-gray-700">₪{deliveryPrice.toFixed(2)}</p>
        </div>
        {/* Total Payment */}
        <div className="flex items-center mb-4 bg-gray-100">
          <div className="relative">
            <FaShoppingCart className="text-black w-9 h-9" />
            <span className="absolute top-0 left-4 bg-red-500 text-white rounded-full w-4 h-4 text-xs">
              {cartItems.length}
            </span>
          </div>
          <p className="text-gray-500 text-xs ml-2">כולל דמי משלוח</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-auto flex items-center">
            <span className="text-sm sm:text-base">לתשלום:</span>
            <span className="ml-2">₪{totalPrice.toFixed(2)}</span>
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <p className="text-right text-gray-500">בקנייה זו חסכת: </p>
          <p className=" text-green-600">₪{savings.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

