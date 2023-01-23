import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import '../styles/Contact.css'

const Contact = () => {
  return (
    <>
      <Sidebar ContactIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar />

        <div className="border border-white mt-5">
          <div className="row bg-dark pb-5 pt-4 mx-auto p-3 px-5">
            <div className="col-md-6 mx-auto">
              <h4 className="text-white text-decoration-underline my-4 text-center pb-4">
                Contact Us
              </h4>
              <form>
                <div className="pb-4">
                  <label className="text-white pb-2">FullName:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div className="pb-4">
                  <label className="text-white pb-2">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="pb-4">
                  <label className="text-white pb-2">Subject:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write the Subject"
                  />
                </div>
                <div className="pb-4">
                  <label className="text-white pb-2">Subject:</label>
                  <textarea
                    className="form-control textArea"
                    type="text"
                    placeholder="Write the Subject"
                    rows={5}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
