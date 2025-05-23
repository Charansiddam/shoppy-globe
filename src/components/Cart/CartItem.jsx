import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/cart.module.css';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <li className={styles.cartItem}>
      <img
        src={item.thumbnail}
        alt={item.title}
        className={styles.cartItemImage}
      />
      <div className={styles.cartItemDetails}>
        <h4 className={styles.cartItemTitle}>{item.title}</h4>
        <p className={styles.cartItemPrice}>
          ₹ {item.price.toLocaleString('en-IN')}
        </p>
        <div className={styles.quantityControls}>
          <button
            onClick={() => onDecrease(item.id)}
            className={styles.quantityButton}
          >
            -
          </button>
          <span className={styles.itemQuantity}>{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className={styles.quantityButton}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className={styles.removeButton}
      >
        Remove
      </button>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartItem;
