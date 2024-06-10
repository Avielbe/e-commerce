// src/components/ProductCard.jsx
import React, { useState } from 'react';

// Mock product for testing
const mockProduct = {
  id: 1,
  name: "תפוחים אורגניים",
  description: "תפוחים טריים ופריכים ממטעים מקומיים. עשירים בנוגדי חמצון וסיבים תזונתיים.",
  brand: "הטבע הטוב",
  pricePerHundredGrams: 1.99,
  price: 7.99,
  image: "https://shoppy.co.il/cdn/shop/products/pinkapple_720x.jpg",
  category: "פירות"
};

const ProductCard = ({ product = mockProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrementQuantity = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="bg-white p-4 h-240 w-72  border-solid border-slate-500 rounded-lg shadow-md rtl">
      
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
      
      {/* Total Price */}
      <p className="text-lg font-bold text-gray-900">₪{totalPrice}</p>
      
      {/* Quantity Controls and Add Button */}
      <div className="flex items-center mt-2  text-cyan-900">
        <button 
          onClick={decrementQuantity} 
          className="bg-red-500 px-2 py-1 rounded-r-md"
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{quantity}</span>
        <button 
          onClick={incrementQuantity} 
          className="bg-red-500 px-2 py-1 rounded-l-md"
        >
          +
        </button>
        <button className="mr-4 bg-red-500 text-white px-4 py-1 rounded-md">
          הוספה
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

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