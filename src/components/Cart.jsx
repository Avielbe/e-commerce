// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext'
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed left-0 top-28 h-screen w-1/4 bg-white shadow-xl shadow-gray-600 overflow-y-auto flex flex-col">
      <div className="flex justify-between mb-4 px-4 pt-4">
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-right px-4 pt-4">הסל שלי:</h2>
        <span className="flex flex-col items-center text-gray-500 hover:text-red-500 cursor-pointer mr-2" onClick={clearCart}>
          <FaTrashAlt className='mb-1'/>
          <span className='text-sm'>רוקן סל</span>
        </span>
      </div>
      <div className="px-4 flex-grow overflow-y-auto">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4 p-2 bg-gray-100 rounded-lg">
            <div className="text-right">
              <p className="font-semibold text-gray-700">{item.name}</p>
              <p className="text-gray-500">כמות: {item.quantity}</p>
            </div>
            <p className="font-bold text-green-600">₪{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t-2 border-gray-300 pt-4 px-4 mb-32">
        <div className="flex justify-between mb-2">
          <p className="font-bold text-right text-gray-700">סה"כ</p>
          <p className="font-bold text-green-600">₪{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// // import { ServerDescriptionChangedEvent } from 'mongodb';
// import React, { useState } from 'react';
// import { FaShoppingCart, FaPlus, FaMinus, FaTrashAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';

// const Cart = () => {
//   // Dummy data for demonstration purposes
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'תפוחים', quantity: 2, price: 11.99 },
//     { id: 2, name: 'גבינה', quantity: 1, price: 12.99 },
//     { id: 3, name: 'לחם', quantity: 3, price: 8.69 },
//   ]);

//   const deliveryPrice = 30;
//   const totalItems = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const totalPrice = totalItems + deliveryPrice;
//   const savings = 10; // Dummy savings value

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const increaseQuantity = (id) => {
//     setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
//   };

//   const decreaseQuantity = (id) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity > 1 ? item.quantity - 1 : 0,
//             }
//           : item
//       ).filter((item) => item.quantity > 0)
//     );
//   };

//   const [isCartExpanded, setIsCartExpanded] = useState(true);
//   const toggleCartExpansion = () => {
//     setIsCartExpanded(!isCartExpanded);
//   };

//   return (
//     <div className="fixed left-0 top-28 h-screen w-1/4 bg-white shadow-xl shadow-gray-600 overflow-y-auto flex flex-col">
//         <div className="flex justify-between mb-4 px-4 pt-4" aria-label="Clear Cart Button" >
//             <h2 className="text-xl font-bold mb-4  text-blue-900 text-right px-4 pt-4">הסל שלי:</h2>
//             <span
//                 className="flex flex-col items-center text-gray-500 hover:text-red-500 cursor-pointer mr-2"
//                 onClick={clearCart}
//                 aria-label="Clear Cart"
//             >
//                 <FaTrashAlt className='mb-1'/>
//                 <span className='text-sm'> רוקן סל</span>
//             </span>

//         </div>
//         {isCartExpanded && (
//             <div className="px-4 flex-grow overflow-y-auto">
//             {/* Cart items */}
//             <div className="px-4 flex-grow overflow-y-auto">
//             {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center mb-4 p-2 bg-gray-100 rounded-lg">
//                 <div className="text-right">
//                 <p className="font-semibold text-gray-700">{item.name}</p>
//                 <div className="flex items-center space-x-2">
//                         <button
//                             className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-300 opacity-0 hover:opacity-100"
//                             onClick={() => decreaseQuantity(item.id)}
//                         >
//                             -
//                         </button>
//                         <p className="text-gray-500">כמות: {item.quantity}</p>
//                         <button
//                             className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-300 opacity-0 hover:opacity-100"
//                             onClick={() => increaseQuantity(item.id)}
//                         >
//                             +
//                         </button>
//                     </div>
//                 </div>
//                 <p className="font-bold text-green-600">₪{item.price.toFixed(2)}</p>
//             </div>
//             ))}
//             </div>
//         </div>
//         )}
//         {/* Cart footer */}
//         <div className="mt-4 border-t-2 border-gray-300 pt-4 px-4 mb-32">
//         <div className="flex justify-between mb-2">
//           <p className="font-bold text-right text-gray-700">סה"כ</p>
//           <p className="font-bold text-green-600">₪{(totalPrice - deliveryPrice).toFixed(2)}</p>
//         </div>
//         <div className="flex justify-between mb-2">
//           <p className="text-right text-gray-500">דמי משלוח</p>
//           <p className="text-gray-700">₪{deliveryPrice.toFixed(2)}</p>
//         </div>

//         {/* Total Payment */}
//         <div className="flex items-center mb-4 bg-gray-100">
//             {/* <span className="flex items-center text-gray-500 hover:text-red-500 cursor-pointer mr-2" onClick={toggleCartExpansion}>
//             {isCartExpanded ? <FaArrowUp /> : <FaArrowDown />}
//             </span> */}
//             <div className="relative">
//                 <FaShoppingCart className="text-black w-9 h-9" />
//                 <span className="absolute top-0 left-4 bg-red-500 text-white rounded-full w-4 h-4 text-xs">
//                 {cartItems.length}
//                 </span>
//             </div>
//             <p className="text-gray-500 text-xs ml-2">כולל דמי משלוח</p>
//             <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-auto flex items-center">
//                 <span className="text-sm sm:text-base">לתשלום:</span>
//                 <span className="ml-2">₪{totalPrice.toFixed(2)}</span>
//             </button>
//         </div>

//         <div className="flex justify-center mb-4">
//           <p className="text-right text-gray-500">בקנייה זו חסכת: </p>
//           <p className=" text-green-600">₪{savings.toFixed(2)}</p>
//         </div>
        


//         </div>
//     </div>
    
//   );
// };

// export default Cart;


// need to fix the "totl payment" ServerDescriptionChangedEvent
// need to finish logic of shrink cart
