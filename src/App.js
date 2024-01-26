import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './components/EmailList';
import EmailFull from './components/EmailFull';

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState({});

  // get emails on load
  useEffect ( () => {
    const url = 'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'
    const data = {};

    axios.get(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then(({data}) => { 
      //console.log(data);
      setEmails(data);
    });
  }, [])

  const handleClick = (email) => {
    console.log("email: ", email, " clicked");
    setSelectedEmail(email);
  };

  useEffect( () => {
    console.log("selectedEmail.id", selectedEmail.id);
  }, [selectedEmail])


  return (
    <div className="App">
    
      <div className='leftList'>
        <EmailList emails={emails} selected={selectedEmail.id} handleClick={handleClick}/>
      </div>

      <div className='rightList'>
        { // if we were given an email, set it as current, otherwise show no email message 
          Object.keys(selectedEmail).length !== 0 ? (
            <EmailFull email={selectedEmail} />
          ) : (
            <h1>No email selected</h1>
          )
        }
      </div>
    
    </div>
  );
}

export default App;
