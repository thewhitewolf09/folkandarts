// WorkshopSection.jsx

import React, { useState } from "react";
import "./WorkshopSection.scss";
import flute from "..//..//assets/images/flute.jpeg"
import saf from "..//..//assets/images/saf.jpeg"

const WorkshopSection = () => {
  const [showDetails, setShowDetails] = useState({});

  const workshops = [
    {
      title: "Vocal Music and Flute Workshop",
      date: "8th - 9th January 2022",
      image: flute,
      details: {
        overview:
          "Join us for an immersive workshop exploring the art of Vocal Music and Flute playing. This workshop aims to delve into the techniques of both vocal and flute music, providing participants with a comprehensive understanding of rhythm, melody, and expression.",
        learningOutcomes: [
          "Enhanced understanding of vocal music and flute techniques",
          "Improved ability to convey emotions through music",
          "Developed skills in rhythm and melody",
        ],
        registrationInfo: "To register, email us at workshops@example.com",
      },
    },
    {
      title: "The Science and Philosophy of Making Indian Music",
      date: "18th - 19th December 2021",
      image : saf,
      details: {
        overview:
          "Discover the intricate science and rich philosophy behind the creation of Indian music. This workshop will explore the historical and cultural significance of Indian music while delving into the scientific principles that govern its creation.",
        learningOutcomes: [
          "Understanding the cultural and historical context of Indian music",
          "Insight into the scientific principles underlying music composition",
          "Exploration of the philosophical aspects influencing music creation",
        ],
        registrationInfo:
          "Limited spots available. Register online at musicworkshops.com",
      },
    },
  ];

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="workshop-section">
      <h2>Upcoming Workshops</h2>
      {workshops.map((workshop, index) => (
        <div className="workshop-card" key={index}>
          <img className="workshop-image" src={workshop.image} alt=""/>
          <div>
            <h3>{workshop.title}</h3>
            <p>Date: {workshop.date}</p>
            <p>
              {showDetails[index]
                ? workshop.details.overview
                : `${workshop.details.overview.slice(0, 100)}...`}
            </p>
            {showDetails[index] && (
              <>
                <h4>Learning Outcomes:</h4>
                <ul>
                  {workshop.details.learningOutcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
                <p>{workshop.details.registrationInfo}</p>
              </>
            )}
            <button
              className="toggle-description-btn"
              onClick={() => toggleDetails(index)}
            >
              {showDetails[index] ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopSection;
