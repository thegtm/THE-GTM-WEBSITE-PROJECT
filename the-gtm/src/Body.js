import React from "react";
import Tomato from './images/tomatoes.jpg';
import './Body.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
                    <button className="body-button">Contact Us</button>
                </div>
            </div>
            <div className="middle1">
                <div className="text">
                    <p id="about">ABOUT US</p>
                    <h2 id="future">Building a sustainable future</h2>
                    <p>As the world faces global challenges, communities of people are coming together <br />to create positive change and ensure a sustainable future.</p>
                    <button id="lmore">Learn More</button>
                </div>
                <div className="tomatoes">
                    <img src={Tomato} alt="" />
                </div>
            </div>
            <div className="rose">
                <h1 id="rosetext">Together, we can create a better world.</h1>
            </div>
        </div>
    );
}

export default Body;
