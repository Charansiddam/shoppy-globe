import React, { useState } from "react";
import styles from "../../styles/checkout.module.css"; // Create this CSS module

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add real payment/order logic here
    alert("Order placed successfully!");
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className={styles.checkoutForm}>
        <div>
          <label>Name</label>
          <input name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input name="address" type="text" value={form.address} onChange={handleChange} required />
        </div>
        <div>
          <label>City</label>
          <input name="city" type="text" value={form.city} onChange={handleChange} required />
        </div>
        <div>
          <label>ZIP Code</label>
          <input name="zip" type="text" value={form.zip} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.submitBtn}>Place Order</button>
      </form>

      <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <p>3 items</p>
        <p>Total: ₹5,400</p>
        <p>Shipping: Free</p>
      </div>
    </div>
  );
};

export default Checkout;

