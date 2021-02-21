import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import gif from "./images/billnye.gif"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      
      Climate change is devastating to communities globally.<br></br> Here's why
      you should care
      
    
      <Link to = "/">
       <img src={gif} />
      </Link>
      <br></br>
      
      <Link to = "/causes">
        <Button color="#2b2b2b" text="Causes " />
      </Link>
      <Link to = "/action">
        <Button color="#2b2b2b" text="Action " />
      </Link>
      <Link to="/donate">
        <Button color="#2b2b2b" text="Donate " />
      </Link>
      <Link to="/actnow">
        <Button color="#2b2b2b" text="Act Now " />
      </Link>

      <p>Contributors:</p>
      <p> Leonardo Matone, Nancy Ng, Luigi Agcaoili, Edwin Pineda</p>
    </header>
  );
};

export default Header;
