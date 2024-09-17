import React from "react";
import Landscape from '../images/rose.jpg';
import Maize from '../images/maize.jpg';
import Spinach from '../images/maize.jpg';
import './placeholder.css';
function Placeholder() {
    return (
        <div className="boxes">
            <div className="garden">
                <div className="gardenimage">
                    <img src={Landscape} alt="" id="gardenimage" />
                </div>
                <div className="gardentext">
                    <h2>Water Conservation</h2>
                    <p>Conserving water through recycling and <br /> reuse is a crucial step in promoting <br /> sustainable agriculture practices and  <br />protecting the planet.</p>
                    <button id="gardenread">Read More</button>
                </div>
            </div>
            <div className="garden">
                <div className="gardenimage">
                    <img src={Maize} alt="" id="gardenimage" />
                </div>
                <div className="gardentext">
                    <h2>Sustainable  <br />Agriculture Model </h2>
                    <p>Creating sustainable agriculture for a better <br /> future</p>
                    <button id="gardenread2">Read More</button>
                </div>
            </div>
            <div className="garden">
                <div className="gardenimage">
                    <img src={Spinach} alt="" id="gardenimage" />
                </div>
                <div className="gardentext">
                    <h2>Sustainable Garden</h2>
                    <p>Learn how to grow your own organic fruits <br /> and vegetables using sustainable <br />agriculture practices </p>
                    <button id="gardenread3">Read More</button>
                </div>
            </div>
        </div>
    );
}
export default Placeholder;
