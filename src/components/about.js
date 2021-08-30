import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import download from "../images/download.svg"
const About = () => {
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
            <a className="primary-btn" href='/https://github.com/imjp19/images/blob/main/JayPatelResume.pdf' download> Resume &nbsp; <img src={download} /> </a>
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
