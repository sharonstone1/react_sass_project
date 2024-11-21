import React from "react";
import { Link } from "react-router-dom";

const Languages = () => {
  return (
    <div>
      <main>
        <section className="section_coding">
          <div className="u_center_text  u_margin_bottom_big">
            <h2 className="heading__secondary">
              The Programming languages I love
            </h2>
          </div>
          <div className="row">
            <div className="col_1_of_4">
              <div className="card">
                <div className="card__side card__side_front">
                  <div className="card__picture card__picture_1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading_span  card__heading_span__1">
                      The server side PHP and Database MySQL
                    </span>
                  </h4>
                  <div className="card__details">
                    <p className="paragraph__PHP">
                      The PHP interpreter is a piece of software that runs on he
                      web server. When you create a web page using PHP that page
                      will always perform the same tasks, but it can perform
                      those tasks using different data each time the page is
                      requested.{" "}
                      {/* <span className="link__PHP">
                        <Link to="#">Click Here to see PHP projects.</Link>
                      </span> */}
                    </p>
                  </div>
                </div>
                <div className="card__side  card__side_back card__side_back_1">
                  <div className="card__cta">
                    <div className="card__projects_box">
                      <p className="card__learning_only">
                        {" "}
                        YouTube learning projects
                      </p>
                      <p className="card__personal_projects">
                        {" "}
                        Personal projects and design
                      </p>
                    </div>

                    <Link to="#" className="btn btn__white">
                      Click here!!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="card">
                <div className="card__side card__side_front">
                  <div className="card__picture card__picture_2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading_span  card__heading_span__2">
                      Python Crash Course
                    </span>
                  </h4>
                  <div className="card__details">
                    <p className="paragraph__PHP">
                      Python is an incredibly efficient language.People use
                      Python for many purpose: to make games, build web
                      application, solve business problems, and develop internal
                      tools.Python is also used heavily in scientific fields for
                      academic research and applied work.{" "}
                      {/* <span className="link__PHP">
                        <Link to="#">Click Here to see PHP projects.</Link>
                      </span> */}
                    </p>
                  </div>
                </div>
                <div className="card__side  card__side_back card__side_back_2">
                  <div className="card__cta">
                    <div className="card__projects_box">
                      <p className="card__learning_only">
                        {" "}
                        YouTube learning projects
                      </p>
                      <p className="card__personal_projects">
                        {" "}
                        Personal projects and design
                      </p>
                    </div>

                    <Link to="#" className="btn btn__white">
                      Click here!!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="card">
                <div className="card__side card__side_front">
                  <div className="card__picture card__picture_3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading_span  card__heading_span__3">
                      Javascript & Query
                    </span>
                  </h4>
                  <div className="card__details">
                    <p className="paragraph__PHP">
                      JavaScript allows you to make web pages more interactive
                      by accessing and modifying the content and markup used in
                      web page while it is being viewed in the browser.
                      JavaScript encompasses many of the traditional rules of
                      programming.{" "}
                      {/* <span className="link__PHP">
                        <Link to="#">Click Here to see PHP projects.</Link>
                      </span> */}
                    </p>
                  </div>
                </div>
                <div className="card__side  card__side_back card__side_back_3">
                  <div className="card__cta">
                    <div className="card__projects_box">
                      <p className="card__learning_only">
                        {" "}
                        YouTube learning projects
                      </p>
                      <p className="card__personal_projects">
                        {" "}
                        Personal projects and design
                      </p>
                    </div>

                    <Link to="#" className="btn btn__white">
                      Click here!!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="card">
                <div className="card__side card__side_front">
                  {/* &nbsp; => Non-breaking space */}
                  <div className="card__picture card__picture_4">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading_span  card__heading_span__4">
                      Data Structures & Algorithms Java
                    </span>
                  </h4>
                  <div className="card__details">
                    <p className="paragraph__PHP">
                      A Data structure is an arrangement of data in a computer's
                      memory(or sometimes on a disk). Data structure includes
                      arrays, linked lists, stacks, binary trees, and hash
                      tables, among others. Algorithms manipulate the data in
                      these structures in various ways, such as searching for a
                      particular data item and sorting the data.{" "}
                      {/* <span className="link__PHP">
                        <Link to="#">Click Here to see PHP projects.</Link>
                      </span> */}
                    </p>
                  </div>
                </div>
                <div className="card__side  card__side_back card__side_back_4">
                  <div className="card__cta">
                    <div className="card__projects_box">
                      <p className="card__learning_only">
                        {" "}
                        YouTube learning projects
                      </p>
                      <p className="card__personal_projects">
                        {" "}
                        Personal projects and design
                      </p>
                    </div>

                    <Link to="#" className="btn btn__white">
                      Click here!!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u_center_text  u_margin_top_huge">
            <Link to="#" className="btn  btn__green">
              {" "}
              Discover all Languages & Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Languages;
