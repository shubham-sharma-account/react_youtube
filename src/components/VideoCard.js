import React from "react";

function VideoCard({ info }) {
  if (!info) return false;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 w-72 shadow-lg  cursor-pointer">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="card-image"
      />
      <ul className="max-h-38 h-40">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
        <li></li>
      </ul>
    </div>
  );
}

export default VideoCard;
