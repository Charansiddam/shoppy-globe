import React from 'react';
import styles from '../../styles/Suggestions.module.css';
import ProductItem from '../ProductList/ProductItem';

const Suggestions = () => {
  const suggestedProducts = [
    {
      id: 101,
      title: 'Stylish Headphones',
      price: 49.99,
      thumbnail:
        'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp',
    },
    {
      id: 102,
      title: 'Comfortable Earbuds',
      price: 29.5,
      thumbnail: 'https://i.dummyjson.com/products/14/thumbnail.jpg',
    },
    {
      id: 103,
      title: 'Portable Speaker',
      price: 35.0,
      thumbnail:
        'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp',
    },
  ];

  return (
    <div className={styles.suggestionsContainer}>
      <h2>You Might Also Like</h2>
      <div className={styles.suggestionsList}>
        {suggestedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
