import React from "react";
import logoAR from "./images/logoAR.jpg";
import logoEDF from "./images/logoEDF.jpg";
import logoNC from "./images/logoNC.jpg";
import logoNRDC from "./images/logoNRDC.jpeg";
import logoSC from "./images/logoSC.png";

const ImageLink = () => {
    return (
        <body>

            <br></br>
            <p>
                <a href="https://www.americanrivers.org/"> 
                <img class="resize" img src={logoAR} />
                </a>
            </p>
            <p><a href="https://www.americanrivers.org/">American Rivers</a></p>
            <br></br>

            <br></br>
            <p>
                <a href="https://www.edf.org/">
                <img class="resize" img src={logoEDF}></img>
                </a>
            </p>
            <p><a href="https://www.edf.org/">Environmental Defense Fund</a></p>
            <br></br>

            <br></br>
            <p>
                <a href="https://www.nature.org/en-us/">
                <img class="resize" img src={logoNC}></img>
                </a>
            </p>
            <p><a href="https://www.nature.org/en-us/">The Nature Conservancy</a></p>
            <br></br>

            <br></br>
            <p>
                <a href="https://www.nrdc.org/">
                <img class="resize" img src={logoNRDC}></img>
                </a>
            </p>
            <p><a href="https://www.nrdc.org/">Natural Resources Defense Council</a></p>
            <br></br>

            <br></br>
            <p>
                <a href="https://www.sierraclubfoundation.org/">
                <img class="resize" img src={logoSC}></img>
                </a>
            </p>
            <p><a href="https://www.sierraclubfoundation.org/">Sierra Club Foundation</a></p>
            <br></br>
        </body>
        
    );
};

export default ImageLink;