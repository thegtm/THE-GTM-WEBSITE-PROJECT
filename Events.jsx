import React from "react";
import "./Events.css";
import Navbar from "../sharedComponents/NAVBAR/Navbar";
import Footer from "../sharedComponents/FOOTER/Footer"
import Search from "../images/search-interface-symbol.png";
import Cow from "../images/spinach.jpg";
import Circle from "../images/circle7.png";
function Events() {
  return (
    <>
      <Navbar></Navbar>
      <div className="eventsTop">
        <h1 id="hEvents">Events</h1>
        <div className="eventsright">
          <button id="upEvents">Upcoming Events</button>
          <input type="text" value="Search an Event..." />
        </div>
      </div>
      <div className="all">
        <div className="row1">
          <div className="1">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="2">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="3">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
        </div>
        <div className="row2">
        <div className="1">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="2">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="3">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
        </div>
        <div className="row3">
          <div className="1">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="2">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
          <div className="3">
            <img src={Cow} alt="" id="cow" />
            <div className="dates">
              <img src={Circle} alt="" id="circle" />
              <p id="date">Aug 31</p>
            </div>
            <h2 id="eventsText">Conference for RegennAG Experts</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Events;
