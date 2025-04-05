import React from 'react'
import { useState, useEffect } from 'react'
import './assets/styles.css'
import Header from './components/Header'
import SummaryStats from './components/SummaryStats'
import Animes from './components/Animes'
import axios from 'axios';

const App = () => {
  const [animeList, setAnimeList] = useState()

  useEffect(() => {
      const fetchData = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/seasons/upcoming")
        setAnimeList(data.data)
      }
      fetchData()
    }, [])
    
  return(
    <div className='app'>
      <Header/>
      <SummaryStats animeList={animeList}/>
      {animeList ? <Animes animeList={animeList.data}/> : <h2>Loading Anime...</h2>}
    </div>
  )

}

export default App
