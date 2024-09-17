import React from "react";
import { Link } from 'react-router-dom';
import './Body.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import water from '../images/water.jpg';
import Agri from '../images/agriculture.jpg';
import Garden from '../images/garden.jpg';

function Body() {
    return (
        <div>
            <div className="body-container">
                <div className="body">
                    <div className="icon-circle">
                        <i className="fas fa-bug icon"></i>
                    </div>
                    <h1>-Regenerative Agriculture-</h1>
                    <p>Our mission is to revolutionize the way communities interact with their food sources through the promotion of Regenerative Health and Agriculture</p>
                    <Link to="/ContactUs" className="body-button">Contact Us</Link>
                </div>
            </div>
            <div className="middle1">
                <div className="text">
                    <p id="about">ABOUT US</p>
                    <h2 id="future">Building a sustainable future</h2>
                    <p>Agriculture sustains 78% of the global population, yet 33% of soils are 
                        degraded, threatening food security (Source: Farmsquare, eco-nnet.com). 
                        In Kenya, 2 out of 3 deaths result from non-communicable diseases 
                        (Source: gifa)</p>
                    <button id="lmore">Learn More</button>
                </div>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/31crA53Dgu0?si=6udz4QlCl6idYM-s"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="rose">
                <h1 id="rosetext">Together, we can create a better world.</h1>
            </div>
            <div className="current-projects">What Drives Us</div>
            <div className="boxes">
                <div className="garden">
                    <div className="gardenimage">
                        <img src={water} alt="" id="gardenimage" />
                    </div>
                    <div className="gardentext">
                        <h2>Water Conservation</h2>
                        <p>Conserving water through recycling and <br /> reuse is a crucial step in promoting <br /> sustainable agriculture practices and  <br />protecting the planet.</p>
                        <button id="gardenread">Read More</button>
                    </div>
                </div>
                <div className="garden">
                    <div className="gardenimage">
                        <img src={Agri} alt="" id="gardenimage" />
                    </div>
                    <div className="gardentext">
                        <h2>Sustainable  <br />Agriculture Model </h2>
                        <p>Creating sustainable agriculture for a better <br /> future</p>
                        <button id="gardenread2">Read More</button>
                    </div>
                </div>
                <div className="garden">
                    <div className="gardenimage">
                        <img src={Garden} alt="" id="gardenimage" />
                    </div>
                    <div className="gardentext">
                        <h2>Sustainable Garden</h2>
                        <p>Learn how to grow your own organic fruits <br /> and vegetables using sustainable <br />agriculture practices </p>
                        <button id="gardenread3">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
