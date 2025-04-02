import React, { useState } from "react";
import "../App.css";
import upload from "../assets/icon-upload.svg";
import info from "../assets/icon-info.svg";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    guser: "",
    avatar: null,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (formData.fname === "") {
      newErrors.fname = "Full Name is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.guser === "") {
      newErrors.guser = "Github Username is required";
    }
    return newErrors;
  };

  const onDrop = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      avatar: acceptedFiles[0],
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const getTicket = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      navigate("/ticket", { state: formData });
    }
  };
  return (
    <div className="ticket-form">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot for next year's biggest coding conference</p>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="avatar">Upload Avatar</label>
          <div className="uploadbox" {...getRootProps()}>
            <input {...getInputProps()} />
            <button className="icon-button">
              <img src={upload} alt="uploadImg" className="upload-icon" />{" "}
            </button>
            <p>Drap and drop or click to upload</p>
            {formData.avatar && <p>{formData.avatar.name}</p>}
          </div>
        </div>
        <div className="form-info">
          <img src={info} alt="info" className="info-icon" />
          <p>Upload your photo(JPEG or Png, size:5000KB)</p>
        </div>

        <div className="form-field">
          <label htmlFor="fname">Full Name</label>
          <input
            id="fname"
            type="text"
            onChange={handleChange}
            value={formData.fname}
          />
          {errors.fname && <p className="error">{errors.fname}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            placeholder="example@email.com"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="guser">Github Username</label>
          <input
            id="guser"
            type="text"
            placeholder="@yourusername"
            onChange={handleChange}
            value={formData.guser}
          />
          {errors.guser && <p className="error">{errors.guser}</p>}
        </div>
        <button className="submit-button" onClick={getTicket}>
          Generate My Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketForm;
