// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import "../assets/styles/Heading.css";
// import images01 from "../images/doctors.png";
// import images02 from "../images/do-2.png";
// import images03 from "../images/do-3.png";
// import images04 from "../images/Abortionamico591x531.png";
// import images05 from "../images/World-health-dayrafiki591x531.png";
// import { Carousel } from "react-bootstrap";

// const Heading = () => {
//   return (
//     <div className="site-header">
//       <div className="container-fluid main_header">
//         <div className="row">
//           <div className="col-md-10 col-12 mx-auto">
//             <div className="row">
//               <div className="col-md-5 col-12 main_header_left">
//                 <section className="left-sec">
//                   <h3> We Are Here For Your Care</h3>
//                   <h1>
//                     {" "}
//                     <span style={{ color: "#264653" }}>We</span>
//                     <span style={{ color: "#e9c46a" }}> The </span>
//                     <span style={{ color: "#f4a261" }}>Best</span>{" "}
//                     <span style={{ color: "#e76f51" }}>Doctors</span>
//                   </h1>
//                   <p>We are here for your care 24/7. Any help just call us.</p>

//                   <Link className="btnlink" to="/Doctor">
//                     <Button variant="contained" color="secondary">
//                       Make An Appointment
//                     </Button>
//                   </Link>
//                 </section>
//               </div>
//               <div className="col-md-7 col-12 main_header_right">
//                 <Carousel>
//                   <Carousel.Item>
//                     <img
//                       className="w-80 img-fluid"
//                       src={images04}
//                       alt="First slide"
//                     />
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="w-78 img-fluid"
//                       src={images05}
//                       alt="First slide"
//                     />
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="w-80 img-fluid"
//                       src={images01}
//                       alt="First slide"
//                     />
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="w-80 img-fluid"
//                       src={images02}
//                       alt="Third slide"
//                     />
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="w-80 img-fluid"
//                       src={images03}
//                       alt="Third slide"
//                     />
//                   </Carousel.Item>
//                 </Carousel>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;


import React from 'react';
import images01 from "../images/doctors.png";
import { Link } from "react-router-dom";

const Heading = () => {
    return (
        <div className="bg-white">
           

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <div className="text-center text-lg-start">
                                <h1 className="display-4 fw-bold text-dark">Your Health, Our Priority — Book Appointments, Donate Blood & Order Medicines Online</h1>
                                <p className="mt-3 text-muted fs-5">Book appointments with top doctors, donate blood to save lives, and order medicines online — all from one trusted platform built to support your health journey.</p>

                                <div className="mt-4">
                                    <div className="input-group input-group-lg">
                                        {/* <input type="email" className="form-control" placeholder="Enter email address" required /> */}
                                      <Link to="/Doctor">  <button  className="btn btn-dark fw-bold px-4" type="submit">Book an Appoinment</button> </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-4 mt-5">
                                <div className="text-center text-lg-start">
                                    <h3 className="fw-medium text-dark mb-0">300+</h3>
                                    <small className="text-muted">Doctors<br />Available</small>
                                </div>

                                <div className="d-none d-sm-block">
                                    <svg className="text-secondary" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                    </svg>
                                </div>

                                <div className="text-center text-lg-start">
                                    <h3 className="fw-medium text-dark mb-0">Friday</h3>
                                    <small className="text-muted">Free<br />Body Checkup</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src={images01} alt="Hero Illustration" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heading;
