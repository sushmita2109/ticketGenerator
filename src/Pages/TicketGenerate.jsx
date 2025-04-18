import React from "react";
import ticket from "../assets/pattern-ticket.svg";
import NavBar from "../Components/NavBar";
import logo from "../assets/logo-mark.svg";
import { useLocation } from "react-router-dom";

const TicketGenerate = () => {
  const location = useLocation();
  const { fname, email, guser, avatar } = location.state || {};
  const avatarUrl = avatar ? URL.createObjectURL(avatar) : null;
  return (
    <div>
      <h1>Congrats, {fname}!</h1>
      <h1>Your Ticket is ready.</h1>
      <p>
        We have emailed your ticket to {email} and will send updates in the run
        up to the event.
      </p>

      <div className="ticket-container">
        <img src={ticket} alt="ticket" className="ticketdesign" />
        <div className="ticket-text">
          <div className="ticket-header">
            <img src={logo} alt="logo" className="ticket-logo" />
            <div className="ticket-header-text">
              <h2> Coding Conf 2025</h2>
              <p className="ticket-subheader">March 15, 2025 / Austin TX </p>
            </div>
          </div>

          <div className="ticket-details">
            {avatarUrl && (
              <img src={avatarUrl} alt="avatarpic" width="60" height="60" />
            )}
            <div className="ticket-info">
              <h2>{fname}</h2>
              <p>{guser}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGenerate;
