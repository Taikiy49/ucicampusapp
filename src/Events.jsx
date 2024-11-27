import React, { useEffect, useState } from 'react';
import './Events.css'


const Events = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => setAllEvents(data))
      .catch((error) => console.error("Error loading events data:", error));
  }, []);

  return (
    <div className='events-container'>
        <div className='events-list-container'>
            {allEvents.map((event) => (
            <div key={event.id} className="event-card">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button className='events-rsvp-button'>RSVP</button>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Events;
