import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import appStoreImage from "./images/AppStore.png";
import Final from "./images/Play Store.png";
import logo from "./images/Final FitnEarn Pal Logo.png";
import iphone from "./images/iPhone 13 Pro Max (1).png";
import ellipse from "./images/Ellipse 1794 (1).png";
import circle1 from "./images/Circle (1).png";
import circle2 from "./images/Circle (2).png";
import circle3 from "./images/Circle (3).png";
import circle from "./images/Circle.png";
import yoga from "./images/Yoga Trainer.png";
import yoga1 from "./images/Yoga Trainer (1).png";
import yoga2 from "./images/Yoga Trainer (2).png";
import yoga3 from "./images/Yoga Trainer (3).png";
import yoga4 from "./images/Yoga Trainer (4).png";
import yoga5 from "./images/Yoga Trainer (5).png";
import iphone1 from "./images/iPhone 13 Pro Max (2).png";
import circle4 from "./images/Circle (4).png";
import circle5 from "./images/Circle (5).png";
import circle6 from "./images/Circle (6).png";
import circle7 from "./images/Circle (7).png";
import fitness1 from "./images/Fitness Trainer (1).png";
import fitness2 from "./images/Fitness Trainer (2).png";
import fitness3 from "./images/Fitness Trainer (3).png";
import fitness4 from "./images/Fitness Trainer (4).png";
import circle8 from "./images/Circle (8).png";
import circle9 from "./images/Circle (9).png";
import iphone3 from "./images/iPhone 13 Pro Max (3).png";
import iphone4 from "./images/iPhone 13 Pro Max (4).png";
import timeline from "./images/Group 1000005345.png";
import coach_name from "./images/Frame 427320742.png";
import circle10 from "./images/Circle (10).png";
import footer from "./images/Footer.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header class="navbar">
          <div class="logo">
            <img src={logo} alt="Logo" id="logo_img" />
            <div id="logo_name">FitnEarnPal</div>
          </div>

          <div class="menu">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          <div className="sign-up">
            <a href="#signup-form" class="signup-button">
              Sign Up Form
            </a>
          </div>
        </header>
        <div className="container-subheading">
          <div className="text">
            <div className="para">
              <div class="heading">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  id="emogi"
                  alt="emoji"
                />
                <div id="awesome">Hey, Awesome Coach</div>
              </div>
              <div class="subheading">
                Expand Your Reach, Inspire More Lives
                <span class="highlight"> Join FitnEarnPal Today!</span>
              </div>
            </div>
            <div class="description">
              A global platform for coaches to connect, inspire, and change
              lives
            </div>

            <div class="buttons">
              <img src={appStoreImage} alt="App Store" />
              {/* Download on the App Store */}

              <img src={Final} alt="Google Play" />
              {/* Get it on Google Play */}
            </div>
          </div>
          <div className="features">
            <img src={ellipse} className="ellipse" alt="ellipse" />
            <img src={ellipse} id="elipse" alt="ellipse" />
            <img src={iphone} className="iphone" alt="iphone" />
            <img src={circle1} className="circle1" alt="circle1" />
            <img src={circle2} className="circle2" alt="circle2" />
            <img src={circle3} className="circle3" alt="circle3" />
            <img src={circle} className="circle" alt="circle" />
          </div>
        </div>
        <div className="content ">
          <div className="container-content">
            <div className="container-heading">
              <div className="cont">Join growing community of Coaches</div>
            </div>
            <p className="container-desc">
              FitnEarnPal is your getaway to connect with a global community of
              health and fitness enthusiasts, share experiences and valuable
              knowledge, and grow their audience. As a coach you have the power
              to inspire, educate, and motivate users worldwide by creating and
              sharing impactful content, workout videos, conducting live
              sessions, and much more.
            </p>
            <div className="join">
              <button class="join-now-button">Join Now</button>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={yoga} className="yoga" alt="yoga" />
          <img src={yoga1} className="yoga" alt="yoga" />
          <img src={yoga2} className="yoga" alt="yoga" />
          <img src={yoga3} className="yoga" alt="yoga" />
          <img src={yoga4} className="yoga" alt="yoga" />
          <img src={yoga5} className="yoga" alt="yoga" />
        </div>
        <br></br>
        <br></br>
        <div className="coach">
          <h1 id="heading">What's in it for Coach</h1>
          <p id="coach">
            FitnEarnPal empowers coaches to grow and reach a global audience
            while valuable health and fitness insights to users.
          </p>
        </div>
        <div className="image_features">
          <img src={ellipse} className="ellipse1" alt="ellipse1" />
          <img src={ellipse} id="elipse1" alt="ellipse2" />
          <img src={iphone1} className="iphone1" alt="iphone1" />
          <div className="personal_brand">
            <img src={circle4} className="circle4" alt="circle4" />
            <p className="features">Persional Brand</p>
            <p className="features_desc">Helps you gain global audience</p>
          </div>
          <div className="global_audience">
            <img src={circle5} className="circle4" alt="circle4" />
            <p className="features">Global Audience Access</p>
            <p className="features_desc">Helps you gain global audience</p>
          </div>
          <div className="revenue">
            <img src={circle6} className="circle4" alt="circle4" />
            <p className="features">Revenue Oppurtunities</p>
            <p className="features_desc">Helps you gain global audience</p>
          </div>
          <div className="schedule">
            <img src={circle7} className="circle4" alt="circle4" />
            <p className="features">Works on Your Own Schedule</p>
            <p className="features_desc">Helps you gain global audience</p>
          </div>
        </div>
        <div className="features_heading">
          <h1>Key Features</h1>
        </div>
        <br></br>
        <div className="key_features">
          <img src={fitness1} className="fitness" alt="fitness" />
          <img src={fitness2} className="fitness" alt="fitness" />
          <img src={fitness3} className="fitness1" alt="fitness" />
          <img src={fitness4} className="fitness1" alt="fitness" />
        </div>
        <br></br>
        <br></br>
        <h1 id="coach1">
          Become <span id="color">Coach</span> Today
        </h1>
        <div className="tilt">
          <div className="tilt1">
            <img src={iphone3} className="iphone3" alt="iphone1" />
          </div>
          <div className="tilt2">
            <img src={iphone4} className="iphone3" alt="iphone1" />
          </div>
        </div>
        <div class="buttons1">
          <img src={appStoreImage} alt="App Store" />
          {/* Download on the App Store */}

          <img src={Final} alt="Google Play" />
          {/* Get it on Google Play */}
        </div>
        <br></br>
        <br></br>
        <div class="how-it-works-container">
          <h1 class="title">How It Works ?</h1>
          <div className="timeing">
            <img src={timeline} className="timeline" alt="timeline" />
          </div>
          <div className="timing_content">
            <p className="single_content">
              Support for multiple languages, making health monitoring
              accessible and easy for users around the globe
            </p>
            <p className="single_content">
              Support for multiple languages, making health monitoring
              accessible and easy for users around the globe
            </p>
            <p className="single_content">
              Support for multiple languages, making health monitoring
              accessible and easy for users around the globe
            </p>
            <p className="single_content">
              Support for multiple languages, making health monitoring
              accessible and easy for users around the globe
            </p>
          </div>
        </div>
        <div className="coach1">
          <h1 id="heading1">What our Coach Say</h1>
          <p id="coach">
            FitnEarnPal empowers coaches to grow and reach a global audience
            while valuable health and fitness insights to users.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="coach_name">
          <img src={coach_name} className="coach_nam" alt="coach_name" />
          <img src={circle10} class="circle10" alt="circle10" />
          <img src={circle10} class="circle11" alt="circle10" />
          <img src={circle10} class="circle12" alt="circle10" />
          <img src={circle10} class="circle13" alt="circle10" />
          <img src={circle10} class="circle14" alt="circle10" />
          <img src={circle10} class="circle15" alt="circle10" />
        </div>
        <br></br>
        <br></br>
        <div className="footer">
           <img src={footer} className="footer_content" alt="footer_content" />
        </div>
      </div>
    </>
  );
}

export default App;
