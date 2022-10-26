import React, {useState, useEffect} from 'react';
import index from './index.css';

const API_URL =`https://api.chucknorris.io/jokes/random` ;

function App() {
  const [joke, setJoke] = useState('') ;

  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }

  useEffect(()=> {
    generateJoke();
  },[])

  return (
    <div className="box">
      <h3>Chuk Norris Jokes Generator </h3>
      <p> {joke} </p>
      <button onClick={generateJoke}>Get a new joke  
      <span  role="img" aria-label="laugh emoji" >  😍</span>
      </button>
    </div>
  );
}

export default App;
 





























































