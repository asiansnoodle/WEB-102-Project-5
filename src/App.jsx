import React from 'react'
import { useState, useEffect } from 'react'
import './assets/styles.css'
import Header from './components/Header'
import SummaryStats from './components/SummaryStats'
import SearchBar from './components/SearchBar'
import Animes from './components/Animes'
import axios from 'axios';

const App = () => {
  const [animeList, setAnimeList] = useState()
  const [fullAnimeList, setFullAnimeList] = useState();


  useEffect(() => {
      const fetchData = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/seasons/upcoming")
        const uniqueData = removeDuplicates(data.data.data, "mal_id")
        setAnimeList(uniqueData)
        setFullAnimeList(uniqueData)
      }
      fetchData()
    }, []
  )
  
  function removeDuplicates(arr, prop) {
    const seen = new Set();
    return arr.filter(obj => {
      const value = obj[prop];
      if (seen.has(value)) {
        return false;
      } 
      else {
        seen.add(value);
        return true;
      }
    });
  }

  const handleSearch = (search) => {
    if (!search.trim()) {
      setAnimeList(fullAnimeList); // Reset if search is empty
    } else {
      const searchedList = fullAnimeList.filter(anime =>
        anime.title.toLowerCase().includes(search.toLowerCase())
      );
      setAnimeList(searchedList);
    }
  }

  return(
    <div className='app'>
      <Header/>
      <SearchBar onSearch={handleSearch}/>
      <SummaryStats animeList={animeList}/>
      {animeList ? <Animes animeList={animeList}/> : <h2>Loading Anime...</h2>}
    </div>
  )

}

export default App
