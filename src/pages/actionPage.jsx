import React from "react";
import Header from "../components/Header";
import paris from '../components/images/parisclimateaccord.jpg'
import amazon from '../components/images/amazonForest.jpg'
import car from '../components/images/car.jpg'
import coal from '../components/images/coal.jpg'


const actionPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
          <h1>Action Around the World</h1>
          <h2>What has already been done to combat climate change?</h2>
          <hr />
          <h2>Paris Climate Accord</h2>
            <p>
                The Paris Climate Accord agreement , adopted on December 12th,
                was signed by nearly every country in the world. It is an 
                agreement whose goal is to reduce global greenhouse emissions
                with the hopes of reducing the increase of the average global 
                temperature to under 2 degrees Celsius.
            </p>
            <img src={paris}  width = "400" height = "200"/>
            <pre> ... </pre>
            <h2>Reducing Deforestation</h2>
            <p>
                The Brazilian government have been able to sucessfully 
                decrease deforestation in the Amazon. Between 2005 and 
                2010 deforestation decreased by 67%. Thanks to this, 
                1 billion tons of pollution never made its way into the
                atmosphere. Wealthy nations like Norway subsidized loss
                of revenue of the Brazilian government since they weren't 
                able to profit from cutting down trees.
            </p>
            <img src={amazon}  width = "400" height = "200"/>
            <pre> ... </pre>
            <h2>Fuel Efficient Cars</h2>
            <p>
                In the European Union(EU) it is mandated that, in US gallons,
                cars must be able to get 57 miles per gallon by this year and
                further reduce it by 37.5% by 2030. Although European Car
                Manufacturers say that this goal is too optomistic, it is a 
                stretch that the EU hopes to meet.
            </p>
            <img src={car}  width = "400" height = "200"/>
            <pre> ... </pre>
            <h2>Decrease in Coal Dependency</h2>
            <p>
                The usage of coal in the US has been on a steady decline. Last
                year alone coal generation decreased by 18%. This was able to
                happend because once expensive wind and solar power has now
                become cheaper than coal. Although, even with this being the 
                case renewable energy has not been the leading replacement
                of coal, gas had been.
            </p>
            <img src={coal}  width = "400" height = "200"/>
            <pre> ... </pre>
            <h2>Links to Other Ongoing Efforts</h2>
                <a href="https://www.un.org/en/sections/issues-depth/climate-change/">UN</a>
                <br></br>
                <a href="https://www.who.int/globalchange/links/climate/en/">WHO</a>
                <br></br>
                <a href="https://www.greenfacts.org/en/climate-change-ar3/links/index.htm">Greenfacts</a>
      </div>
    </div>
  );
};

export default actionPage;
