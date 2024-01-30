import React from "react";
import './components.css'
import EmailPreview from "./EmailPreview";

const EmailList = ({ emails, deletedEmails, viewDeleted, selected, handleClick }) => {

  // if view deleted, set deleted emails, else set emails
  const emailList = viewDeleted ? deletedEmails : emails;

  return (
    <div className="emailList">
      {emailList.map((email) => 
        // display each email as a preview
        (<EmailPreview key={email.id} email={email} selected={selected} handleClick={handleClick}/>)
      )}
    </div>
  );
};


export default EmailList;