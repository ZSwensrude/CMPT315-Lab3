import React from "react";

const EmailFull = ({ email }) => {
  const { address, from, id, message, read, subject, tag, time } = email;

  return (
    <div>
      <h1>{subject}</h1>
      <p>{message}</p>
    </div>
  );
}

export default EmailFull;