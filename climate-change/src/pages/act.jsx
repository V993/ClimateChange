import React from "react";
import Header from "../components/Header";

const actnow = () => {
  return (
    //root
    <div className="container">
      <Header />
      <div className="content">
        <h1>Climate change starts with you.</h1>
        <h3>See how you can help.</h3>
        <hr />
        <h2 className="list-header">10 Impactful Steps</h2>
        <ol className="list">
          <li>Spread the word</li>
          <li>Power your home with renewable energy</li>
          <li>Invest in energy efficient appliances</li>
          <li>Reduce water waste</li>
          <li>Eat less meat</li>
          <li>Save electricity</li>
          <li>Drive a fuel-efficient vehicle</li>
          <li>Maintain your ride</li>
          <li>Avoid using cars</li>
          <li>Shrink your carbon profile</li>
        </ol>
        <small className="note">
          List courtesy of
          https://www.nrdc.org/stories/how-you-can-stop-global-warming.
        </small>
      </div>
    </div>
  );
};

export default actnow;
