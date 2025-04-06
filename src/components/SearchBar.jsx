import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {

    const [search, setSearch] = useState("")

    const handleInputChange = (e) => {
        setSearch(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search for a title" value={search} onChange={handleInputChange}/>
        </div>
    )

}

export default SearchBar