import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';
import PropTypes from 'prop-types';
import styles from '../../styles/productitem.module.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [addToCartStatus, setAddToCartStatus] = useState('Add to Cart');

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setAddToCartStatus('Added!');
    setTimeout(() => {
      setAddToCartStatus('Add to Cart');
    }, 1500);
  };

  return (
    <div className={styles.productItem}>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>
          ₹ {product.price.toLocaleString('en-IN')}
        </p>
      </Link>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        {addToCartStatus}
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
