import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/UI/Header';
import CharactersGrid from './Components/UI/Characters/CharactersGrid';
import CharacterItem from './Components/UI/Characters/CharacterItem';
import Search from './img/Search';

const App =()=>{
  const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(()=>{
      const fetchItems = async()=>{
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false);
      }
    fetchItems();
    },[query])



  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App
