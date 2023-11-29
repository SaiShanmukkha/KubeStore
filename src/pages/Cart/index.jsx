import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const [localCartItems, setLocalCartItems] = useState([]);

  // Load cart items from local storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setLocalCartItems(items);
  }, []);

  // Save cart items to local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {localCartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} 
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
