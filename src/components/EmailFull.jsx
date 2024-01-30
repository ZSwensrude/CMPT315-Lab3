import React from "react";
import './components.css'

const EmailFull = ({ email, handleDelete }) => {
  const { address, from, message, subject, time } = email;

  const onClick = () => {
    handleDelete(email.id);
  }

  return (
    <div className="emailContainer">
      <h1 className="header">{subject}</h1>
      <p>{time}</p>
      <p>From {from} ------ {address}</p>
      <p>{message}</p>
      { !email.deleted && (
        <button onClick={onClick}>Delete</button>
      )}
    </div>
  );
}

export default EmailFull;