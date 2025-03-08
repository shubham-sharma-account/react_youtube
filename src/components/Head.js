import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

function Head() {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
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
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          placeholder="Search"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
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
