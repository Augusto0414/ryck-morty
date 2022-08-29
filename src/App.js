import './App.css';
import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import Character from './components/Character';
import Pagination from './components/Pagination';

function App() {
    const urlInitial = 'https://rickandmortyapi.com/api/character';
    const [character, setCharacter] = useState([]);
    const [info, setInfo] = useState({});

    const reqAppi = async(url) => {
    const api = await fetch(url);
    const data = await api.json();
    setCharacter(data.results); 
    setInfo(data.info);
    }; 

    useEffect(() => {
      reqAppi(urlInitial)
    }, [])
      
    const onPrev = () => {
      const url = info.prev;
      reqAppi(url);
    }

    const onNext = () => {
      const url = info.next;
      reqAppi(url);
    }
  return (
   <>
    <Header props = "Rick and Morty"/>
    <div className="App">
      <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
      <Character characters = {character}/>
      <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
    </div>
   </> 
  );
}

export default App;
