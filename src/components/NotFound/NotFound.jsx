import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>
        Oops! The page you are looking for could not be found.
      </p>
      <Link to="/" className={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
