import './App.css';
import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import Character from './components/Character';

function App() {
    const urlInitial = 'https://rickandmortyapi.com/api/character';
    const [character, setCharacter] = useState([]);

    const reqAppi = async(url) => {
    const api = await fetch(url);
    const data = await api.json();
    setCharacter(data.results); 
    }; 

    useEffect(() => {
      reqAppi(urlInitial)
    }, [])
   
    
  return (
   <>
    <Header props = "Rick and Morty"/>
    <div className="App">
      <Character characters = {character}/>
    </div>
   </> 
  );
}

export default App;
