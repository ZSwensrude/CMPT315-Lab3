import React from "react";

const EmailFull = ({ email }) => {
  const { address, from, id, message, read, subject, tag, time } = email;

  return (
    <div>
      <p>{subject}</p>
      <p>{message}</p>
    </div>
  );
}

export default EmailFull;