import React from "react";
import './components.css'

const EmailFull = ({ email }) => {
  const { address, from, message, subject, time } = email;

  return (
    <div className="emailContainer">
      <h1 className="header">{subject}</h1>
      <p>{time}</p>
      <p>From {from} ------ {address}</p>
      <p>{message}</p>
    </div>
  );
}

export default EmailFull;