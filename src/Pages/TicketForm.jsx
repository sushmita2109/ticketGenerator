import React from "react";
import "../App.css";
import upload from "../assets/icon-upload.svg";
import info from "../assets/icon-info.svg";

const TicketForm = () => {
  return (
    <div className="ticket-form">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot for next year's biggest coding conference</p>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="avatar">Upload Avatar</label>
          <div className="uploadbox">
            <button className="icon-button">
              <img src={upload} alt="uploadImg" className="upload-icon" />{" "}
            </button>
            <p>Drap and drop or click to upload</p>
          </div>
        </div>
        <div className="form-info">
          <img src={info} alt="info" className="info-icon" />
          <p>Upload your photo(JPEG or Png, size:5000KB)</p>
        </div>

        <div className="form-field">
          <label htmlFor="fname">Full Name</label>
          <input id="fname" type="text" />
        </div>
        <div className="form-field">
          <label htmlFor="emailadd">Email Address</label>
          <input id="emailadd" type="email" />
        </div>
        <div className="form-field">
          <label htmlFor="guser">Github Username</label>
          <input id="guser" type="text" />
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default TicketForm;
