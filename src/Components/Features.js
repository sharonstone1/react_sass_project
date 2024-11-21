import React from "react";
import { FaBrain } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const Features = () => {
  return (
    <div>
      <main>
        <section className="section_features">
          <div className="u_center_text  u_margin_bottom_big">
            <h2 className="heading__secondary features_text">
              My Lovely Journey In Coding
            </h2>
          </div>
          <div className="row">
            <div className="col_1_of_4">
              <div className="features_box">
                <FaBrain className="feature_box_icon  icon_basic_world"></FaBrain>
                <h3 className="heading_tertiary u_margin_bottom_small text_title">
                  My Skills
                </h3>
                <p className="feature_box_text">
                  Over years, I had developed my knowledge in different field
                  thank to my education background at university and the work
                  experience I have done after university. Today, I got skills
                  in marketing and computer science. On my day routine I used my
                  technical skills more than my marketing skills specialy
                  software tool. Click here to learn more.
                </p>
              </div>
            </div>

            <div className="col_1_of_4">
              <div className="features_box">
                <FaBriefcase className="feature_box_icon  icon_basic_world"></FaBriefcase>
                <h3 className="heading_tertiary u_margin_bottom_small text_title">
                  My work experiences
                </h3>
                <p className="feature_box_text">
                  Over years, I had developed my knowledge in different field
                  thank to my education background at university and the work
                  experience I have done after university. Today, I got skills
                  in marketing and computer science. On my day routine I used my
                  technical skills more than my marketing skills specialy
                  software tool. Click here to learn more.
                </p>
              </div>
            </div>

            <div className="col_1_of_4">
              <div className="features_box">
                <FaMedal className="feature_box_icon  icon_basic_world"></FaMedal>
                <h3 className="heading_tertiary u_margin_bottom_small text_title">
                  My achievement
                </h3>
                <p className="feature_box_text">
                  Over years, I had developed my knowledge in different field
                  thank to my education background at university and the work
                  experience I have done after university. Today, I got skills
                  in marketing and computer science. On my day routine I used my
                  technical skills more than my marketing skills specialy
                  software tool. Click here to learn more.
                </p>
              </div>
            </div>

            <div className="col_1_of_4">
              <div className="features_box">
                <FaUserGraduate className="feature_box_icon  icon_basic_world"></FaUserGraduate>
                <h3 className="heading_tertiary  u_margin_bottom_small  text_title">
                  Education & Habbits
                </h3>
                <p className="feature_box_text">
                  Over years, I had developed my knowledge in different field
                  thank to my education background at university and the work
                  experience I have done after university. Today, I got skills
                  in marketing and computer science. On my day routine I used my
                  technical skills more than my marketing skills specialy
                  software tool. Click here to learn more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;
