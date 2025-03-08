import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return false

  return (
    <div className="p-5 shadow-lg w-1/6">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Liked</li>
        <li>Playlist</li>
        <li>Favorite</li>
        <li>Watching</li>
      </ul>
    </div>
  );
}

export default Sidebar;
