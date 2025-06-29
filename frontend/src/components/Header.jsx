import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import {
  FaUser,
  FaCapsules,
  FaStethoscope,
  FaAddressBook,
  FaTty,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { doctorInfo } = useSelector((state) => state.choice);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar
        variant="light"
        bg="white"
        expand="lg"
        collapseOnSelect
        className="shadow-sm py-2"
        style={{ borderBottom: "1px solid #eaeaea" }}
      >
        <Container fluid style={{ maxWidth: "1280px" }}>
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center fw-bold text-dark">
              <img src="/icon123.png" alt="logo" width="30" className="me-2" />
              Hospital Mangement system
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <LinkContainer to="/Medicine">
                <Nav.Link className="text-dark fw-medium">
                  <FaCapsules className="me-1" /> Medicine
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Doctor">
                <Nav.Link className="text-dark fw-medium">
                  <FaStethoscope className="me-1" /> Doctor
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Blood">
                <Nav.Link className="text-dark fw-medium">
                  <FaStethoscope className="me-1" /> Blood
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contactus">
                <Nav.Link className="text-dark fw-medium">
                  <FaTty className="me-1" /> Contact Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Aboutus">
                <Nav.Link className="text-dark fw-medium">
                  <FaAddressBook className="me-1" /> About Us
                </Nav.Link>
              </LinkContainer>

              {!userInfo ? (
                <LinkContainer to="/login">
                  <Nav.Link className="text-dark fw-medium">
                    <FaUser className="me-1" /> Sign In
                  </Nav.Link>
                </LinkContainer>
              ) : userInfo.isAdmin ? (
                <>
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                    className="fw-medium"
                  >
                    <LinkContainer to="/admin/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Admin" id="adminmenu" className="fw-medium">
                    <LinkContainer to="/admin/medicinelist">
                      <NavDropdown.Item>Medicines</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/appointmentlist">
                      <NavDropdown.Item>Appointments</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/requestlist">
                      <NavDropdown.Item>Blood Request</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/bloodlist">
                      <NavDropdown.Item>Bloods</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/doctorlist">
                      <NavDropdown.Item>Doctors</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/chat">
                      <NavDropdown.Item>Chat</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </>
              ) : (
                <NavDropdown title={userInfo.name} id="username" className="fw-medium">
                  <LinkContainer to="/myprofile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                    <NavDropdown.Item>
                      Cart
                      {cartItems.length > 0 && (
                        <Badge pill bg="success" className="ms-2">
                          {cartItems.reduce((a, c) => a + c.qty, 0)}
                        </Badge>
                      )}
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/placeappointment">
                    <NavDropdown.Item>
                      Appointment
                      {doctorInfo.length > 0 && (
                        <Badge pill bg="success" className="ms-2">
                          *
                        </Badge>
                      )}
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/chat">
                    <NavDropdown.Item>Chat</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
