import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Andre Lucas II
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Full Stack Developer
              </h1>
              <h1>
                Highly Motivated
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>A passionate, articulate, goal-oriented and dynamic professional with a successful background in Requirement Gathering, Technical Documentation, Software Validation, Software Release and experienced Developer in ServiceNow. Attention to detail and complex problem-solving abilities from an operational and technical perspective.</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:andre.lucas284@gmail.com`}
              className="primary-btn"
            >
              Email Me
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header