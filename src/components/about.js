import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import download from "../images/download.svg"
const About = () => {
  const downloadFile = () => {
    window.location.href = "https://github.com/imjp19/images/raw/main/JayPatelResume.pdf"
  }
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>about me<span>.</span></h1>

            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <Fade bottom>
              <button onClick={downloadFile} className="primary-btn"> Resume &nbsp; <img src={download} /> </button>
            </Fade>

          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About
