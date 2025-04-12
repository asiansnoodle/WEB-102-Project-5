import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router";
import axios from "axios";

const AnimeInfo = () => {
    let params = useParams();
    const [anime, setAnime] = useState()
    const url = "https://api.jikan.moe/v4/anime/" + params.id

    useEffect(() => {
        const getShowData = async () => {
            const response = await axios.get(url)
            setAnime(response.data.data)
        }
        getShowData()
    }, [])

    const getGenre = (genre) => {
        let genreStr = ""
        for (let i=0; i<genre.length; i++){
            genreStr += genre[i].name + " "
        }
        return genreStr.trim()
    }
    
    if(anime){
        console.log(anime)
        return (
            // <div className="anime-info-container">
            //     <table className="anime-info-table">
            //         <td className="table-left">
            //             <img src={anime.images.jpg.large_image_url} alt="anime thumbnail" />
            //         </td>
            //         <td className="table-right">
            //             <h1>{anime.title}</h1>
            //         </td>
            //     </table>
            // </div>
            <div className="anime-info-container">
                <div className="anime-info-content">
                    <div className="anime-info-image">
                        <img src={anime.images.jpg.large_image_url} alt="Anime poster" />
                    </div>
                    <div className="anime-info-details">
                        <h2 className="anime-title">{anime.title}</h2>
                        <p className="anime-type">{getGenre(anime.genres)}</p>
                        <p className="anime-status">{anime.status}</p>
                        <p className="anime-episodes">{anime.episodes ? ("Episodes: " + anime.episodes) : "Episodes: N/A"}</p>
                        <p className="anime-start-date">{anime.aired.string}</p>
                        <p className="anime-synopsis">{anime.synopsis}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <h1>No Results!</h1>
        )
    }
}

export default AnimeInfo