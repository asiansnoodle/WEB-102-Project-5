import React from "react";

const AnimeCard = ({ img, animeTitle, startDay, startMonth, startYear, genre }) => {

    const getGenre = (genre) => {
        let genreStr = ""
        for (let i=0; i<genre.length; i++){
            genreStr += genre[i].name + " "
        }
        return genreStr.trim()
    }
    
    return (
        <div className="anime-card">
            <img className="anime-img" src={img} alt="anime"/>
            <div className="anime-card-text">
                <h4>{animeTitle}</h4>
                <h4>{getGenre(genre)}</h4>
                {(startDay && startMonth && startYear) ? <h4>Start: {startMonth}-{startDay}-{startYear}</h4> : <h4>Start: TBA</h4>}
            </div>
        </div>
    )
}

export default AnimeCard