import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {

  const [prompt, setPrompt] = useState("");
  const[d, setD] = useState([]);


  function promptChangeHandler(e) {
    setPrompt(e.target.value);
  }

  async function getdef() {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${prompt}`);
    var data = await response.json();
    console.log(data);
    setD(data);
    setPrompt("");
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
        d.map(item => {
          return <pre className='bigdata' key={nanoid()}>{JSON.stringify(item, null, 4)}</pre>;
        })
      }
    </div>
  )
}

export default App;