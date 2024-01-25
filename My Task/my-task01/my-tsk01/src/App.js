import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import Learn from "./component/Learn";
import { data } from "jquery";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
    return;
  }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount  += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className=" bg-gray-900 overflow-x-hidden App">
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        {show ? (
          <Learn handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </React.Fragment>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
