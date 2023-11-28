// StudentDashboard.jsx

import React from "react";
import "./StudentDashboard.scss";
import profilePhoto from "..//..//assets/images/profile.jpg";
import defaultProfile from "..//..//assets/images/defaultProfile.jpg";

const StudentDashboard = () => {
  const student = {
    name: "Bhanu Pratap Singh",
    id: "20AG10005",
    image: profilePhoto,
    totalScore: 1244,
    streak: 12,
    rank: 5,
    about: "Creativity is at the heart of scientific innovation, yet the atmosphere of rigorous competition prevalent in our education system curbs creativity and overemphasizes curricular performance. Unfortunately this is creating a generation which is less confident in thinking out of the box, afraid of taking risks in the pursuit of innovation, and trained to prioritize competition over collaboration. The spirit of creativity, collaboration and collective well-being is ingrained in the teaching-learning of our traditional performing and creative art forms. Inspiring the present generation to learn creative",
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

  const handleUpload = () => {
    // Logic for handling file upload
  };

  const handleUpdateProfile = () => {
    // Logic for updating profile
  };

  return (
    <div className="student-dashboard">
      <header className="header">
        <div className="dashboard-heading">
          <h1>STUDENT DASHBOARD-FOLK AND ARTS</h1>
        </div>
        <div>
          <img src={profilePhoto} alt="" />
        </div>
      </header>
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
      <div className="about-info-section">
        <section className="about-section">
          <h2>About</h2>
          <p>{student.about}</p>
        </section>
        <section className="contact-section">
          <h2>Contact Information</h2>
          <p>Phone: {student.contactInfo.phone}</p>
          <p>Email: {student.contactInfo.email}</p>
          <p>LinkedIn: {student.contactInfo.linkedIn}</p>
          <p>Address: {student.contactInfo.address}</p>
          <p>Birthday: {student.contactInfo.birthday}</p>
          <p>Gender: {student.contactInfo.gender}</p>
          <p>Hall: {student.contactInfo.hall}</p>
        </section>
        <section className="upload-section">
          <h2>Upload Pending Work</h2>
          <label htmlFor="file-upload" className="upload-label">
            Upload the file
          </label>
          <input type="file" id="file-upload" onChange={handleUpload} />
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
