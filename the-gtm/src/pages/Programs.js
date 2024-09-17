import React from "react";
import "./Programs.css";

//import Star from "./images/garden.jpg";
import Landscape from "../images/program.jpg";
//import Maize from "./images/maize.jpg";
//import Spinach from "./images/spinach.jpg";
function Programs() {
  return (
    <div>
     
      <div className="programsPage">
            <div className="programs-container">
                <div className="programs">
                    <h1 id="currprograms">Current Programs</h1>
                </div>
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
              <img src={Landscape} alt="" id="gardenimage" />
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
              <img src={Landscape} alt="" id="gardenimage" />
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
              <img src={Landscape} alt="" id="gardenimage" />
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
              <img src={Landscape} alt="" id="gardenimage" />
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
        <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
      </div>
      <br />
      
      </div>
  );
}

export default Programs;
