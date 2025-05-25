import React from "react";
import MakeAppointment from "../components/MakeAppointment";
import Service from "../components/Service";
import Counter from "../components/Counter";
import Heading from "../components/Heading";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";

const HomeScreen = () => {
  return (
    <>
      <Heading />
       <Features />
     <MakeAppointment />
       <Service />
      <Counter />
      <Testimonial /> 

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
    </>
  );
};

export default HomeScreen;
