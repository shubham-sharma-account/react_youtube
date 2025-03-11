import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function ListVideos({ videos }) {
  return (
    <div className="flex flex-wrap px-15">
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default ListVideos;
