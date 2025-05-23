import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartTotal,
} from '../../features/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import styles from '../../styles/cart.module.css';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        Your cart is empty. <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <ul className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        ))}
      </ul>
      <div className={styles.cartSummary}>
        <p className={styles.cartTotal}>Total: ${cartTotal.toFixed(2)}</p>
        <Link to="/checkout" className={styles.checkoutButton}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
