import React, { useState } from "react";
import linkedin from "./linkedin-logo.png";
import fb from "./facebook.png";
import download from "./downloading.png";
import myImg from "./myImg.jpg";
import github from "./github.png";
import twitter from "./twitter.png";
export default function MainPage() {
  const [visible, setVisible] = useState(false);
  function updateVisible() {
    setVisible(true);
  }
  function updateeVisible() {
    setVisible(false);
  }
  return (
    <>
      <div className="total-container">
        <div className="left-content">
          <div
            className="left-name"
            style={{ fontWeight: "800", color: "purple" }}
          >
            My PortFolio
          </div>
          <div className="left-img">
            <img src={linkedin} />
            <img src={github} />
            <img src={fb} />
            <img src={twitter} />
          </div>
          <hr
            style={{
              position: "absolute",
              width: "100px",
              transform: "rotate(90deg)",
              top: "370px",
              left: "-41px",
            }}
          ></hr>
          <div className="rotation-container">
            <div className="left-comment" style={{ color: "purple" }}>
              Follow Me
            </div>
          </div>
        </div>
        <div className="self-content">
          
          <div
            className="self1"
            style={{ fontSize: "x-large", fontWeight: "800" }}
          >
            Hey I'm <span style={{ color: "purple" }}>Alaudhin</span>
            <br></br>
            <span style={{ fontWeight: "500", fontSize: "large" }}>
              I <span style={{ color: "purple" }}>Code</span> Cool Websites🧑🏾‍💻
            </span>
            <br></br>
            <br></br>
            <span style={{ fontSize: "x-small" }}>
              I specialize in frontend development using{" "}
              <span style={{ color: "purple" }}>React.js, HTML, CSS </span> And{" "}
              <span style={{ color: "purple" }}>React Js</span> having backend
              expertise in <span style={{ color: "purple" }}>Java</span>.
              <br></br>
              <br></br>
              <div className="buttons">
                <button
                  onClick={updateeVisible}
                  id="button1"
                  style={{ backgroundColor: visible ? "black" : "white" }}
                >
                  My PortFolio
                </button>
                <button
                  onClick={updateVisible}
                  style={{
                    backgroundColor: visible ? "white" : "black",
                    color: visible ? "black" : "white",
                  }}
                >
                  My Projects
                </button>
              </div>
              <br></br>
              <div
                className="myProjects"
                style={{ visibility: visible ? "visible" : "hidden" }}
              >
                <span style={{ fontWeight: "800", fontSize: "large" }}>
                  My Projects
                  <span style={{ color: "purple" }}>
                    (click on it and visit my Projects)
                  </span>
                </span>
                <ul>
                  <li>
                    <a href="https://Alaudhin936.github.io/UserPage-TG">Social Media UserPage(Responsive)</a>
                  </li>
                  <li>
                    <a href="https://alaudhin936.github.io/Tech-Gram/">
                      Login Page For Social Media Application(Responsive)
                    </a>
                  </li>
                  <li>
                    <a href="https://alaudhin936.github.io/travel-agency/">Travel Agency Website(Responsive)</a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="myImg">
            <img src={myImg}  />
          </div>{" "}
        </div>
       <nav>
        <ul>
          <li><a href="#" className="jd">Home</a></li>
          <li><a href="#" className="jd">About</a></li>
          <li><a href="#" className="jd">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1GwvGwU6iDuzTKIveWVcQnAjvxOhcoYMz/view?usp=drivesdk"><button className="downlo">Download CV<img src={download}/></button></a></li>
          
         
        </ul>
       </nav>
      </div>
    
    </>
  );
}
