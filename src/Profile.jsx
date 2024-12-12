import React from "react";
import "./Profile.css";

const Profile = () => {
  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    joinDate: "January 1, 2023",
  };

  const pastEvents = [
    {
      id: 1,
      title: "Hackathon 2023",
      description: "A fun 24-hour coding event.",
    },
    {
      id: 2,
      title: "React Workshop",
      description: "Learned about React basics and hooks.",
    },
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: "Tech Talk",
      description: "Discussion about AI advancements.",
    },
    {
      id: 4,
      title: "Networking Night",
      description: "Meet professionals in tech.",
    },
  ];

  return (
    <div className="profile-container">
      {/* User Details Section */}
      <div className="user-details">
        <h2>{userDetails.name}</h2>
        <p>Email: {userDetails.email}</p>
        <p>Joined: {userDetails.joinDate}</p>
      </div>

      <div className="events-section">
        {/* Past Events Section */}
        <div className="events-container past-events">
          <h3>Past Events</h3>
          {pastEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="events-container upcoming-events">
          <h3>Upcoming Events</h3>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <button className="events-rsvp-button">RSVP</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
