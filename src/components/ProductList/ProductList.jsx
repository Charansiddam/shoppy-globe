import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../../hooks/useFetchProducts';
import styles from '../../styles/productlist.module.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetchProducts('https://dummyjson.com/products');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange(prevRange => ({
      ...prevRange,
      [name]: value
    }));
  };

  const filteredProducts = products
    ? products.filter(product => {
        const searchMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const priceFilter =
          (!priceRange.min || product.price >= parseInt(priceRange.min, 10)) &&
          (!priceRange.max || product.price <= parseInt(priceRange.max, 10));
        return searchMatch && priceFilter;
      })
    : [];

  const productsByCategory = filteredProducts.reduce((acc, product) => {
    const category = product.category || 'All';
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading products: {error.message}</div>;
  }

  return (
    <div className={styles.productListContainer}>
      <div className={styles.filterSection}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <div className={styles.priceFilter}>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            placeholder="Min"
          />
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            placeholder="Max"
          />
        </div>
      </div>

      {Object.keys(productsByCategory).map(category => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.productList}>
            {productsByCategory[category].map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
