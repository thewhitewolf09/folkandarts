import React, { useState } from "react";
import "./LandingPage.scss";
import facultyImage from "..//../assets/images/faculty.png";
import { Link } from "react-router-dom";
import CommentsSection from "../../components/comment/CommentsSection";
import WorkshopSection from "../../components/workshops/WorkshopSection";
const MAX_DESCRIPTION_LENGTH = 1024;

const LandingPage = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [landingPageTab, setLandingPageTab] = useState(2);
  const [activeLink, setActiveLink] = useState(0);
  const profData = {
    name: "Prof. Anandaroop Bhattacharya",
    fullDescription: `Creativity is at the heart of scientific innovation, yet the
    atmosphere of rigorous competition prevalent in our education
    system curbs creativity and overemphasizes curricular performance.
    Unfortunately this is creating a generation which is less
    confident in thinking out of the box, afraid of taking risks in
    the pursuit of innovation, and trained to prioritize competition
    over collaboration. The spirit of creativity, collaboration and
    collective well-being is ingrained in the teaching-learning of our
    traditional performing and creative art forms. Inspiring the
    present generation to learn creative arts will enable them to
    develop the faculties of concentration, coordination, confidence
    and creativity, which are catalysts for scientific excellence. The
    academy offers exciting areas of research. The next wave of
    scientific innovation will transform humanities. AI and Machine
    Learning technologies are being tuned to behave humanely. These
    frontiers are beginning to reach creative arts and offer unique
    user experiences. The connections between creative arts with
    cognitive sciences promises to transform our mental well-being in
    innovative ways. In spite of our rich heritage in classical and
    folk arts, we have as a nation ignored its potential when explored
    through the lens of science and technology. The Academy, which is
    a unique new entity in our IIT system offers a platform for all to
    participate -- students, faculty, staff across departments, campus
    community. We also aim to reach out to educate the world about the
    creative liberty in Indian forms of music and art. IIT Kharagpur
    thanks its alumni for supporting this unique initiative.`,
    image: facultyImage,
  };
  return (
    <div className="landing-page">
      <header>
        <nav>
          <span>NCA Arts</span>
          <ul>
            <Link to={"/sign-up"}>
              <button className="btn btn-primary">Sign Up</button>
            </Link>

            <Link to={"/log-in"}>
              <button className="btn btn-secondary">Login</button>
            </Link>
          </ul>
        </nav>
      </header>
      <div className="landing-page-tabs">
        <span
          className={landingPageTab === 0 ? "active" : null}
          onClick={() => setLandingPageTab(0)}
        >
          Vocal Music
        </span>
        <span
          className={landingPageTab === 1 ? "active" : null}
          onClick={() => setLandingPageTab(1)}
        >
          Instrumental Music
        </span>
        <span
          className={landingPageTab === 2 ? "active" : null}
          onClick={() => setLandingPageTab(2)}
        >
          Folk Arts
        </span>
        <span
          className={landingPageTab === 3 ? "active" : null}
          onClick={() => setLandingPageTab(3)}
        >
          Dance
        </span>
      </div>
      <div className="announcements-section">
        <div className="announcements-tab">
          <span>ANNOUNCEMENTS</span>
        </div>
        <div className="marquee">
          <div class="marquee-content">
            <p>Here is some scrolling text... right to left!</p>
            <p>Another announcement goes here...</p>
            <p>Yet another announcement...</p>
          </div>
        </div>
      </div>
      <section className="folkart-section">
        <div className="link-list">
          <span
            className={activeLink === 0 ? "active" : null}
            onClick={() => setActiveLink(0)}
          >
            About Faculty
          </span>
          <span
            className={activeLink === 1 ? "active" : null}
            onClick={() => setActiveLink(1)}
          >
            Course Structure
          </span>
          <span
            className={activeLink === 2 ? "active" : null}
            onClick={() => setActiveLink(2)}
          >
            Workshops
          </span>
          <Link to={"/dashboard"}>
            <button
              className={activeLink === 3 ? "active" : null}
              onClick={() => setActiveLink(3)}
            >
              My Dashboard
            </button>
          </Link>
          <span
            className={activeLink === 4 ? "active" : null}
            onClick={() => setActiveLink(4)}
          >
            Upload Work
          </span>
          <span
            className={activeLink === 5 ? "active" : null}
            onClick={() => setActiveLink(5)}
          >
            Picture of the week
          </span>
          <span
            className={activeLink === 6 ? "active" : null}
            onClick={() => setActiveLink(6)}
          >
            Work Display
          </span>
        </div>
        <div className="faculty-content">
          <div className="faculty-image">
            <img src={profData.image} alt="Hero" />
          </div>
          <div>
            <div className="faculty-description">
              <span className="faculty-name">{profData.name}</span>
              <p className={showFullDescription ? "expanded" : ""}>
                {profData.fullDescription}
              </p>
              {profData.fullDescription.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  className="toggle-description-btn"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Less" : "Read more"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="commments-workshop-container">
        <div className="comment-section">
          <CommentsSection />
        </div>
        <WorkshopSection />
      </div>
      <footer>
        <p>&copy; 2023 FolkAndArts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
