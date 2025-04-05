import React from "react";

const AnimeCard = ({ img, animeTitle, animeRating, startDay, startMonth, startYear }) => {
    return (
        <div className="anime-card">
            <img className="anime-img" src={img} alt="anime"/>
            <div className="anime-card-text">
                <h4>{animeTitle}</h4>
                <h4>{animeRating}</h4>
                {(startDay && startMonth && startYear) ? <h4>Start: {startMonth}-{startDay}-{startYear}</h4> : <h4>Start: TBA</h4>}
            </div>
        </div>
    )
}

export default AnimeCard