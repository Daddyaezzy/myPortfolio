import React, { useEffect } from "react";
import "../styles/about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="about-title">
                <p data-aos="fade-right">ABOUT ME</p>
                <h3 data-aos="fade-up">FAJOBI ANSELM</h3>
              </div>
              <div data-aos="fade-up" className="about-body">
                <p>
                  Hello, I'm Fajobi Anselm a web developer with a few years of
                  experience. I have acquired experience that has improved my
                  productivity in the long run, and I am working towards
                  perfection, having worked on a few projects with friends, This
                  has impacted my skills, problem solving ability, communication
                  ability and ability to carry out research pertaining to what
                  is required of a job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
