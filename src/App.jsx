import React, { useState } from "react";
import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <AppNavbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <Home addToCart={addToCart} darkMode={darkMode} />
      <CartSidebar
        show={showCart}
        handleClose={() => setShowCart(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
