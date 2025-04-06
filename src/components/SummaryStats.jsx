import React from "react";

const SummaryStats = ({ animeList }) => {
    
    const getMostFavorited = (aniList) => {
        let mostFav = {
            favCount: aniList[0].favorites,
            animeName: aniList[0].title
        }

        for (let i=0; i<aniList.length; i++){
            if (aniList[i].favorites > mostFav.favCount){
                mostFav.favCount = aniList[i].favorites
                mostFav.animeName = aniList[i].title
            }
        }
        return mostFav.animeName
    }

    const getAverageMembers = (aniList) => {
        let totalMembers = 0
        for (let i=0; i<aniList.length; i++){
            totalMembers += aniList[i].members
        }
        return Math.floor(totalMembers / aniList.length)
    }

    if (animeList && animeList.length > 0){
        return (
            <div className="summary-stats-container">
                <div className="summary-card">
                    <h2>Show Count:</h2>
                    <h3>{animeList.length}</h3>
                </div>
                <div className="summary-card">
                    <h2>Most Favorited:</h2>
                    <h3>{getMostFavorited(animeList)}</h3>
                </div>
                <div className="summary-card">
                    <h2>Average Members:</h2>
                    <h3>{getAverageMembers(animeList)}</h3>
                </div>
            </div>
        )
    }
    else if (animeList && animeList.length == 0){
        return (
            <></>
        )
    }
    else{
        return (
            <h2>Loading Stats...</h2>
        )
    }


}

export default SummaryStats