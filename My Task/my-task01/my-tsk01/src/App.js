import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Cart from "./pages/Cart";
import Learn from "./pages/Learn";

import CheackOut from "./component/CheackOut";
import Paintings from "./component/Paintings";

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
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <div className=" bg-gray-900 overflow-x-hidden App">
        <Navbar size={cart.length} setCart={setCart} setShow={setShow} />
        <React.Fragment>
          {show ? (
            <Learn handleClick={handleClick} />
          ) : (
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              size={cart.length}
            />
          )}
        </React.Fragment>
        <Routes>
          {/* {show ? (
          <Route path="/learn" element={<Learn handleClick={handleClick} />} />
        ) : (
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                size={cart.length}
              />
            }
          />
        )} */}
          <Route path="/CheackOut" element={<CheackOut />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Paintings/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
