import { useFormik } from "formik";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CartItems from "./Components/CartItems";
import CreateItem from "./Components/CreateItem";

import Homepage from "./Components/Homepage";

import Items from "./Components/Items";
import Navbar from "./Components/Navbar";

export const store = createContext();

const App = () => {
  const URL = "https://food-app-order.herokuapp.com";
  const [counter, setCounter] = useState(0);
  var datum = [];
  const [cartData, setCartData] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      category: "",
    },
  });

  return (
    <store.Provider value={[cartData, setCartData]}>
      <Navbar counter={counter} setCounter={setCounter} />
      <Routes>
        <Route
          path="/cartItems"
          element={
            <CartItems
              fdata={formik}
              counter={counter}
              setCounter={setCounter}
            />
          }
        />
        <Route path="/" element={<Homepage />} />
        <Route
          path="/getItems"
          element={
            <Items
              fdata={formik}
              datum={datum}
              counter={counter}
              setCounter={setCounter}
            />
          }
        />

        <Route path="/createItem" element={<CreateItem />} />
      </Routes>
    </store.Provider>
  );
};

export default App;
