import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <h2 className="title">About</h2>
      <Link to="/" className="btn">
        back to home
      </Link>
    </section>
  );
};

export default About;
