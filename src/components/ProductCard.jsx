// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Mock product for testing

// const mockProduct = {
//   id: 1,
//   name: "תפוחים אורגניים",
//   description: "תפוחים טריים ופריכים ממטעים מקומיים. עשירים בנוגדי חמצון וסיבים תזונתיים.",
//   brand: "הטבע הטוב",
//   pricePerHundredGrams: 1.99,
//   price: 7.99,
//   image: "https://shoppy.co.il/cdn/shop/products/pinkapple_720x.jpg",
//   category: "פירות"
// };

const ProductCard = ({ product = mockProduct }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrementQuantity = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="bg-white p-4 h-240 min-h-240 max-h-240 w-72 border-solid border-slate-500 rounded-lg shadow-md rtl hover:scale-105">
      
      {/* Product Name */}
      <h3 className="text-xl text-cyan-950 font-bold font-semibold mt-2">{product.name}</h3>
      
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      {/* Product Description */}
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      
      {/* Product Brand */}
      <p className="text-xs text-gray-500 mt-1">
        {product.brand ? `מותג: ${product.brand}` : 'ללא מותג'}
      </p>
      
      {/* Price per 100g */}
      <p className="text-sm font-medium text-gray-700 mt-2">
        ₪{product.pricePerHundredGrams.toFixed(2)} ל-100 גרם
      </p>
      
      {/* testing */}


      {/* end testing */}

      {/* Total Price */}
      <p className="text-lg font-bold text-gray-900">₪{totalPrice}</p>
      
      {/* Quantity Controls and Add Button */}
      <div className="flex  mt-1 text-cyan-900 border-slate-200" style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'slate-300', paddingTop: 10}}>
        <div className='flex: 1 text-white  hover:text-red-500 '  style={{ flex: 1, alignItems: 'center' }} aria-label='Quantity Controls'>
          <button 
            onClick={decrementQuantity} 
            className="bg-white text-xl px-2 py-1 rounded-l-md transition duration-300 ease-in-out hover:text-xl hover:border-white focus:outline-none"
          >
            -
          </button>
          <span className="bg-gray-100 text-cyan-900 px-4 py-1 border-0 border-sky-500">{quantity}</span>
          <span className='text-cyan-900'> יח' </span>
          <button 
            onClick={incrementQuantity} 
            className="bg-white text-xl px-2 py-1 rounded-l-md transition duration-300 ease-in-out hover:text-xl hover:border-white focus:outline-none"
            >
            +
          </button>
        </div>
        <div className=" w-full relative flex justify-center flex-wrap gap-5" style={{ flex: 0.7, alignItems: 'center' }} aria-label='Add Button'>
          <button className="btn relative px-5 ml-0 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-red-500 rounded-full hover:bg-white hover:border-gray-700 group py-1.5 px-2.5 duration-300 ease-in-out hover:shadow-md dark:hover:shadow-black/30"
          onClick={handleAddToCart}>
          <span className="w-56 h-48 rounded bg-gray-200 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-red-500">הוספה</span>
          </button>
      </div>
      </div>



    </div>
  );
};

export default ProductCard;


// //////
// // src/components/ProductCard.jsx
// import React, { useState } from 'react';

// // Mock product for testing
// const mockProduct = {
//   id: 1,
//   name: "תפוחים אורגניים",
//   description: "תפוחים טריים ופריכים ממטעים מקומיים. עשירים בנוגדי חמצון וסיבים תזונתיים.",
//   brand: "הטבע הטוב",
//   pricePerHundredGrams: 1.99,
//   price: 7.99,
//   image: "https://shoppy.co.il/cdn/shop/products/pinkapple_720x.jpg",
//   category: "פירות"
// };

// const ProductCard = ({ product = mockProduct }) => {
//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
//   const decrementQuantity = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  
//   const totalPrice = (product.price * quantity).toFixed(2);

//   return (
//     <div className="bg-white p-4 h-240 w-72  border-solid border-slate-500 rounded-lg shadow-md rtl">
      
//       {/* Product Name */}
//       <h3 className="text-xl text-cyan-950 font-bold font-semibold mt-2">{product.name}</h3>
      
//       {/* Product Image */}
//       <img 
//         src={product.image} 
//         alt={product.name} 
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
      
//       {/* Product Description */}
//       <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      
//       {/* Product Brand */}
//       <p className="text-xs text-gray-500 mt-1">
//         {product.brand ? `מותג: ${product.brand}` : 'ללא מותג'}
//       </p>
      
//       {/* Price per 100g */}
//       <p className="text-sm font-medium text-gray-700 mt-2">
//         ₪{product.pricePerHundredGrams.toFixed(2)} ל-100 גרם
//       </p>
      
//       {/* Total Price */}
//       <p className="text-lg font-bold text-gray-900">₪{totalPrice}</p>
      
//       {/* Quantity Controls and Add Button */}
//       <div className="flex items-center mt-2  text-cyan-900">
//         <button 
//           onClick={decrementQuantity} 
//           className="bg-red-500 px-2 py-1 rounded-r-md"
//         >
//           -
//         </button>
//         <span className="bg-gray-100 px-4 py-1">{quantity}</span>
//         <button 
//           onClick={incrementQuantity} 
//           className="bg-red-500 px-2 py-1 rounded-l-md"
//         >
//           +
//         </button>
//         <button className="mr-4 bg-red-500 text-white px-4 py-1 rounded-md">
//           הוספה
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ///////
// import React, { useState } from 'react';

// const ProductCard = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => setQuantity(q => q + 1);
//   const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md rtl">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
//       <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
//       <p className="text-sm text-gray-600 mt-1">{product.description}</p>
//       <p className="text-xs text-gray-500 mt-1">
//         {product.brand ? `מותג: ${product.brand}` : 'ללא מותג'}
//       </p>
//       <p className="text-sm font-medium text-gray-700 mt-2">₪{product.pricePerHundredGrams.toFixed(2)} ל-100 גרם</p>
//       <p className="text-lg font-bold text-gray-900">₪{(product.price * quantity).toFixed(2)}</p>
//       <div className="flex items-center mt-2">
//         <button onClick={decrementQuantity} className="bg-gray-200 px-2 py-1 rounded-r-md">-</button>
//         <span className="bg-gray-100 px-4 py-1">{quantity}</span>
//         <button onClick={incrementQuantity} className="bg-gray-200 px-2 py-1 rounded-l-md">+</button>
//         <button className="mr-4 bg-red-500 text-white px-4 py-1 rounded-md">הוסף</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;