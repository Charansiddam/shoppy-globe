import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../features/cartSlice';
import styles from '../../styles/header.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>ShoppyGlobe</Link>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/cart" className={styles.cartLink}>
          <FaShoppingCart className={styles.cartIcon} />
          {cartItemCount > 0 && (
            <span className={styles.cartCount}>{cartItemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

