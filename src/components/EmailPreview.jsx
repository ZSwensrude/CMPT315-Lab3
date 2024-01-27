import React, {useEffect, useState} from "react";

const EmailPreview = ({ email, selected, handleClick }) => {
  const { address, from, read, subject, time } = email;
  const [emailId, setEmailId] = useState('');

  // when selected, read, or email is changed, make sure id
  // is set correctly (handles background colour)
  useEffect( () => {
    if (selected === email.id){
      setEmailId('selectedEmail');
    } else {
      setEmailId(read === "true" ? 'readEmail' : 'unreadEmail');
    }
  }, [selected, read, email])

  return (
    <div 
      id={`${emailId}`} 
      className='emailPreview'
      onClick={ () => handleClick(email)}
    >
      <div>
        <p>{subject}</p>
        <p className="emailDetails">From {from}</p>
        <p className="emailDetails">({address})</p>
        <p className="emailDetails">at {time}</p>
      </div>
    </div>
  );
};

export default EmailPreview;