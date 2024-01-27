import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './components/EmailList';
import EmailFull from './components/EmailFull';
import SearchBar from './components/SearchBar';

function App() {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([])
  const [searchInput, setSearchInput] = useState('')
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
      setEmails(data);
    });
  }, [])

  // used for search (same as monsters demo)
  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails
    } else {
      filtered = emails.filter(emails =>
      emails.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  // used for search bar (same as monsters demo)
  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  // handles email click, sets selection
  const handleClick = (email) => {
    setSelectedEmail(email);
  };

  // when email is selected, set 'read' to true
  useEffect( () => {
    if (Object.keys(selectedEmail).length !== 0 ) selectedEmail.read = 'true';
  }, [selectedEmail])


  return (
    <div className="App">
    
      <div className='leftList'>
        <h1>Inbox</h1>
        <SearchBar placeholder={"subject"} handleInput={handleInput} />
        <EmailList emails={filteredEmails} selected={selectedEmail.id} handleClick={handleClick}/>
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
