import React from "react";
import './components.css'
import EmailPreview from "./EmailPreview";

const EmailList = ({ emails, selected, handleClick }) => {

  return (
    <div className="emailList">
      <h1>Inbox</h1>
      {emails.map((email) => 
        (<EmailPreview key={email.id} email={email} selected={selected} handleClick={handleClick}/>)
      )}
    </div>
  );
};


export default EmailList;