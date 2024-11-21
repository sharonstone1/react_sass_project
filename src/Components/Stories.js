import React from "react";
import { Link } from "react-router-dom";
import marthe from "../images/funnymarthe.jpg";
import graduation from "../images/mobileGraduate.JPG";
import graduationClip from "../images/StageClip.mp4";

const Stories = () => {
  return (
    <div>
      <main>
        <section className="section__stories">
          {" "}
          <div className="bg__video">
            <video
              className="bg__video_content"
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
            >
              <source src={graduationClip} type="video/mp4"></source>
              Your browser is not supported!
            </video>
          </div>
          <div className="u_center_text  u_margin_top_big">
            <h2 className="heading__secondary heading__video">
              Coding Is Fun!
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={marthe} alt="funny marthe" className="story__img" />
                <figcaption className="story__caption">
                  Marthe Coubard
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading_tertiary  u_margin_bottom_small">
                  My first language I learnt, was PYTHON
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sociis,
                  dapibus fusce rutrum et himenaeos ullamcorper suscipit, nisi
                  non nulla potenti sed mollis interdum. Volutpat leo metus
                  proin felis odio vel pulvinar quisque mollis, lorem rutrum
                  platea scelerisque primis et tempus tristique, quam cursus
                  nulla egestas lectus ut consequat aptent.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={graduation}
                  alt="Marthe's graduation"
                  className="story__img"
                />
                <figcaption className="story__caption">
                  Software graduate
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading_tertiary  u_margin_bottom_small">
                  I choice to be a software developer
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sociis,
                  dapibus fusce rutrum et himenaeos ullamcorper suscipit, nisi
                  non nulla potenti sed mollis interdum. Volutpat leo metus
                  proin felis odio vel pulvinar quisque mollis, lorem rutrum
                  platea scelerisque primis et tempus tristique, quam cursus
                  nulla egestas lectus ut consequat aptent.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="u_center_text  u_margin_top_huge">
            <Link to="#" className="btn_text">
              {" "}
              Read all stories &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stories;
