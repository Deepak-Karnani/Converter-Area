
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const formValidation = (event) => {
      event.preventDefault();

      let isValidForm = true;

      // Validation Conditions here
      if (name.trim().length < 1) {
        alert("Name is Required!");
        isValidForm = false;
      } else if (email.trim().length < 1) {
        alert("Email is Required!");
        isValidForm = false;
      } else if (msg.trim().length < 1) {
        alert("Message is Required!");
        isValidForm = false;
      }

      if (isValidForm) {
        // Perform form submission logic here
        console.log("Form submitted!");
      }
    };
  
  return (
    <section className="contact py-5 my-5" id="contact">
      <div className="container">
        <div className="section_title text-center mb-5">
          <span
            className="text-capitalize"
            style={{
              fontSize: "40px",
              textDecoration: "underLine",
              fontWeight: "bold",
              fontFamily: "revert-layer",
            }}
          >
            Contact Us
          </span>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 col-12">
            <div className="border border-success rounded shadow text-center p-3">
              <div className="mb-4">
                <i className="fas fa-phone-alt fa-3x"></i>
              </div>
              <div>
                <h3>Let's Talk</h3>
                <p>
                  <b>Phone:</b> +91-9876543210
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="border border-success rounded shadow text-center p-3">
              <div className="mb-4">
                <i className="fas fa-envelope-open fa-3x"></i>
              </div>
              <div>
                <h3>Drop a Line</h3>
                <p>
                  <b>Email:</b> xyz@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="border border-success rounded shadow text-center p-3">
              <div className="mb-4">
                <i className="far fa-life-ring fa-3x"></i>
              </div>
              <div>
                <h3>24x7 Support</h3>
                <p>
                  <b>Customer:</b> 1800 101 303
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-10 mx-auto mb-3 my-5 py-5 border shadow">
            <p
              className="text-center mb-3"
              style={{
                fontSize: "25px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Form
            </p>
            <form
              action="contact.html"
              method="POST"
              id="form"
              onSubmit={formValidation}
            >
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{ display: "inline-block", marginBottom: "0.5rem" }}
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#495057",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    marginBottom: "0.5rem",
                    transition:
                      "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  style={{ display: "inline-block", marginBottom: "0.5rem" }}
                >
                  Email address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#495057",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    marginBottom: "0.5rem",
                    transition:
                      "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="msg"
                  style={{ display: "inline-block", marginBottom: "0.5rem" }}
                >
                  Message
                </label>
                <textarea
                  name="msg"
                  id="msg"
                  className="form-control"
                  placeholder="Message"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#495057",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    transition:
                      "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  marginTop: "1rem",
                  display: "block",
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  fontWeight: "400",
                  textAlign: "center",
                  verticalAlign: "middle",
                  userSelect: "none",
                  border: "1px solid transparent",
                  padding: "0.375rem 0.75rem",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  borderRadius: "0.25rem",
                  transition:
                    "color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
