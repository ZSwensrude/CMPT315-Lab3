import React from "react";

const EmailFull = ({ email }) => {
  const { address, from, id, message, read, subject, tag, time } = email;

  return (
    <div>
      { Object.keys(email).length !== 0 ? 
        (<p>{subject}</p>)
      :
       (<h1>No email selected</h1>)}
    </div>
  );
}

export default EmailFull;