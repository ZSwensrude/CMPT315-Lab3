import React from "react";
import './components.css'
import EmailPreview from "./EmailPreview";

const EmailList = ({ emails, selected, handleClick }) => {

  return (
    <div className="emailList">
      {emails.map((email) => 
        // display each email as a preview
        (<EmailPreview key={email.id} email={email} selected={selected} handleClick={handleClick}/>)
      )}
    </div>
  );
};


export default EmailList;