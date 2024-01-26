import React from "react";
import './components.css'
import EmailPreview from "./EmailPreview";

const EmailList = ({ emails }) => {
  return (
    <div className="emailList">
      <h1>Inbox</h1>
      {emails.map((email) => 
        (<EmailPreview email={email} />)
      )}
    </div>
  );
};


export default EmailList;