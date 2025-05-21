import React from "react";
import { HashLink } from "react-router-hash-link";
import { LinearGradient } from "react-text-gradients";

function About() {
  return (
    <>
      <div className="container abot mx-auto ps-0 ps-md-5" id="about">
        <h1 className="namess mb-3">
                     <LinearGradient gradient={["to left", "#090979 ,#00D4FF"]}>
                       About
                     </LinearGradient>
                   </h1>

        <p className="fw-semibold fs-4 lh-lg">
          Hi, I'm Mugunthan, an enthusiastic fullstack developer from Tirunelveli. I'm
          gaining solid proficiency in HTML, CSS, JavaScript, React.js, Python and MySQL. I've
          worked on numerous personal projects and have a keen interest in
          designing aesthetically pleasing and user-centric websites. I'm
          committed to continuous learning and development, and I'm excited to
          apply my skills to new opportunities in the future.
        </p>
        <button className="btn cm btn-primary fs-4 fw-bold py-1 w-25 mt-3"><HashLink to={"#contact"} className="text-light fs-4 fw-bold text-decoration-none">Contact</HashLink></button>
      </div>
    </>
  );
}

export default About;
