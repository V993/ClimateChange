import React from 'react'
import Header from "../components/causepage";
import gif from "../components/images/greenhouse.gif"
import sealevelgif from "../components/images/sealevelrise.gif"
import animalpic from "../components/images/lionincity.jpg"
import agriculture from "../components/images/argriculture.png"
import johnoliver1 from "../components/images/parisclimate.jpg"
import johnoliver2 from "../components/images/greennewdeal.jpg"
const causes = () => {
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <h2><u>What is Climate Change?</u></h2>
                <p>Climate change is a change is a change in the usual weather found in a place. 
                    Climate change is also a change in Earth's Climate. This could be a change in Earth's usual temperature. 
                    Or it could be a change in where rain and snow usually fall on Earth. 
                    </p>
                <br></br>

                <h2><u>What is causing climate change?</u></h2>
                {/* image gif */}
                <img 
                style={{height: 300, width: 400}}
                resizeMode='contain'
                src={gif} />
                <p>Certain gases in the atmosphere block heat from escaping, also known as the Greenhouse effect.
                    Long lived gases that remain semi-permanently in the atmosphere and do not 
                    respond physically or chemically to change in the atmosphere and do not respond 
                    physically or chemically to changes in temperature are described as "forcing"
                    climate changes.
                    <br></br>
                    <br></br>
                    On earth, humans are changing the natural greenhouse. Over the last century: 
                    <li>Burning fossil fuels like coal and oil has increased the concentration of atmospheric carbon dioxide</li>
                    <li>Clearing land for agricuture, industry and other human activities has increased concentrations of greenhouse gases.
                    </li>
                    <h3>This leads to an increase of atmospheric carbon dioxide concentration and humans have increased 
                        atmospheric carbon dioxide concentration by 47% since the Industrial Revolution began </h3>
                </p>
                <br></br>
                <br></br>
                <h2><u>What are the consequences of climate change?</u></h2>
                <b>For lack of the better word, A LOT </b>
                <br></br>
                <br></br>
                <h4><u>1. Temperature Rise = Sea Levels rise:</u></h4>
                <p>As temperatures continue to rise, this leads to evaporation and precipitation, but some
                    individual regions will vary from wetter to dryer regions. 
                    This will warm our oceans and martially melt glaciers and ice sheets, which will increase sea levels. 
                    Ocean water will also expands as it warms, and CONTINUING sea level rise
                </p>
                <br></br>
                <h4>That means: No more Disney land or Universal World</h4>
                
                {/* resized image */}
                <img 
                style={{height: 300, width: 400}}
                resizeMode='contain'
                src={sealevelgif} />

                <h4><u>2.More Natural Disasters and climate extremes</u></h4>
                <li>Higher temperatures worsen and increases the frequency of storms 
                    flods, heat waves and droughts</li>
                <li>IT IS SNOWING IN TEXAS. According to the Environmental Protection Agency, 
                    Most of the state has warmed between 1.5 degrees Farenheit in the pasty century. In the easten 2/3 of the state 
                    average annual rainful is increasing, but soil is becoming drier. Rainstorms are becoming more intense and 
                    floods are more severe.
                </li>
                <li>Sea levels are rising two inches PER DECADE. In the coming decases, storms are likely to become MORE SEVERE
                        deserts may expand and summers are becoming more hot and dry
                </li>
                <li>Frequency and Stronger category 4 and 5 hurricanes increases</li>
                <li>Arctic is likely to become Ice-Free</li>
                <br></br>

                <h4><u>3.Cities become Zoos</u></h4>
                <p>According to the World Wild Life Organization, BOTH humans and animals face challenges for survival because of climate change</p>
                <li>Natural disasters destroys the places animals live in, and will wreak havoc on people's livelihoods and communities </li>
                <img 
                style={{height: 300, width: 400}}
                resizeMode='contain'
                src = {animalpic}/>

                <h4>4. Impact on Food</h4>
                <li>Increase in temperature, changes in precipitation patterns, changes in extreme 
                    weather events and reductions in water availability may result in REDUCED ARGRICULTURAL PRODUCTIVITY 
                </li>
                <li> Increase in severe weather events can interrupt food delivery and results in spikes in food prices after extreme events are expected to be more frequent.  </li>
                <li>Warming the Arctic contributes to salmon diseases in the Bering Sea and a resulting reduction in the Yukon Chinook Salmon.
                </li>
                <li>Warmer temperatures causes diseases in coral, eelgrass and abalone(yum) </li>
                <img 
                style={{height: 300, width: 400}}
                resizeMode='contain'
                src = {agriculture}/>
                <br></br>
                

                <p><u>Resources:</u></p>
                <li>NASA Climate</li>
                <li>Environmental Protection Agency</li>
                <li>World Wildlife Fund</li>
               
                <br></br>
                <p><u>Check out some videos:</u></p>
                
                <a target="_blank" href="https://youtu.be/5scez5dqtAc">
                <img 
                style={{height: 250, width: 400}}
                resizeMode='contain'
                src = {johnoliver1}/>
                </a>
                
                <br></br>
                <br></br>

                <a target="_blank" href="https://youtu.be/JDcro7dPqpA">
                <img 
                style={{height: 300, width: 400}}
                resizeMode='contain'
                src = {johnoliver2}/>
                </a>





            </div>



            
        </div>

    )
}

export default causes
