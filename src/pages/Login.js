import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (
    <section className="login-section">
      <h4 className="title">login</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="label-name">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label-email">
            email
          </label>
          <input
            type="email"
            className="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">
          login
        </button>
      </form>
    </section>
  );
};

export default Login;
