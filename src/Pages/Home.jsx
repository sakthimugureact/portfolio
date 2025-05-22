import React from "react";
import { LinearGradient } from "react-text-gradients";
import { TypeAnimation } from 'react-type-animation';
import About from "./About";
import Tech from "./Tech";
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer"
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <div className="homepage" id="home">
      <div className="container  mx-auto">
        <div className="row ror">
          <div className="col-md-6 d-flex flex-column justify-content-center gap-2 ps-5">
            <h4 className="welcome">Hi,</h4>
            <h4 className="welcome">My name is</h4>
            <h1 className="name">
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                MUGUNTHAN
              </LinearGradient>
            </h1>
            <h4 className="python">
             <TypeAnimation
      sequence={[
        'Python FullStack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h4>
    <button className="btn cm btn-primary fs-4 fw-bold py-1 w-25 mt-3"><HashLink to={"#contact"} className="text-light fs-4 fw-bold text-decoration-none">Contact</HashLink></button>
          </div>
          <div className="col-md-6">
            <img src="/images/dp4.jpg" className="d-block mx-auto w-100 img-fluid" alt="" />
          </div>
        </div>
      </div>
      <About/>
      <Tech/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
