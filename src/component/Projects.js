import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../images/Screenshot 2023-06-13 at 19.13.37.png";
import pro2 from "../images/Screenshot 2023-06-12 at 01.41.01.png";
import pro8 from "../images/Screenshot 2023-09-13 at 2.36.04 PM.png";
import pro3 from "../images/Screenshot 2023-06-13 at 19.21.45.png";
import pro4 from "../images/Screenshot 2023-06-13 at 19.03.42.png";
import pro5 from "../images/Screenshot 2023-06-12 at 01.24.03.png";
import pro6 from "../images/Screenshot 2023-06-13 at 17.35.06.png";
import pro7 from "../images/Screenshot 2023-06-13 at 20.43.31.png";
import "../styles/project.css";
import cvFile from "../files/My RESUME Fixed.pdf";

const Projects = () => {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col ">
              <div className="about-title">
                <p data-aos="fade-right">MY PROJECTS</p>
                <h3 data-aos="fade-up">SEE MY WORKS</h3>
              </div>
              <div data-aos="fade-up" className="my-projects d-flex flex-wrap ">
                <Link to="https://da-tipcalculator.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid ">
                      <img src={pro1} alt="Calculator App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Tip Calculator</h4>
                      <p>
                        A vanilla Html, Css and Js project i decided to work on
                        to create for an online resturant.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-recipies.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro2} alt="Recipe App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Recipes</h4>
                      <p>
                        A Food Recipe finder app, created with React, Nodejs and
                        Api, this was done out of the idea, that i wanted to
                        learn how to cook perfectly.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-chatapp.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro3} alt="Chat App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Chat APP</h4>
                      <p>
                        A Chat Application done out of testing, it was created
                        with react, context API and Firebase Authentication.
                        Still in progress...
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-musicplayer.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro4} alt="Music App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Music Player</h4>
                      <p>
                        A Music Player craeted with vanilla Html, Css and Js,
                        works like an andriod, plays music from audios stored in
                        the songs folder.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-video.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro8} alt="Da Video App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Video</h4>
                      <p>
                        A Video call Application, almost like a zoom replica.
                        Which you can use to chat with your family and friends
                        from far away created with React, NodeJS, Socket.IO and
                        the likes.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-collections.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro5} alt="E-commerce website" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Collections</h4>
                      <p>
                        A Personal E-Commerce project created with React and
                        Redux toolkit.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://ali3n-express.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro6} alt="E-commerce Website" />
                    </div>
                    <div className="project-writing">
                      <h4>Ali3n Express</h4>
                      <p>
                        An E-Commerce project I created for a client, with the
                        UI of Amazon. Still in Progress...
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="https://da-musicmatch.netlify.app" target="_blank">
                  <div className="id-project ">
                    <div className="project-img img-fluid">
                      <img src={pro7} alt="Lyrics App" />
                    </div>
                    <div className="project-writing">
                      <h4>DA Lyrics Finder</h4>
                      <p>
                        A Lyrics Finder application, created with React, Nodejs,
                        Context API and Music Matxh API.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="my-cv d-flex justify-content-center   gap-10">
                <p>
                  Link to download my Resume:{" "}
                  <a className="m-0" href={cvFile} download>
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
