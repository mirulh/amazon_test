import { createContext, useReducer } from 'react';
import logger from 'use-reducer-logger';

export const Store = createContext();

const initialState = {
  cart: {
    // cartItems: [],
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      console.log('After trash item:', JSON.stringify(cartItems, null, 2));
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(prop) {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const value = { state, dispatch };
  // console.log('Cart Provider', JSON.stringify(value, null, 2));
  return <Store.Provider value={value}>{prop.children}</Store.Provider>;
}

/* 

The hierarchy in theory

<StoreProvider>
<Store.Provider>
  <HelmetProvider>
    <App />
  </HelmetProvider>
</Store.Provider>
</StoreProvider>



props.children is every components under Store.Provider ie
  <HelmetProvider>
    <App />
  </HelmetProvider>

The value



*/
