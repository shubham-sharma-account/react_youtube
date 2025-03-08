import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Favorite",
  "Criket",
  "News",
  "Cooking",
  "Trvel",
  "Comedy",
  "Market",
  "Children",
  "Feature",
  "Movies",
  "Fashion",
  "Food",
];

function Buttonlist() {
  return (
    <div className="flex">
      {buttonList.map((label, ind) => {
        return <Button key={ind} name={label} />;
      })}
    </div>
  );
}

export default Buttonlist;
