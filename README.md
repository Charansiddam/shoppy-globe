 ShoppyGlobe

Welcome to ShoppyGlobe, a simple e-commerce frontend built with React.  
It includes basic shopping features like browsing products, viewing details, managing a cart, and checking out.

This was built mainly as a personal project to practice React, Redux Toolkit, and routing with React Router.  
Feel free to explore or tweak it however you like.

---

 What It Does

- Browse a list of products
- View detailed info on each product
- Add/remove items from the cart
- Increase/decrease quantities
- Checkout flow (form and summary — basic for now)
- Responsive layout
- Uses Redux Toolkit for managing cart state
- React Router handles navigation between pages

---

 Tech Stack

- **React** (functional components + hooks)
- **Redux Toolkit** (for cart state)
- **React Router v6**
- **Vite** (super fast dev server )
- CSS Modules for scoped styling

---

 Folder Structure

src/
 ─ app/ # Redux store setup
 ─ components/ # Page components
 ─ Header/
 ─ Footer/
 ─ ProductList/
 ─ ProductDetail/
 ─ Cart/
 ─ Checkout/
   ─ NotFound/
 ─ features/ # Redux slices (e.g. cartSlice)
 ─ styles/ # Global + module CSS
 ─ App.jsx # App structure + routing
 ─ main.jsx # Entry point



---

Getting Started:

Clone the repo:

git clone https://github.com/Charansiddam/shoppyglobe.git
cd shoppyglobe

Install dependencies:
npm install

Run the dev server:
npm run dev

Visit http://localhost:5174 in your browser.

---

Notes
Make sure you have prop-types installed if you're using them:

bash
npm install prop-types
