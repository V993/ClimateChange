import React from "react";
import logoAR from "./images/logoAR.jpg";
import logoEDF from "./images/logoEDF.jpg";
import logoNC from "./images/logoNC.jpg";
import logoNRDC from "./images/logoNRDC.jpg";
import logoSC from "./images/logoSC.png";


const ImageLink = () => {
    return (
        <body>
            <div id="grad1">
                <br></br>
                <p>
                    <a href="https://www.americanrivers.org/threats-solutions/rivers-and-climate-change/"> 
                    <img class="resize" img src={logoAR} />
                    </a>
                </p>
                {/*<p><a href="https://www.americanrivers.org/">American Rivers</a></p>*/}
                <br></br>
                <br></br>

                <p><h4>American Rivers works to protect wild rivers ad restor damaged rivers to conserve clean water 
                    for people and nature. Donations to American Rivers will aid in their initiatives to protect rivers 
                    from not only climate change, but also legislation or initiatives which would harm our rivers.</h4></p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="grad2">
                <br></br>
                <p>
                    <a href="https://www.edf.org/">
                    <img class="resize" img src={logoEDF} ></img>
                    </a>
                </p>
                {/*<p><a href="https://www.edf.org/">Environmental Defense Fund</a></p>*/}
                <br></br>
                <br></br>

                <p><h4>The Environmental Defense Fund (EDF) is dedicated towards taking on climate change by identifying
                     urgent issues on a global scale, and pinpointing where their efforts would make the most difference. 
                     Donating to EDF will directly support their efforts to target sources of climate pollution around 
                     the world, advocating for legislative change, fighting for limits on power plant polition, and 
                     exploring sustainable fuels.</h4></p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <div id="grad3">
                <br></br>
                <p>
                    <a href="https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/">
                    <img class="resize" img src={logoNC}></img>
                    </a>
                </p>
                {/*<p><a href="https://www.nature.org/en-us/">The Nature Conservancy</a></p>*/}
                <br></br>                
                <br></br>

                <p><h4>The Nature Conservancy works to protect nature with nature. Their initiatives planting 
                    trees to store carbon dioxide, promoting clean energy to grow economis and reduce carbon emissions, 
                    and advocating for legislative change are just a few of the things the Nature Conservancy does to 
                    combat climate change. Your donation would directly spur these efforts and combat cliate change 
                    multidimensionally.</h4></p>
            </div>

            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="grad4">
                <br></br>
                <p>
                    <a href="https://www.nrdc.org/">
                    <img class="resize" img src={logoNRDC}></img>
                    </a>
                </p>
                {/*<p><a href="https://www.nrdc.org/">Natural Resources Defense Council</a></p>*/}
                <br></br>
                <br></br>

                <p><h4>The Natural Resources Defense Council (NRDC) has worked to ensure the rights of all people 
                    to clean air, water, and life since 1970. The NRDC advocates for legislative reform, contributes to 
                    important research to spread awareness, and protects target communities. With your doation, you will
                    directly aid in these efforts and effectively lend your hand in some of the most important initiatives
                    against climate change.</h4></p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="grad5">
                <br></br>
                <p>
                    <a href="https://www.sierraclubfoundation.org/what-we-fund/beyond-coal">
                    <img class="resize" img src={logoSC}></img>
                    </a>
                </p>
                {/*<p><a href="https://www.sierraclubfoundation.org/">Sierra Club Foundation</a></p>*/}
                <br></br>
                <br></br>

                <p><h4>The Sierra Club Foundation sponsors and organizes numerous campaigns to promote a future with cleaner energy sources 
                    and combat climate change. They are dedicated towards the transition from dirty coal energy to clean, new 
                    sources of energy. Your donation would directly fund the Sierra Club Foundation's initiatives, and directly 
                    aid in the transition to clean energy.</h4></p>
            </div>
        </body>
    );
};

export default ImageLink;