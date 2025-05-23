import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../styles/productdetail.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';
import Suggestions from '../Suggestions/Suggestions';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addToCartStatus, setAddToCartStatus] = useState('Add to Cart');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product));
      setAddToCartStatus('Added!');
      setTimeout(() => setAddToCartStatus('Add to Cart'), 1500);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading product details...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        Error loading product details: {error.message}
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.productDetailMainContent}>
      <div className={styles.productDetailContainer}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>
            Price: ₹ {product.price.toLocaleString('en-IN')}
          </p>
          <p className={styles.productRating}>Rating: {product.rating}</p>
          <button
            onClick={handleAddToCart}
            className={styles.addToCartButton}
          >
            {addToCartStatus}
          </button>
        </div>
      </div>
      <Suggestions />
    </div>
  );
};

export default ProductDetail;
