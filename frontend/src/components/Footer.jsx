import React from "react";
import {
  CDBSidebarFooter,
  CDBBox,
  CDBBtn,
  CDBIcon,
} from "cdbreact";
import { Link } from "react-router-dom";
// import logo from "../../public/icon123.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CDBSidebarFooter
      className="shadow-sm border-top"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%", maxWidth: "1200px" }}
      >
        <CDBBox
          display="flex"
          justifyContent="between"
          className="flex-wrap gap-5"
        >
          {/* Logo and description */}
          <CDBBox style={{ minWidth: "250px" }}>
            <p className="h5 mb-3 d-flex align-items-center fw-semibold">
              <img src="/icon123.png" alt="logo" width="32" className="me-2" />
              Hoapital Management System
            </p>
            <p className="text-muted" style={{ maxWidth: "260px" }}>
              Providing reliable digital healthcare. Book appointments, donate
              blood, and order medicines — anytime, anywhere.
            </p>
            <CDBBox display="flex" className="mt-3">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>

          {/* Explore */}
          <CDBBox>
            <p className="h6 mb-3 fw-semibold">Explore</p>
            <CDBBox flex="column" style={{ padding: 0 }}>
              <Link to="/" className="text-decoration-none text-dark d-block mb-2">Home</Link>
              <Link to="/services" className="text-decoration-none text-dark d-block mb-2">Services</Link>
              <Link to="/blog" className="text-decoration-none text-dark d-block mb-2">Blog</Link>
              <Link to="/contact" className="text-decoration-none text-dark d-block mb-2">Contact</Link>
            </CDBBox>
          </CDBBox>

          {/* Help */}
          <CDBBox>
            <p className="h6 mb-3 fw-semibold">Help</p>
            <CDBBox flex="column" style={{ padding: 0 }}>
              <Link to="/contact" className="text-decoration-none text-dark d-block mb-2">Support</Link>
              <Link to="/faq" className="text-decoration-none text-dark d-block mb-2">FAQs</Link>
              <Link to="/login" className="text-decoration-none text-dark d-block mb-2">Sign In</Link>
              <Link to="/register" className="text-decoration-none text-dark d-block mb-2">Sign Up</Link>
            </CDBBox>
          </CDBBox>

          {/* Services */}
          <CDBBox>
            <p className="h6 mb-3 fw-semibold">Services</p>
            <CDBBox flex="column" style={{ padding: 0 }}>
              <Link to="/doctor" className="text-decoration-none text-dark d-block mb-2">Doctor Appointment</Link>
              <Link to="/blood" className="text-decoration-none text-dark d-block mb-2">Blood Donation</Link>
              <Link to="/medicine" className="text-decoration-none text-dark d-block mb-2">Medicine Delivery</Link>
            </CDBBox>
          </CDBBox>
        </CDBBox>

        <hr className="my-4" />
        <small className="text-center text-muted">
          &copy; {currentYear} Hospital Management System. All rights reserved.
        </small>
      </CDBBox>
    </CDBSidebarFooter>
  );
};

export default Footer;
