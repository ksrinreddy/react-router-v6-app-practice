import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2 className="title">error response: 404</h2>
      <p className="info">page not found</p>
      <Link to="/" className="btn">
        back to Home
      </Link>
    </section>
  );
};

export default Error;
