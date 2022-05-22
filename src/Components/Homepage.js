import React from "react";
import { Link } from "react-router-dom";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const Homepage = () => {
  return (
    <div className="container">
    <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to the Jags Food Delivery Application</h1>
      <DeliveryDiningIcon style={{fontSize: 280}}/>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Link className="btn btn-light text-light" style={{backgroundColor: 'purple'}} to="/createItem">Create Item</Link>
        <Link className="btn btn-secondary mx-3" to="/getItems">Show All Items</Link>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
