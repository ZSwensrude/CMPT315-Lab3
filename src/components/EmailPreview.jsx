import React from "react";

const EmailPreview = ({ email }) => {
  const { address, from, id, message, read, subject, tag, time } = email;

  console.log(email);

  return (
    <div className="emailPreview">
      <p>{subject}</p>
    </div>
  );
};

export default EmailPreview;