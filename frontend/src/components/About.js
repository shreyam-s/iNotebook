import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5 mb-4">
        <h1>Welcome to iNotebook</h1>
        <p className="lead">
          Your ultimate digital notebook to stay organized, productive, and
          efficient.
        </p>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Key Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Create Notes</h5>
                <p className="card-text">
                  Add notes easily with a title, description, and optional tag.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Edit Notes</h5>
                <p className="card-text">
                  Update your existing notes anytime using our easy edit
                  interface.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-danger">Delete Notes</h5>
                <p className="card-text">
                  Remove notes you no longer need with a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose iNotebook Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose iNotebook?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                iNotebook is designed for students, professionals, and anyone
                who wants to stay organized. Unlike other apps, it’s simple,
                fast, and intuitive.
              </p>
              <ul>
                <li>Clean and user-friendly interface</li>
                <li>Works perfectly on mobile and desktop</li>
                <li>Organize notes efficiently with tags</li>
                <li>Secure login ensures privacy</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div className="w-50 mx-auto">
                <img
                  src="/images/addnote.png"
                  alt="Add Notes"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-center">
          Our mission is to help users capture, manage, and recall information
          effortlessly. We believe that everyone deserves a fast, reliable, and
          easy-to-use digital notebook.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-secondary text-white py-5 text-center">
        <h2>Get Started Today!</h2>
        <p>Create your account now and never miss an important idea again.</p>
        {isLoggedIn ? (
          <Link to="/" className="btn btn-light btn-lg mt-3">
            Go to Notes
          </Link>
        ) : (
          <Link to="/signup" className="btn btn-light btn-lg mt-3">
            Sign Up
          </Link>
        )}
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

export default About;
