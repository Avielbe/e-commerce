// src/components/ProductsScreen.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import ProductCard from './ProductCard';
import productsData from './products.json';

const ProductsScreen = () => {
  const { addToCart } = useContext(CartContext);
  const [products] = useState(productsData.products);
  const [categories] = useState(["כל המוצרים", ...productsData.categories]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = activeCategory === "כל המוצרים"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="container mx-auto my-8">
      <div className="flex space-x-4 mb-6 rtl">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;



// // src/components/ProductsScreen.jsx
// import React, { useContext, useState } from 'react';
// import { CartContext } from './CartContext';
// import ProductCard from './ProductCard';
// import productsData from './products.json';

// const ProductsScreen = () => {
//   const { addToCart } = useContext(CartContext);
//   const [products] = useState(productsData.products);
//   const [categories] = useState(["כל המוצרים", ...productsData.categories]);
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   const filteredProducts = activeCategory === "כל המוצרים"
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="container mx-auto my-8">
//       <div className="flex space-x-4 mb-6 rtl">
//         {categories.map(category => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsScreen;


// // src/components/ProductsScreen.jsx
// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import productsData from './products.json';

// const ProductsScreen = () => {
//   const [products] = useState(productsData.products);
// //   const [categories] = useState(productsData.categories);
//   const [categories] = useState(["כל המוצרים", ...productsData.categories]);
//   const [activeCategory, setActiveCategory] = useState(categories[0]);



// //   const filteredProducts = products.filter(product => product.category === activeCategory);
//   const filteredProducts = activeCategory === "כל המוצרים"
//   ? products
//   : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="container mx-auto my-8">
//       {/* Category Tabs */}
//       <div className="flex space-x-4 mb-6 rtl">
//         {categories.map(category => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsScreen;

// import React, { useState, useContext } from 'react';
// import ProductCard from './ProductCard';
// import productsData from './products.json';  // Importing the JSON data

// const ProductContext = React.createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState(productsData.products);  // Setting initial state from JSON
//   const [categories, setCategories] = useState(productsData.categories);
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   const filteredProducts = products.filter(product => product.category === activeCategory);

//   return (
//     <ProductContext.Provider value={{ products, categories, activeCategory, setActiveCategory, filteredProducts }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// // ... other components ...

// const ProductGrid = () => {
//   const { filteredProducts } = useContext(ProductContext);  // Getting filtered products from context

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {filteredProducts.map(product => (
//         <ProductCard key={product.id} product={product} />  // Passing each product to ProductCard
//       ))}
//     </div>
//   );
// };

// const ProductsScreen = () => {
//   return (
//     <ProductProvider>  // Wrapping components with ProductProvider
//       <div className="container mx-auto my-8">
//         <CategoryTabs />
//         <ProductGrid />
//       </div>
//     </ProductProvider>
//   );
// };

// export default ProductsScreen;