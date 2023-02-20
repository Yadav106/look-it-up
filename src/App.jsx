import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Details from './components/Details';

const App = () => {

  const [prompt, setPrompt] = useState("");
  const[d, setD] = useState([]);
  const [err, setErr] = useState(null)


  function promptChangeHandler(e) {
    setPrompt(e.target.value);
  }

  async function getdef() {
    try{
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${prompt}`);
      var data = await response.json();
      if(response.status == 404) {
        setErr(data);
        setD([]);
        return;
      }
      setErr(null);
      setD(data);
      setPrompt("");
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='dict'>
      <Navbar />
      <Search 
        prompt = {prompt}
        getdef = {getdef}
        promptChangeHandler = {promptChangeHandler}
      />
      {
        err
        ?
        <pre className='bigdata' key={nanoid()}>{JSON.stringify(err, null, 4)}</pre>
        :
        d.map(item => {
          return <pre className='bigdata' key={nanoid()}>{JSON.stringify(item, null, 4)}</pre>;
        })
      }
    </div>
  )
}

export default App;