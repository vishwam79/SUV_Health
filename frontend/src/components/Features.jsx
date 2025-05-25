import React from "react";
import Button from "@material-ui/core/Button";
import images01 from "../images/icon/blood_donation.png";
import images02 from "../images/icon/medical-kit.png";
import images03 from "../images/icon/AdobeStock_207418957_Preview-removebg-preview.png";
import images04 from "../images/icon/open.png";
import images05 from "../images/icon/chat.png";
import images06 from "../images/icon/appointment.png";
import "../assets/styles/Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <section id="home-icon" className="pb-3 text-center">
        <div className="content pb-5"></div>
        <div className="containerx text-center">
          <div className="row align-self-center">

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-1" className="box col-md-4">
                <img style={{ height: "80px" }} src={images02} alt="Emergency Care" />
                <h3 className="my-2">Emergency Care</h3>
                <p className="lead mb-3">
                  Get immediate medical support in critical situations. Our system helps you connect with emergency services instantly.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-2" className="box col-md-4">
                <img style={{ height: "80px" }} src={images04} alt="Opening Hours" />
                <h3 className="my-2">Opening Hours</h3>
                <p className="lead mb-3">
                  Access detailed information about hospital or clinic availability and their service schedules anytime.
                </p>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-3" className="box col-md-4">
                <img style={{ height: "80px" }} src={images01} alt="Blood Donation" />
                <h3 className="my-2">Blood Donation</h3>
                <p className="lead mb-3">
                  Find donors or donate blood through our smart donor matching system. Save lives by being part of our community.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-4" className="box col-md-4">
                <img style={{ height: "80px" }} src={images05} alt="Chat with Doctors" />
                <h3 className="my-2">Chat with Doctors</h3>
                <p className="lead mb-3">
                  Consult with verified doctors through live chat. Get quick responses to your health queries without visiting the hospital.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-5" className="box col-md-4">
                <img style={{ height: "80px" }} src={images06} alt="Appointment Booking" />
                <h3 className="my-2">Get Appointment</h3>
                <p className="lead mb-3">
                  Book doctor appointments online without long queues. Choose your specialist, time, and location in just a few clicks.
                </p>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-6" className="box col-md-4">
                <img style={{ height: "80px" }} src={images03} alt="24x7 Service" />
                <h3 className="my-2">24/7 Service</h3>
                <p className="lead mb-3">
                  Access medical support anytime, anywhere. Our platform ensures round-the-clock assistance and healthcare resources.
                </p>
                <Button variant="contained" color="primary">
                  <Link className="btnlink" to="/contactus">
                    Contact Now
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
