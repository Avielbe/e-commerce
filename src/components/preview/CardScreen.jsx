import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import ProductCard from './Card';

const ProductsScreen = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["כל המוצרים"]);
  const [activeCategory, setActiveCategory] = useState("כל המוצרים");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        console.log('Fetched products:', response.data); // Add logging here
        const fetchedProducts = response.data;
        const uniqueCategories = [
          "כל המוצרים",
          ...new Set(fetchedProducts.map(product => product.category))
        ];
        setProducts(fetchedProducts);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err); // Add detailed logging here
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProducts = activeCategory === "כל המוצרים"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products-container my-8 pt-20 rtl w-3/4 ml-auto">
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 space-x-40 gap-6 mb-20">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;



// // src/components/ProductsScreen.jsx
// import React, { useState, useContext } from 'react';
// import { CartContext } from './CartContext';
// import ProductCard from './Card';
// import productsData from '../products.json';

// const ProductsScreen = () => {
//   const { addToCart } = useContext(CartContext);
//   const [products] = useState(productsData.products);
//   const [categories] = useState(["כל המוצרים", ...productsData.categories]);
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   const filteredProducts = activeCategory === "כל המוצרים"
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="products-container my-8 pt-20 rtl  w-3/4 ml-auto">
//       <div className="flex space-x-4 mb-6">
//         {categories.map(category => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-3 space-x-40 gap-6 mb-20">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsScreen;


