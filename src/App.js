import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [emails, setEmails] = useState([]);

  useEffect ( () => {
    const url = 'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'
    const data = {};

    axios.get(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then(({data}) => { 
      console.log(data);
      setEmails(data);
    });
  }, [])


  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
