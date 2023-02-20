import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

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
      console.log(response.status);
      var data = await response.json();
      console.log(data);
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
      <input type='text' onChange={promptChangeHandler} value={prompt} onKeyDown={e => {
        if(e.key == 'Enter'){
          getdef();
        }
      }}/>
      <button onClick={getdef}>Look It Up</button>
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