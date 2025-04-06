import React from "react";
import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";

const Animes = ({ animeList }) => {

    if (animeList && animeList.length > 0){
        return (
            <div className="anime-container">
                {
                animeList.map(anime => <AnimeCard key={anime.mal_id} img={anime.images.jpg.image_url} animeTitle={anime.title} genre={anime.genres} startDay= {anime.aired.prop.from.day} startMonth={anime.aired.prop.from.month} startYear={anime.aired.prop.from.year} />)
                }
            </div>
        )
    }
    else {
        return <h2>No Search Results</h2>
    }
}

export default Animes