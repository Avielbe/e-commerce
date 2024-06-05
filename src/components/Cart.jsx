
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  // Dummy data for demonstration purposes
  const cartItems = [
    { id: 1, name: 'תפוחים', quantity: 2, price: 11.99 },
    { id: 2, name: 'גבינה', quantity: 1, price: 12.99 },
    { id: 3, name: 'לחם', quantity: 3, price: 8.69 },
  ];

  const deliveryPrice = 30;
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + deliveryPrice;
  const savings = 10; // Dummy savings value

  return (
    <div className="fixed left-0 top-28 h-screen w-1/5 bg-white shadow-xl shadow-gray-600 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4  text-blue-900 text-right px-4 pt-4">עגלת קניות</h2>
      <div className="px-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4 p-2 bg-gray-100 rounded-lg">
            <div className="text-right">
              <p className="font-semibold text-gray-700">{item.name}</p>
              <p className="text-gray-500">כמות: {item.quantity}</p>
            </div>
            <p className="font-bold text-green-600">₪{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t-2 border-gray-300 pt-4 px-4">
        <div className="flex justify-between mb-2">
          <p className="font-bold text-right text-gray-700">סה"כ</p>
          <p className="font-bold text-green-600">₪{totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-right text-gray-500">דמי משלוח</p>
          <p className="text-gray-700">₪{deliveryPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-right text-gray-500">בקנייה זו חסכת</p>
          <p className="font-bold text-green-600">₪{savings.toFixed(2)}-</p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <FaShoppingCart className="mr-2" />
          <span>רכישה ({cartItems.length})</span>
        </button>
        <button type="button" className="w-full bg-red-500 py-2 rounded-full text-white hover:bg-red-700 focus:outline-none mt-4">
        המשך לתשלום
      </button>
      </div>
    </div>
  );
};

export default Cart;
