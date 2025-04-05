import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";

const Animes = ({ animeList }) => {
    
    console.log(animeList)
    
    return (
        <div className="anime-container">
            {animeList.map(anime => <AnimeCard img={anime.images.jpg.image_url} animeTitle={anime.title} animeRating={anime.rating} startDay= {anime.aired.prop.from.day} startMonth={anime.aired.prop.from.month} startYear={anime.aired.prop.from.year}/>)}
        </div>
    )
}

export default Animes