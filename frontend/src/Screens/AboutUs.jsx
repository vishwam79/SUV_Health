import React from "react";
import { Link } from "react-router-dom";
import images01 from "../images/Group 140.png";
import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className=" py-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={images01}
              alt="Hospital Management Illustration"
              className="img-fluid"
              style={{ borderRadius: "12px", maxHeight: "500px" }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3 fw-bold text-primary">About Our Project</h1>
            <p className="lead">
              The <strong>Hospital Management System</strong> is a modern solution designed to streamline hospital operations and enhance patient care. Developed as part of an academic project, this system focuses on efficient appointment scheduling, patient records, billing, and staff management.
            </p>
            <p>
              Built with a passion for innovation and service, our project reflects the possibilities of integrating technology into healthcare workflows to reduce manual errors, save time, and improve patient outcomes.
            </p>
            <Link to="/service" className="btn btn-outline-primary mt-3">
              Contact Now
            </Link>
          </div>
        </div>

        {/* --- Features Section --- */}
        <div className="row text-center mb-5">
          <h2 className="fw-bold mb-4">Key Features</h2>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <h5 className="card-title text-primary">Appointment Management</h5>
              <p className="card-text">
                Schedule and manage patient appointments efficiently with automated reminders.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <h5 className="card-title text-primary">Patient Records</h5>
              <p className="card-text">
                Maintain secure digital records of patient details, treatments, and history.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <h5 className="card-title text-primary">Billing & Reports</h5>
              <p className="card-text">
                Generate billing statements and reports for better financial tracking.
              </p>
            </div>
          </div>
        </div>

        {/* --- Developer Section --- */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h3 className="fw-bold text-success mb-3">Project By</h3>
            <p className="mb-1"><strong>Name:</strong> Yash Kumar</p>
            <p className="mb-1"><strong>College:</strong> Dev Bhoomi Uttarakhand University, Dehradun</p>
            <p className="text-muted fst-italic">
              "This project was built with dedication to improve healthcare systems and make a meaningful impact through technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
