import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="wrapper">
          <div className="footer-container">

            <Fade bottom cascade>

              <h2>{data.contactSubHeading}</h2>
            </Fade>
            <Fade top cascade>

              <a className="email-link" href={`mailto:hello@imjp.dev`} target="_blank" >
                {data.contactEmail}
              </a>
            </Fade>
            <div className="social-icons">
              {data.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </div>
            <span className="name">
              Made With <icon>❤</icon> by{" "}
              <a href="https://imjp.dev/">Jay Patel</a>
            </span>
            <div className="copyright">&copy; 2022 <strong>jaypatel.</strong></div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Footer
