import React from "react";
import { LinearGradient } from "react-text-gradients";

function About() {
  return (
    <>
      <div className="container abot mx-auto ps-0 ps-md-5">
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
        <button className="btn btn-primary fs-4 fw-bold py-1 px-4 mt-3">Contact</button>
      </div>
    </>
  );
}

export default About;
