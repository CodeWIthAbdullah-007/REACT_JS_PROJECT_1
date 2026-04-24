import './App.css';
import myImage from './assets/profile.png';
import teacherImage from './assets/majid_hussain.png';

function App() {
  return (
    <div className="app-container">
      <div className="profile-card">
        <img
          className="profile-image"
          src={myImage}
          alt="Profile"
        />
        <h2 className="name">Abdullah Anwar</h2>
        <p className="course">Web Developer</p>
        <p className="institute">REACT_PROJECT_1 Institute</p>
        <p className="intro">
          Passionate about web development and problem-solving.
          Currently learning React and building creative projects.
          Always eager to grow and collaborate with others.
        </p>
        <button className="contact-btn">Contact Me</button>
      </div>

      <div className="profile-card">
        <img
          className="profile-image"
          src={teacherImage}
          alt="Teacher"
        />
        <h2 className="name">Majid Hussain</h2>
        <p className="course">Trainer</p>
        <p className="institute">10+ Years of Teaching Experience</p>
        <p className="intro">
          Dedicated educator with expertise in algorithms and software engineering.
          Known for making complex topics simple and engaging for students.
          Mentored hundreds of students throughout a distinguished career.
        </p>
        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default App;