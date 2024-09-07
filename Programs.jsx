import React from "react";
import "./Programs.css";
import Navbar from "../sharedComponents/NAVBAR/Navbar";
import Footer from "../sharedComponents/FOOTER/Footer";
import Star from "../images/star.jpg";
import Landscape from "../images/landscape.jpg";
import Maize from "../images/maize.jpg";
import Spinach from "../images/spinach.jpg";
function Programs() {
  return (
    <>
      <Navbar></Navbar>
      <div className="programsPage">
        <div className="topEvent">
          <img src={Star} alt="" id="star" />
          <h1 id="events">Current Programs</h1>
        </div>
        <div className="boxes">
          <div className="garden">
            <div className="gardenimage">
              <img src={Landscape} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>RAIL RegenAG Lab Series</h2>
              <p> Herbal gardens promoting health with <br />functional,natural welllness products.</p>
              <button id="gardenread">Read More</button>
            </div>
          </div>
          <div className="garden">
            <div className="gardenimage">
              <img src={Maize} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>
               HAWA Community Run
              </h2>
              <p>
               Developing tools to enhance regenerative agriculture for improved soil health
              </p>
              <button id="gardenread2">Read More</button>
            </div>
          </div>
          <div className="garden">
            <div className="gardenimage">
              <img src={Spinach} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>WIRAH Empower Her</h2>
              <p>
                Creating urban food systems for <br />efficient resilient food productions.
              </p>
              <button id="gardenread3">Read More</button>
            </div>
          </div>
        </div>
        <div className="boxes2">
          <div className="garden">
            <div className="gardenimage">
              <img src={Landscape} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>RAIL RegenAG Lab Series</h2>
              <p> Herbal gardens promoting health with <br />functional,natural welllness products.</p>
              <button id="gardenread">Read More</button>
            </div>
          </div>
          <div className="garden">
            <div className="gardenimage">
              <img src={Maize} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>
               HAWA Community Run
              </h2>
              <p>
               Developing tools to enhance regenerative agriculture for improved soil health
              </p>
              <button id="gardenread2">Read More</button>
            </div>
          </div>
          <div className="garden">
            <div className="gardenimage">
              <img src={Spinach} alt="" id="gardenimage" />
            </div>
            <div className="gardentext">
              <h2>WIRAH Empower Her</h2>
              <p>
                Creating urban food systems for <br />efficient resilient food productions.
              </p>
              <button id="gardenread3">Read More</button>
            </div>
          </div>
        </div>
        <div className="more">
            <button id = "moreButtons">1</button>
            <button id = "moreButtons" >2</button>
            <button id = "moreButtons">3</button>
        </div>
      </div>
      <br />
      <Footer></Footer>
    </>
  );
}

export default Programs;
