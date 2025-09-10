import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      showAlert("Passwords do not match ❌", "danger");
      return;
    }

    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.authToken) {
      localStorage.setItem("token", json.authToken);
      showAlert("Account created successfully ✅", "success");
      navigate("/");
    } else {
      showAlert(json.error || "Signup failed ❌", "danger");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-info text-white text-center py-5 mb-4">
        <h1>Create Your iNotebook Account</h1>
        <p className="lead">Join now and organize your notes effortlessly!</p>
      </div>

      {/* Signup Form Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4 text-primary">
                  Sign Up
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                      required
                      minLength={5}
                      autoComplete="new-password"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      name="cpassword"
                      value={credentials.cpassword}
                      onChange={onChange}
                      required
                      minLength={5}
                      autoComplete="new-password"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>

                <p className="mt-3 text-center text-muted">
                  Already have an account? <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2025 iNotebook. All rights reserved.</p>
          <p>
            Follow us on:{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
