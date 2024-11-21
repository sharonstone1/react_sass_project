import React from "react";
import pyhton from "../images/PYTHON-COURSE.jpeg";
import javascript from "../images/JAVASCRIPT-JQuery.jpeg";
import object_oriented_javascript from "../images/object_oriented_javascript.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <main>
        <section className="section__about">
          <div className="u_center_text  u_margin_bottom_big">
            <h2 className="heading__secondary">The beginner of everything</h2>
          </div>

          <div className="row">
            <div className="col_1_of_2">
              <h3 className="heading_tertiary u_margin_bottom_small">
                Why I change my Data Analytic backgroud to coding?
              </h3>
              <p className="paragraph">
                {" "}
                My name is Marthe Coubard Ekoule, I'm from France. I have been
                graduated in DataMining CRM (Master degree with Merit) at
                Montpellier University in 2014 in France. In 2015, I move from
                france to UK because my husband got a job in UK. After
                struggling to get a job in Data Analytic field in Uk because I
                lacked experience I decided to change career. In 2018, thank to
                my husband, I fell in love in coding because he taught me how to
                code in Python. The love of Python language made me to decide to
                get a career in software development field. In my view, I found
                that Python is a easier programming language. Soon, I started to
                have fun with Python language by building smallest application
                such as restaurant website etc. I'm also self-taught in other
                programming language and framework such as Javascript, java,
                react, Vuejs, etc. I went to University in 2019 to learn more
                about computer science. In 2021, I got my degree in computer
                science(information, technology and communication) with Merit.
              </p>

              <h3 className="heading_tertiary u_margin_bottom_small">
                What make coding special and funny
              </h3>
              <p className="paragraph">
                Coding is special because it trains your brain to think and
                solve problem. The funny thing about coding is the happiness
                behind the scene when you solve a problem which i was hard to
                solve. Get the answer about an issue in programming give a kind
                of pride to the developer engineer that can't be explain if you
                are not developer. The pride of having achieve something, as a
                developer, we love it behind the scene.
              </p>

              <Link to="#" className="btn_text">
                Learn more &rarr;
              </Link>
            </div>
            <div className="col_1_of_2">
              <div className="composition">
                <img
                  src={pyhton}
                  alt="python book"
                  className="composition_photo composition_photo__p1"
                />
                <img
                  src={javascript}
                  alt="javaScript_JQuery"
                  className="composition_photo composition_photo__p2"
                />
                <img
                  src={object_oriented_javascript}
                  alt="JavaScript_object_oriented"
                  className="composition_photo composition_photo__p3"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
