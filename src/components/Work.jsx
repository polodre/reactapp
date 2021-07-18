import React from "react";
import Fade from "react-reveal/Fade";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              <div className="imagebox">
                <img src="images/weather.jpg" />
                <div class="text-block">
                  <a href="https://notetakerlucas.herokuapp.com/">
                    Note Taker
                  </a>
                              </div>
                              <div>
                              </div>
  <hr class="divider" />
  <div className="imagebox">
    <img src="images/quiz.jpg" />
    <div class="text-block">
      <a href="https://ancient-citadel-84170.herokuapp.com/">The Tech Blog</a>
          </div>
                              </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
