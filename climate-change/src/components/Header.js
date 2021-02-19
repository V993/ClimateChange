import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      Climate change is devastating to communities globally.<br></br> Here's why
      you should care
      <br></br>
      <img src={logo} />
      <br></br>
      <Button color="#2b2b2b" text="Causes " />
      <Button color="#2b2b2b" text="Action " />
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
