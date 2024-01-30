import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './components/EmailList';
import EmailFull from './components/EmailFull';
import SearchBar from './components/SearchBar';
import Folders from './components/Folders';

function App() {
  const [emails, setEmails] = useState([]);
  const [deletedEmails, setDeletedEmails] = useState([]);
  const [filteredDeletedEmails, setFilteredDeletedEmails] = useState([]);
  const [viewDeleted, setViewDeleted] = useState(false);
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
      // add the deleted field to all the emails
      data = data.map( email => {
        return {...email, deleted: false};
      }) 
      setEmails(data);
    });
  }, [])

  // used for search (same as monsters demo)
  useEffect(() => {
    let filtered = [];
    let filteredDeleted = [];
    if (searchInput === "") {
      filtered = emails;
      filteredDeleted = deletedEmails;
    } else {
      filtered = emails.filter(emails =>
        emails.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
      filteredDeleted = deletedEmails.filter(emails =>
        emails.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
    setFilteredDeletedEmails(filteredDeleted);
  }, [emails, searchInput, deletedEmails]);

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

  const handleDelete = (emailId) => {
    // find the email we are looking for
    emails.map( email => {
      if (email.id === emailId){
        email.deleted = true;
        // add email to deleted list
        setDeletedEmails([...deletedEmails, email]);
      }
      return email;
    })
    // remove email from email list
    setEmails(emails.filter(email => email.id !== emailId));
  };

  const inboxButton = () => {
    // when clicking the inbox button, we dont want to view any deleted emails
    setViewDeleted(false);
  };

  const deleteButton = () => {
    // when clicking the inbox button, we dont want to view any deleted emails
    setViewDeleted(true);
  };

  return (
    <div className="App">
    
      <div className='leftList'>
        <Folders inboxButton={inboxButton} deleteButton={deleteButton} />
      </div>

      <div className='middleList'>
        <h1>Inbox</h1>
        <SearchBar placeholder={"subject"} handleInput={handleInput} />
        <EmailList emails={filteredEmails} deletedEmails={filteredDeletedEmails} viewDeleted={viewDeleted} selected={selectedEmail.id} handleClick={handleClick}/>
      </div>

      <div className='rightList'>
        { // if we were given an email, set it as current, otherwise show no email message 
          Object.keys(selectedEmail).length !== 0 ? (
            <EmailFull email={selectedEmail} handleDelete={handleDelete}/>
          ) : (
            <h1>No email selected</h1>
          )
        }
      </div>
    
    </div>
  );
}

export default App;
