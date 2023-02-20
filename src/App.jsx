import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Error from './components/Error';

const App = () => {

  const [prompt, setPrompt] = useState("");
  const[d, setD] = useState(null);
  const [err, setErr] = useState(null)
  const [isDark, setIsDark] = useState(false)

  function toggleDark(){
    setIsDark(prev => !prev)
  }


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
    <div className="main">
      <div className="themebg" data-theme={isDark?"dark":""}></div>
      <div className='dict'>
        
        <Navbar isDark = {isDark} toggleDark = {toggleDark}/>
        <Search 
          prompt = {prompt}
          getdef = {getdef}
          promptChangeHandler = {promptChangeHandler}
          isDark = {isDark}
        />

        {
          err
          ?
          <Error isDark={isDark}/>
          :
          <>
            <div className="word--details">
              {d && <h1 className="word" data-theme={isDark?"dark":""}>{d[0]['word']}</h1>}
              {d && <p className="phonetic" data-theme={isDark?"dark":""}>{d[0]['phonetics'][0]['text']}</p>}
            </div>
            {d && d.map(item => {
              const meanings = item["meanings"]
              return meanings.map(element => {
                return <Details isDark={isDark} element={element} key={nanoid()} />
              })
            })}
          </>
        }
      </div>
    </div>
  )
}

export default App;