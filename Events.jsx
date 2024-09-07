import React from "react";
import "./Event.css";
import Navbar from "../sharedComponents/NAVBAR/Navbar";
import Footer from "../sharedComponents/FOOTER/Footer";
import Star from "../images/star.jpg";
import dropdownIcon from "../images/dropdownIcon.png";
import searchIcon from "../images/search-interface-symbol.png";
import Cow from "../images/cow.jpg";
function Event() {
    const events1=()=>{
        window.location.href= "/events"
    }
  return (
    <>
      <Navbar></Navbar>
      <div className="eventsPage">
        <div className="topEvent">
          <img src={Star} alt="" id="star" />
          <h1 id="events">Events</h1>
        </div>
        <div className="midEvent">
          <button id="upComing"> Upcoming</button>
          <img src={dropdownIcon} alt="" id="dropIcon" />
          <input type="text" value="Search an Event....." id="search" />
          <img src={searchIcon} alt="" id="searchIcon" />
        </div>
        <div className="downEvent">
          <div className="row1">
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
          </div>
          <div className="row2">
          <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
          </div>
          <div className="row3">
          <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
            <div className="pic1">
              <img src={Cow} alt="" id="cowImage" />
              <h2 id="conference">Conference for RegenAG Experts</h2>
              <h3 id="day">Sunday,September 1st, 2024</h3>
              <div className="pic11">
                <p id="pax"> (50 Pax)</p>
                <button id="rsvp">RSVP</button>
                <p id="price">$ 0.5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="more">
            <button id = "moreButtons" onClick = {events1}>1</button>
            <button id = "moreButtons" >2</button>
            <button id = "moreButtons">3</button>
        </div>
      </div> <br />
      <Footer></Footer>
    </>
  );
}

export default Event;
