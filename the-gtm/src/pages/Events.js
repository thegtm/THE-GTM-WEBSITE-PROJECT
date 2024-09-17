import React, { useState } from 'react';
import './Events.css';
import Cow from '../images/projects.jpg';

function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const events = [
    { id: 1, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 2, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 3, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 4, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 5, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 6, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 7, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 8, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
    { id: 9, title: 'Conference for RegenAG Experts', date: 'Sunday, September 1st, 2024', pax: 50, price: 0.5 },
  ];

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <div className="Events-header">
          <h1 id="Events">Events</h1>
        </div>
      </div>
      <div className="downEvent">
        {currentEvents.map((event) => (
          <div className="pic1" key={event.id}>
            <img src={Cow} alt="" id="cowImage" />
            <h2 id="conference">{event.title}</h2>
            <h3 id="day">{event.date}</h3>
            <div className="pic11">
              <p id="pax">({event.pax} Pax)</p>
              <button id="rsvp">RSVP</button>
              <p id="price">${event.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map((number) => (
          <button key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Events;
