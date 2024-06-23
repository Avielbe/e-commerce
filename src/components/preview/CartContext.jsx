// src/components/CartContext.jsx
import React, { createContext, useReducer } from 'react';
import productsData from '../products.json';
const CartContext = createContext();

const initialState = {
    cartItems: productsData.products.slice(0, 3).map((product, index) => ({
      ...product,
      quantity: index === 0 ? 1 : index === 1 ? 3 : 2,
    })),
  };

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, ProductProvider };

////