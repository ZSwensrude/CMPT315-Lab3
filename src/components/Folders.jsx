import React from "react";
import './components.css'

const Folders = ({ inboxButton, deleteButton }) => {
  return (
    <div>
      <div>
        <p>Inbox</p>
        <button className="button" onClick={inboxButton}>view</button>
      </div>
      <div>
        <p>Trash</p>
        <button className="button" onClick={deleteButton}>view</button>
      </div>
    </div>
  );
};

export default Folders;
