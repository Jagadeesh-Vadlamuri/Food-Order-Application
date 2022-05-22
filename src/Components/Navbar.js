import React, { useContext } from "react";
import { store } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

const Navbar = ({ counter, setCounter }) => {
  const URL = "https://food-app-order.herokuapp.com";
  const [cartData, setCartData] = useContext(store);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "purple" }}
      >
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <Link className="btn btn-light" to="/">
            Home
          </Link>
          <a className="navbar-brand " href="#">
            <Link className="text-light text-decoration-none" to="/getItems">
              <h1>
                <strong>YUMMY 'N' TASTY</strong>
              </h1>
            </Link>
          </a>
          <Link
            className="btn btn-outline-light mt-auto d-flex flex-row"
            style={{ marginRight: 50, marginBottom: 15 }}
            to="/cartItems"
          >
            <ShoppingCartIcon />
            Cart
            <span className="badge bg-dark text-light mx-1 mt-1 rounded-pill">
              {counter}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
