import React, {useEffect, useState} from "react";

const EmailPreview = ({ email, selected, handleClick }) => {
  const { address, from, read, subject, time } = email;
  const [emailId, setEmailId] = useState('');

  useEffect( () => {
    if (selected === email.id){
      setEmailId('selected');
    } else {
      setEmailId(read === "true" ? 'read' : 'unread');
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
        <p className="details">From {from}</p>
        <p className="details">({address})</p>
        <p className="details">at {time}</p>
      </div>
    </div>
  );
};

export default EmailPreview;