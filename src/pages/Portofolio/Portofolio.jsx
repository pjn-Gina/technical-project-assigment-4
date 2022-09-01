import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import Pict1 from "../../assets/portosatu.PNG";
import Pict2 from "../../assets/portodua.PNG";
import Pict3 from "../../assets/portotiga.PNG";
import Pict4 from "../../assets/portoempat.PNG";
import "./Portofolio.css";

function Portofolio() {
  return (
    <>
      <Navbar />
      <Title id="text-center" text="Portofolio" />

      <div className="container">
        <div className="mt-3 row g-4">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict1} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">Technical Project Assignment 1</h5>
                <p className="mt-2 card-text-porto ">Create a personal website using HTML and CSS</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On July 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict2} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">Technical Project Assignment 2</h5>
                <p className="card-text-porto">Create a website application to calculate Body Mass Index (BMI) based on predetermined standards.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict3} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">Technical Project Assignment 3</h5>
                <p className="card-text-porto">Create a website application display a list of movies using external data API TMDB API</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict4} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">Group Project</h5>
                <p className="card-text-porto">Create a vegetable and fruit sales website so that Terra can help potential customers buy vegetables and fruits easily.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Portofolio;
