import React from 'react'
import Header from "../components/Header"
import ImageLink from "../components/ImageLink"

const donate = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <header>
                    <h1> There are so many of us fighting to combat the gradual advance of climate change.</h1>
                    <br></br>
                    <h3> Consider joining us by donating to an organization dedicated to preserving our world:</h3>
                    <br></br>
                </header>
                <ImageLink />
            </div>
        </div>
    );
};

export default donate;