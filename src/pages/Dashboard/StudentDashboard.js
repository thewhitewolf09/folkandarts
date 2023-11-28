// StudentDashboard.jsx

import React, { useState } from "react";
import "./StudentDashboard.scss";
import profilePhoto from "..//..//assets/images/profile.jpg";
import defaultProfile from "..//..//assets/images/defaultProfile.jpg";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const student = {
    name: "Bhanu Pratap Singh",
    id: "20AG10005",
    image: profilePhoto,
    totalScore: 1244,
    streak: 12,
    rank: 5,
    about:
      "Creativity is at the heart of scientific innovation, yet the atmosphere of rigorous competition prevalent in our education system curbs creativity and overemphasizes curricular performance. Unfortunately this is creating a generation which is less confident in thinking out of the box, afraid of taking risks in the pursuit of innovation, and trained to prioritize competition over collaboration. The spirit of creativity, collaboration and collective well-being is ingrained in the teaching-learning of our traditional performing and creative art forms. Inspiring the present generation to learn creative",
    contactInfo: {
      phone: "+91 7676879809",
      email: "xyz123@gmail.com",
      linkedIn: "bit.ly.h232452.com",
      address: "525E Park street, Jabalpur, Madhya Pradesh, India 482008",
      birthday: "22 July 2002",
      gender: "Male",
      hall: "Vidyasagar",
    },
  };

  const faculty = {
    name: "Sougata Das",
    id: "-Employee ID",
    image: defaultProfile,
    totalEvaluation: 124,
    totalSubmissions: 240,
    pendingEvaluation: 116,
    about:
      "Creativity is at the heart of scientific innovation, yet the atmosphere of rigorous competition prevalent in our education system curbs creativity and overemphasizes curricular performance. Unfortunately this is creating a generation which is less confident in thinking out of the box, afraid of taking risks in the pursuit of innovation, and trained to prioritize competition over collaboration. The spirit of creativity, collaboration and collective well-being is ingrained in the teaching-learning of our traditional performing and creative art forms. Inspiring the present generation to learn creative",
    contactInfo: {
      phone: "+91 7676879809",
      email: "xyz123@gmail.com",
      linkedIn: "bit.ly.h232452.com",
      address: "525E Park street, Jabalpur, Madhya Pradesh, India 482008",
      birthday: "22 July 2002",
      gender: "Male",
    },
  };
  const [userType, setUserType] = useState("admin"); // user or admin

  const [isDragOver, setIsDragOver] = useState(false);

  const handleUpload = (event) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
    // You can perform further actions with the uploaded file
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("Dropped file:", file);
    // Perform actions with the dropped file (e.g., handleUpload(file))
    handleUpload({ target: { files: [file] } });
    setIsDragOver(false);
  };

  return (
    <div className="student-dashboard">
      {userType === "user" ? (
        <header className="header">
          <div className="dashboard-heading">
            <h1>STUDENT DASHBOARD-FOLK AND ARTS</h1>
          </div>
          <div>
            <img src={profilePhoto} alt="" />
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="dashboard-heading">
            <h1>ADMIN DASHBOARD-FOLK AND ARTS</h1>
          </div>
          <div>
            <img src={defaultProfile} alt="" />
          </div>
        </header>
      )}

      {userType === "user" ? (
        <div className="about-contact-container">
          <img src={student.image} alt="" />
          <div className="score-rank-container">
            <h1>{student.name}</h1>
            <p>{student.id}</p>
            <div className="score-rank">
              <div>
                <p>Total Score</p>
                <span>{student.totalScore} pts</span>
              </div>
              <div>
                <p>Rank</p>
                <span>{student.streak}</span>
              </div>
              <div>
                <p>Streak</p>
                <span>{student.rank}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="about-contact-container">
          <img src={faculty.image} alt="" />
          <div className="score-rank-container">
            <h1>{faculty.name}</h1>
            <p>{faculty.id}</p>
            <div className="score-rank">
              <div>
                <p>Total Submissions</p>
                <span>{faculty.totalSubmissions} pts</span>
              </div>
              <div>
                <p>Total Evaluation</p>
                <span>{faculty.totalEvaluation}</span>
              </div>
              <div>
                <p>Pending Evaluation</p>
                <span>{faculty.pendingEvaluation}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {userType === "user" ? (
        <div className="about-info-section">
          <section className="about-section">
            <h2>About</h2>
            <p>{student.about}</p>
            <button className="update-button">Update Profile</button>
          </section>
          <section className="contact-section">
            <h2>Contact Information</h2>
            <p>
              <span>Phone:</span> <span>{student.contactInfo.phone}</span>
            </p>
            <p>
              <span>Email: </span>
              <span>{student.contactInfo.email}</span>
            </p>

            <p>
              <span>LinkedIn: </span>
              <span>{student.contactInfo.linkedIn}</span>
            </p>

            <p>
              <span>Address: </span>
              <span>{student.contactInfo.address}</span>
            </p>

            <h2>Basic Information</h2>
            <p>
              <span>Birthday: </span>
              <span>{student.contactInfo.birthday}</span>
            </p>

            <p>
              <span>Gender: </span>
              <span> {student.contactInfo.gender}</span>
            </p>
            <p>
              <span>Hall: </span>
              <span> {student.contactInfo.hall}</span>
            </p>
          </section>
          <section className="upload-section-container">
            <h2>Upload Pending Work</h2>
            <div
              className={`upload-section ${isDragOver ? "drag-over" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label htmlFor="file-upload" className="upload-label">
                <span>Select a file or drop it here</span>
                <input type="file" id="file-upload" onChange={handleUpload} />
              </label>
              <button
                className="upload-button"
                onClick={() => document.getElementById("file-upload").click()}
              >
                Upload
              </button>
            </div>
            <ul>
              <Link to={"/announcements"}>
                <button className="btn">Announcements {`->`}</button>
              </Link>

              <Link to={"/workshops"}>
                <button className="btn">Workshops {`->`}</button>
              </Link>

              <Link to={"/"}>
                <button className="btn">Home Page {`->`}</button>
              </Link>
            </ul>
          </section>
        </div>
      ) : (
        <div className="about-info-section">
          <section className="about-section">
            <h2>About</h2>
            <p>{faculty.about}</p>
            <button className="update-button">Update Profile</button>
          </section>
          <section className="contact-section">
            <h2>Contact Information</h2>
            <p>
              <span>Phone:</span> <span>{faculty.contactInfo.phone}</span>
            </p>
            <p>
              <span>Email: </span>
              <span>{faculty.contactInfo.email}</span>
            </p>

            <p>
              <span>LinkedIn: </span>
              <span>{faculty.contactInfo.linkedIn}</span>
            </p>

            <p>
              <span>Address: </span>
              <span>{faculty.contactInfo.address}</span>
            </p>

            <h2>Basic Information</h2>
            <p>
              <span>Birthday: </span>
              <span>{faculty.contactInfo.birthday}</span>
            </p>

            <p>
              <span>Gender: </span>
              <span> {faculty.contactInfo.gender}</span>
            </p>
          </section>
          <section className="upload-section-container">
            <h2>Upload Picture of Week</h2>
            <div
              className={`upload-section ${isDragOver ? "drag-over" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label htmlFor="file-upload" className="upload-label">
                <span>Select a file or drop it here</span>
                <input type="file" id="file-upload" onChange={handleUpload} />
              </label>
              <button
                className="upload-button"
                onClick={() => document.getElementById("file-upload").click()}
              >
                Upload
              </button>
            </div>
            <ul>
              <Link to={"/announcements"}>
                <button className="btn">Add Announcements {`->`}</button>
              </Link>

              <Link to={"/workshops"}>
                <button className="btn">Edit Workshops {`->`}</button>
              </Link>

              <Link to={"/"}>
                <button className="btn">Evaluate Students {`->`}</button>
              </Link>
              <Link to={"/"}>
                <button className="btn">Home Page {`->`}</button>
              </Link>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
