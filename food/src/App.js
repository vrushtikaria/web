import Register from './Register.js';
import Login from './Login';
import { useState } from "react";
import Meals from "./Components/meals/Meals";
//import Cart from "./Components/Cart/Cart";
//import CartProvider from './store/CartProvider';
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import Cart from "./Components/Cart/Cart"
import CartProvider from './store/CartProvider.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Navbar onShowCart={showCartHandler} />
      <div>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="/Register.js" element={<Register />} />
          <Route path="/Login.js" element={<Login />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
