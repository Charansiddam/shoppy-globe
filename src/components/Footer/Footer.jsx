import React from 'react';
import styles from '../../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h3>About Us</h3>
          <p>ShoppyGlobe is your one-stop shop for amazing products.</p>
        </section>
        <section className={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: support@shoppyglobe.com</p>
          <p>Phone: +91 9876543210</p>
        </section>
        <section className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/yourshoppyglobe"
              className={styles.icon}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/yourshoppyglobe"
              className={styles.icon}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourshoppyglobe/"
              className={styles.icon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </section>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
