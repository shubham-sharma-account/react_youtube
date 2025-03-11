import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import {
  BASE_URL,
  GOOGLE_API_KEY,
  SEARCH_SUGGESTIONS,
} from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";
import ListVideos from "./ListVideos";

function Head() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setshowSuggestions] = useState(false);
  const cacheStore = useSelector((state) => state.search);
  const [searchSuggestion, setSearchSuggestion] = useState("");

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClickSuggestion = (suggestion) => {
    setSearchSuggestion(suggestion);
    // /search?part=snippet&maxResults=20&q=dubai&type=video&key=
  };

  useEffect(() => {
    const getSuggestionVideos = async () => {
      const result = await fetch(
        `${BASE_URL}/search?part=snippet&maxResults=1&q=${searchSuggestion}&type=video&key=${GOOGLE_API_KEY}`
      );
      const data = await result.json();
      console.log("data >> ", data)
    };

    getSuggestionVideos();
  }, [searchSuggestion]);

  useEffect(() => {
    const getSearhSuggestions = async () => {
      const result = await fetch(`${SEARCH_SUGGESTIONS}${searchValue}`);
      const data = await result.json();
      setSuggestions(data[1]);

      dispatch(
        cacheSearch({
          [searchValue]: data[1],
        })
      );
    };

    const timer = setTimeout(() => {
      console.log("cacheStore ", cacheStore);
      if (cacheStore[searchValue]) {
        setSuggestions(cacheStore[searchValue]);
      } else {
        getSearhSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  return (
    // Header
    <div className="grid grid-flow-col p-5 shadow-lg">
      {/*  Logo and menu*/}
      <div className="flex col-span-1 justify-start">
        <img
          onClick={() => handleMenuToggle()}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <Link to="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtbe-logo"
          />
        </Link>
      </div>
      {/* Search bar */}
      <div className="col-span-10 text-center">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            type="text"
            onChange={handleSearch}
            onFocus={() => setshowSuggestions(true)}
            //added delay on blur coz handleClickSuggestion was not bwing called
            onBlur={() => setTimeout(() => setshowSuggestions(false), 200)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {/* Suggestions lis */}
        <div className="absolute bg-white text-left rounded-lg mx-80 px-4 w-2/5 shadow-lg">
          {suggestions && showSuggestions && (
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    className="py-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleClickSuggestion(suggestion)}
                  >
                    🔍 {suggestion}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      {/* user profile */}
      <div className="col-span-1 justify-evenly">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Head;
