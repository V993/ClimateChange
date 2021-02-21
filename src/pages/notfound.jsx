import React from "react";
import Header from "../components/Header";

const notfound = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1>Oops, nothing here.</h1>
      </div>
    </div>
  );
};

export default notfound;
