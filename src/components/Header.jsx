import React from "react";
import { Outlet } from "react-router";

const Header = () => {

    return (
        <div className="header-container">
            <h1 className="header">Upcoming Anime Season</h1>
            <h3 className="description">Discover some brand new anime streaming soon!</h3>
            <Outlet />
        </div>
    )

}

export default Header