import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import logo from "./images/logo.png";
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
      <Link to = "/causes">
        <Button color="#2b2b2b" text="Causes " />
      </Link>
      <Button color="#2b2b2b" text="Action " />
      <Button color="#2b2b2b" text="Influencers " />
      <Link to="/actnow">
        <Button color="#2b2b2b" text="Act Now " />
      </Link>
   
    </header>
  );
};

export default Header;
