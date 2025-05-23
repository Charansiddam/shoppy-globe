import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './styles/base.css';

const ProductList = lazy(() => import('./components/ProductList/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail/ProductDetail'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));

const AppContent = () => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith('/product/');

  return (
    <div className="appContainer">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      {!isProductDetailPage && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <div className="appWrapper">
      <AppContent />
    </div>
  </Router>
);

export default App;
