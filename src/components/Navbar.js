import React, { useState, useRef, useContext } from "react";
import logo from "../images/logoBeach.png";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import EmailJS from "emailjs-com";
import { MyContext } from "../Context/context";

const Navbar = () => {
  const { user } = useContext(MyContext);
  const [isOpen, setIsOPen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for contact pup up form
  const formRef = useRef();
  const [status, setStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    EmailJS.sendForm(
      //RESTART THE SERVICE
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        console.log(result.text); //if we get OK  message it we works
        if (result.text === "OK") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    setIsOPen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="Beach Resort" width="200" />
          </NavLink>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/rooms/"
            >
              Rooms
            </NavLink>
          </li>
          {/* Login  */}
          {user ? (
            <li>
              <NavLink
                className={(node) =>
                  node.isActive ? "myActiveClass" : "myNotActiveClass"
                }
                to="/profile"
              >
                {user.displayName}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className={(node) =>
                  node.isActive ? "myActiveClass" : "myNotActiveClass"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
          {/* Contact */}
          <li>
            <Button variant="secondary" onClick={handleShow}>
              Contact Us
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="contact-all">
                  <div className="contact-page">
                    <h1>Contact Us</h1>
                    {status ? (
                      <h1>Thanks for your email</h1>
                    ) : (
                      <form className="form" ref={formRef} onSubmit={sendEmail}>
                        <label>Name:</label>
                        <br />
                        <input type="text" name="name_name" />
                        <br />
                        <br />
                        <label>Email:</label>
                        <br />
                        <input type="email" name="user_email" />
                        <br />
                        <br />
                        <label htmlFor="textarea">Message:</label>
                        <br />
                        <textarea
                          name="message"
                          id="textarea"
                          cols="30"
                          rows="10"
                        ></textarea>
                        <br />
                        <button className="btn-secondary btn-contact">
                          Submit
                        </button>
                        <br />
                      </form>
                    )}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
